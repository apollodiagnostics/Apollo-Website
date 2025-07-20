import { DynamicModule, Module } from '@nestjs/common';
import { RouterModule } from '@nestjs/core';
import { ArticleModule } from 'src/module/article/article.module';
import { GalleryModule } from 'src/module/gallery/gallery.module';
import { NewsModule } from 'src/module/newsandmedia/news.module';
import { AccreditationModule } from 'src/module/accreditation/accreditation.module';
import { BannerModule } from 'src/module/banner/banner.module';
import { CenterModule } from 'src/module/center/center.module';
import { TestimonialModule } from 'src/module/testimonial/testimonial.module';
import { ItemModule } from 'src/module/item/item.module';
import { MasterModule } from 'src/module/master/master.module';
import { TestModule } from 'src/module/test/test.module';
import { CareerModule } from 'src/module/career/career.module';
import { RatingModule } from 'src/module/rating/rating.module';
import { CartModule } from 'src/module/cart/cart.module';
import { TopItemModule } from 'src/module/top-item/top_item.module';
import { EnquireModule } from 'src/module/enquire_now/enquire_now.module';
import { FaqModule } from 'src/module/faq/faq.module';
import { CenterVisitSlotsModule } from 'src/module/center-visit-slots/center_visit_slots.module';
import { BlogsModule } from 'src/module/blogs/blogs.module';
import { UhidProfileModule } from 'src/module/user-uhid-profile/uhid_profile.module';
import { UserModule } from 'src/module/user/user.module';
import { PrescriptionModule } from 'src/module/prescription/prescription.module';
import { SlotsModule } from 'src/module/slots/slots.module';
import { ItDoseLoginModule } from 'src/module/it-dose-login/it_dose_login.module';
import { GetChargeDetailModule } from 'src/module/get-charge-detail/get_charge_detail.module';
import { HcCreditModule } from 'src/module/hc-credit/hc_credit.module';
import { DownloadReportModule } from 'src/module/download-report/download_report.module';
import { PaymentModule } from 'src/module/payment/payment.module';
import { DynamicRoasterModule } from 'src/module/dynamic-roaster/item-inclusion/dynamic_roaster_module';
import { FileUploadModule } from 'src/module/file-upload/file_upload.module';
import { HomeCollectionModule } from 'src/module/home-collection/home_collection.module';

const dynamicModule = [
    {
        path: 'ratings',
        module: RatingModule,
    },

    {
        path: 'galaries',
        module: GalleryModule,
    },

    {
        path: 'news',
        module: NewsModule,
    },

    {
        path: 'articles',
        module: ArticleModule,
    },

    {
        path: 'testimonials',
        module: TestimonialModule,
    },

    {
        path: 'master',
        module: MasterModule,
    },

    {
        path: 'tests',
        module: TestModule,
    },

    {
        path: 'items',
        module: ItemModule,
    },

    {
        path: 'carts',
        module: CartModule,
    },

    {
        path: 'accreditation',
        module: AccreditationModule,
    },

    {
        path: 'center',
        module: CenterModule,
    },

    {
        path: 'banner',
        module: BannerModule,
    },

    {
        path: 'career',
        module: CareerModule,
    },

    {
        path: 'top-items',
        module: TopItemModule,
    },

    {
        path: 'center-visit-slots',
        module: CenterVisitSlotsModule,
    },

    {
        path: 'enquire',
        module: EnquireModule,
    },

    {
        path: 'faqs',
        module: FaqModule,
    },

    {
        path: 'blogs',
        module: BlogsModule,
    },

    {
        path: 'uhid-profile',
        module: UhidProfileModule,
    },

    {
        path: 'user',
        module: UserModule,
    },

    {
        path: 'prescription',
        module: PrescriptionModule,
    },

    {
        path: 'slots',
        module: SlotsModule,
    },

    {
        path: 'home-collection',
        module: HomeCollectionModule,
    },

    {
        path: 'login-api-dynamic',
        module: ItDoseLoginModule,
    },

    {
        path: 'get-charge-detail',
        module: GetChargeDetailModule,
    },

    {
        path: 'hc-credit',
        module: HcCreditModule,
    },
    {
        path: 'it-dose',
        module: DownloadReportModule,
    },

    {
        path: 'order-payment',
        module: PaymentModule,
    },

    {
        path: 'dynamic-roaster',
        module: DynamicRoasterModule,
    },

    {
        path: 'upload',
        module: FileUploadModule,
    },
];

@Module({})
export class AppRouterModule {
    static register(): DynamicModule {
        return {
            module: AppRouterModule,
            imports: [
                ...dynamicModule.map((item) => item.module),
                RouterModule.register(dynamicModule),
            ],
        };
    }
}
