import { ConfigService } from '@nestjs/config';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Sequelize } from 'sequelize-typescript';
import { Logger } from 'winston';
import { DatabaseService } from './database.service';
import { Article } from 'src/module/article/entity/article.entity';
import { Gallery } from 'src/module/gallery/entity/gallery.entity';
import { News } from 'src/module/newsandmedia/entity/news.entity';
import { Banner } from 'src/module/banner/entity/banner.entity';
import { Center } from 'src/module/center/entity/center.entity';
import { Test } from 'src/module/test/entity/test.entity';
import { Testimonial } from 'src/module/testimonial/entity/testimonial.entity';
import { Location } from 'src/module/master/entity/location.entity';
import { Condition } from 'src/module/master/entity/condition.entity';
import { Category } from 'src/module/master/entity/category.entity';
import { ItemDetails } from 'src/module/item/entity/item_details.entity';
import { Google } from 'src/module/rating/entity/google_rating.entity';
import { Cart } from 'src/module/cart/entities/cart.entity';
import { Accreditation } from 'src/module/accreditation/entity/accreditation.entity';
import { Career } from 'src/module/career/entity/career.entity';
import { TopPackage } from 'src/module/top-item/entity/top_item.entity';
import { Enquire } from 'src/module/enquire_now/entity/enquire_now.entity';
import { CenterVisitSlot } from 'src/module/center-visit-slots/entity/center_visit_slots.entity';
import { Faq } from 'src/module/faq/entity/faq.entity';
import { Blogs } from 'src/module/blogs/entity/blogs.entity';
import { BlogsCategory } from 'src/module/blogs/entity/blogs_category.entity';
import { TestHasPopularCategories } from 'src/module/item/entity/test_has_popularcategories';
import { UhidProfile } from 'src/module/user-uhid-profile/entity/uhid_profile.entity';
import { Address } from 'src/module/user-uhid-profile/entity/address.entity';
import { TestHasConditions } from 'src/module/item/entity/test_has_conditions.entity';
import { Reviews } from 'src/module/center/entity/reviews.entity';
import { State } from 'src/module/master/entity/state.entity';
import { CartItem } from 'src/module/cart/entities/cart_item.entity';
import { Otp } from 'src/module/user/entity/otp';
import { Prescription } from 'src/module/prescription/entity/prescription.entity';
import { BookingSlots } from 'src/module/slots/entity/slots_booking.entity';
import { OrderEntity } from 'src/module/home-collection/entity/order.entity';
import { TestDetailEntity } from 'src/module/home-collection/entity/test_detail.entity';
import { OrderPatientEntity } from 'src/module/home-collection/entity/order_patient.entity';
import { OldCart } from 'src/module/home-collection/entity/old_cart.entity';
import { Discount } from 'src/module/item/entity/discount.entity';
export const databaseProvider = [
    {
        provide: 'SEQUELIZE',
        inject: [WINSTON_MODULE_PROVIDER, ConfigService, DatabaseService],
        useFactory: async (
            logger: Logger,
            configService: ConfigService,
            databaseService: DatabaseService,
        ) => {
            console.log({ config: configService.get('database.postgres') });

            const sequelize = new Sequelize(
                configService.get('database.postgres.databaseName'),
                configService.get('database.postgres.username'),
                configService.get('database.postgres.password'),
                {
                    host: configService.get('database.postgres.host'),
                    port: configService.get('database.postgres.port'),
                    dialect: configService.get('database.postgres.dialect'),
                },
            );

            sequelize.addModels([
                Article,
                Google,
                Gallery,
                News,
                Condition,
                Location,
                ItemDetails,
                Category,
                Test,
                Accreditation,
                Center,
                Testimonial,
                Cart,
                Banner,
                Career,
                TopPackage,
                Enquire,
                CenterVisitSlot,
                Faq,
                Blogs,
                BlogsCategory,
                TestHasPopularCategories,
                UhidProfile,
                Address,
                TestHasConditions,
                Reviews,
                State,
                CartItem,
                Otp,
                Prescription,
                BookingSlots,
                OrderEntity,
                TestDetailEntity,
                OrderPatientEntity,
                Condition,
                OldCart,
                Discount,
            ]);

            try {
                await sequelize.authenticate({});

                logger.info('Database connected successfully', {
                    database: sequelize.config.database,
                    username: sequelize.config.username,
                    host: sequelize.config.host,
                    port: sequelize.config.port,
                });

                // Seeding data
                await databaseService.seedingData();
            } catch (error) {
                console.log({ error });

                logger.error(error);
            }
            return sequelize;
        },
    },
];
