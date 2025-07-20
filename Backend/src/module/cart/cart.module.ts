import { Module } from '@nestjs/common';
import { CartController } from './controller/cart.controller';
import { CartService } from './service/cart.service';
import { CartRepository } from './repository/cart.repository';
import { DatabaseModule } from 'src/database/database.module';

@Module({
    imports: [DatabaseModule],
    controllers: [CartController],
    providers: [CartService, CartRepository],
    exports: [CartRepository],
})
export class CartModule {}
