import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Post,
    Query,
} from '@nestjs/common';
import { Response as ResponseCustom } from '../../../utils/response/response.decorator';
import { responseName } from 'src/constants/response';
import { CartService } from '../service/cart.service';
import { ParamDto } from '../dto/cart_param.dto';
import { QueryDto } from '../dto/cart_query.dto';
import { CardDto } from '../dto/add_cart.dto';
import { RemoveCartDto } from '../dto/remove_cart.dto';

@Controller()
export class CartController {
    constructor(private readonly cartService: CartService) {}

    @Get('/:id')
    @ResponseCustom(responseName.GET_CART)
    async getCartById(@Param() param: ParamDto) {
        return await this.cartService.getCartById(param.id);
    }

    @Get()
    @ResponseCustom(responseName.GET_ALL_CARTS)
    async getAllCarts(@Query() cart: QueryDto) {
        const { profileId, mobileNumber, limit, offset } = cart;
        return await this.cartService.getAllCarts(
            profileId,
            mobileNumber,
            limit,
            offset,
        );
    }

    @Post()
    @ResponseCustom(responseName.CART_ITEM_ADDED)
    async addCart(@Body() info: CardDto) {
        return await this.cartService.addCart(info);
    }

    @Delete()
    @ResponseCustom(responseName.CART_ITEM_REMOVED)
    async removeCart(@Query() info: RemoveCartDto) {
        return await this.cartService.removeCart(info);
    }
}
