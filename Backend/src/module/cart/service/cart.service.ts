import { Injectable } from '@nestjs/common';
import { CartRepository } from '../repository/cart.repository';
import { CardDto } from '../dto/add_cart.dto';
import { RemoveCartDto } from '../dto/remove_cart.dto';

@Injectable()
export class CartService {
    constructor(private readonly cartRepository: CartRepository) {}
    async getAllCarts(
        profileId: number,
        mobileNumber: string,
        limit: number,
        offset: number,
    ) {
        const cart = await this.cartRepository.getAllCarts(
            profileId,
            mobileNumber,
            limit,
            offset,
        );
        return cart;
    }

    async getCartById(id: number) {
        return await this.cartRepository.getCartById(id);
    }

    async addCart(info: CardDto) {
        return await this.cartRepository.addCart(info);
    }

    async removeCart(info: RemoveCartDto) {
        return await this.cartRepository.removeCart(info);
    }
}
