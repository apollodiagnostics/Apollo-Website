import { Inject, Injectable } from '@nestjs/common';
import { CART_ERROR, ITEM_ERROR } from 'src/constants/error';
import { HttpExceptionWrapper } from 'src/utils/error/error.http.wrapper';
import { Cart } from '../entities/cart.entity';
import { Op, QueryTypes } from 'sequelize';
import { CardDto } from '../dto/add_cart.dto';
import { CartItem } from '../entities/cart_item.entity';
import { ItemDetails } from 'src/module/item/entity/item_details.entity';
import { RemoveCartDto } from '../dto/remove_cart.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class CartRepository {
    constructor(@Inject('SEQUELIZE') private readonly sequelize: Sequelize) {}
    async getAllCarts(
        profileId: number,
        mobileNumber: string,
        limit: number,
        offset: number,
    ) {
        const cart = await Cart.findAndCountAll({
            where: {
                ...(profileId && { profile_id: { [Op.eq]: profileId } }),
                ...(mobileNumber && {
                    mobile_number: { [Op.eq]: mobileNumber },
                }),
            },
        });

        const cartIds = cart.rows.map((entity) => entity.id);
        const cartItem = await CartItem.findAndCountAll({
            where: { cart_id: cartIds },
        });

        if (!cartItem.count) {
            return [];
        }
        const cartItemIds = cartItem.rows.map((entity) => entity.cart_id);
        const query = `
        SELECT a.id, 
        b.itemid, b.itemname, b.itemcode,b.item_alias_name,b.from_agein_days,b.to_agein_days,
        b.gender,b.labname,b.labcode,b.lab_id,b.rate,b.schedule_rate,b.from_date,b.to_date,
        b.item_type,b.test_in_package,b.nabl_cap,b.item_remarks,b.discounted,b.state_id,
        b.city_id,b.package_in_clussion,b.pre_test_information,b.report_delivery,b.test_type,
        b.components,b.information_for_doctor,b.item_description,b.test_description,b.location_page_content,
        b.panel_id,b.slug,b.SubCategoryID,b.synonyms_for_test,b.keywords,b.title,b.meta_description,
        b.is_active,b.created_at,b.updated_at,b.added_in_xml

        FROM cart_item_v2 AS a
        JOIN item_details AS b ON a.item_id = b.id
        WHERE a.cart_id IN (:cartIds)
        LIMIT :limit OFFSET :offset
      `;

        const results = await this.sequelize.query(query, {
            type: QueryTypes.SELECT,
            replacements: {
                cartIds: cartItemIds,
                limit: limit,
                offset: offset,
            },
        });

        return results;
    }

    async getCartById(id: number) {
        const cart = await Cart.findOne({
            where: { id },
            attributes: { exclude: ['created_at', 'updated_at'] },
        });
        if (!cart) {
            throw new HttpExceptionWrapper(CART_ERROR.CART_DETAILS_NOT_FOUND);
        }
        return cart;
    }

    async addCart(info: CardDto) {
        const { mobile_number, item_list } = info;

        const createCart = await Cart.findOne({
            where: { mobile_number: mobile_number },
        });

        let cart;
        if (!createCart) {
            cart = await Cart.create({
                mobile_number: mobile_number,
            });
        } else {
            cart = createCart;
        }

        const itemIds = [];
        const rates = [];
        for (let i = 0; i < item_list.length; i++) {
            const val = item_list[i];
            const item = await ItemDetails.findOne({
                where: { itemid: val.item_id, city_id: val.city_id },
            });
            if (!item) {
                throw new HttpExceptionWrapper(ITEM_ERROR.DATA_NOT_FOUND);
            }
            itemIds.push(item.id);
            rates.push(item.rate);
        }

        const data = [];
        for (const i in itemIds) {
            const obj = {
                item_id: itemIds[i],
                item_price: rates[i],
                item_quantity: 1,
                cart_id: cart.id,
            };

            data.push(obj);
        }

        return await CartItem.bulkCreate(data);
    }

    async removeCart(info: RemoveCartDto) {
        const { itemId, cityId, mobileNumber, labId } = info;
        const cart = await Cart.findOne({
            where: { mobile_number: mobileNumber },
        });
        if (!cart) {
            throw new HttpExceptionWrapper(CART_ERROR.CART_DETAILS_NOT_FOUND);
        }

        const cartId = cart.id;
        const item = await ItemDetails.findOne({
            where: {
                city_id: cityId,
                [Op.or]: [{ id: itemId }, { itemid: itemId }],
                lab_id: labId,
            },
        });

        if (!item) {
            throw new HttpExceptionWrapper(ITEM_ERROR.DATA_NOT_FOUND);
        }
        const item_id = item.id;
        const result = await CartItem.findOne({
            where: { cart_id: cartId, item_id: item_id },
        });
        if (!result) {
            throw new HttpExceptionWrapper(CART_ERROR.ITEM_NOT_FOUND);
        }

        return await CartItem.destroy({ where: { id: result.id } });
    }
}
