import { IResponseStatusMessage } from 'src/utils/response/response.interface';
import * as AccreditationResponse from './accreditation/accreditation.response';
import * as BannerResponse from './banner/banner_response.constants';
import * as BlogResponse from './blog/blog.response';
import * as CancelHomeCollection from './cancel-home-collection/cancel_home_collection';
import * as CareerResponse from './career/career.response';
import * as cartResponse from './cart/cart';
import * as CenterVisitSlotsResponse from './center-visit-slots/center_visit_slots.response';
import * as CenterResponse from './center/center_search_response.constants';
import * as DownloadReportResponse from './downloadReport/download_report.response';
import * as EnquireResponse from './enquire-now/enquire_now.response';
import * as FaqResponse from './faq/faq.response';
import * as FileUploadResponse from './file-upload/file_upload.response';
import * as HcCreditResponse from './hc-credit/hc_credit.response';
import * as HomeCollectionResponse from './home-collection/home_collection.response';
import * as ItdoseLoginResponse from './it-dose-login/it_dose_login';
import * as ItemResponse from './item/item.response';
import * as MasterResponse from './master/master.response';
import * as PaymentResponse from './payment/payment.response';
import * as PrescriptionResponse from './prescription/prescription';
import * as ResheduledHomeCollection from './reshedule-home-collection/reshedule_home_collection';
import * as ItemInclusionResponse from './item-inclusion/item_inclusion.response';
import * as TestimonialResponse from './responseCode/testimonial';
import * as SlotsResponse from './slots/slots_booking';
import * as TestResponse from './test/test.response';
import * as TopItemResponse from './top-item/top_items.response';
import * as UhidProfileResponse from './uhid-profile/uhid_profile.response';
import * as UserLoginResponse from './user/user_login.response';

// Response action name

export const responseName = {
    ...CenterResponse.centerResponseName,
    ...TestResponse.testResponseName,
    ...TestimonialResponse.TestimonialResponseName,
    ...MasterResponse.masterResponseName,
    ...ItemResponse.itemResponseName,
    ...cartResponse.cartResponseName,
    ...BannerResponse.bannerResponseName,
    ...CareerResponse.careerResponseName,
    ...AccreditationResponse.accreditationResponseName,
    ...TopItemResponse.topItemResponseName,
    ...EnquireResponse.enquireResponseName,
    ...CenterVisitSlotsResponse.centerVisitSlotsResponseName,
    ...FaqResponse.faqResponseName,
    ...BlogResponse.blogResponseName,
    ...UhidProfileResponse.uhidProfileResponseName,
    ...UserLoginResponse.userLoginResponseName,
    ...PrescriptionResponse.prescriptionResponseName,
    ...SlotsResponse.slotsResponseName,
    ...HomeCollectionResponse.homeCollectionResponseName,
    ...ItdoseLoginResponse.loginResponseName,
    ...ResheduledHomeCollection.resheduleHomeCollectionResponseName,
    ...CancelHomeCollection.cancelHomeCollectionResponseName,
    ...HcCreditResponse.hcCreditResponseName,
    ...DownloadReportResponse.DownloadReportResponseName,
    ...PaymentResponse.paymentResponseName,
    ...ItemInclusionResponse.itemInclusionResponseName,
    ...FileUploadResponse.fileUploadResponseName,
    ...PaymentResponse.paymentResponseName,
};

// Response information
export const responseInfo: Record<string, IResponseStatusMessage> = {
    ...BannerResponse.bannerResponseInfo,
    ...CenterResponse.centerResponseInfo,
    ...AccreditationResponse.accreditationResponseInfo,
    ...TestResponse.testResponseInfo,
    ...TestimonialResponse.TestimonialResponseInfo,
    ...MasterResponse.masterResponseInfo,
    ...ItemResponse.itemResponseInfo,
    ...cartResponse.cartResponseInfo,
    ...CareerResponse.careerResponseInfo,
    ...TopItemResponse.topItemResponseInfo,
    ...EnquireResponse.enquireResponseInfo,
    ...CenterVisitSlotsResponse.centerVisitSlotsResponseInfo,
    ...FaqResponse.faqResponseInfo,
    ...BlogResponse.blogsResponseInfo,
    ...UhidProfileResponse.uhidProfileResponseInfo,
    ...UserLoginResponse.userLoginResponseInfo,
    ...PrescriptionResponse.prescriptionResponseInfo,
    ...SlotsResponse.slotsResponseInfo,
    ...HomeCollectionResponse.homeCollectionResponseInfo,
    ...ItdoseLoginResponse.loginResponseInfo,
    ...ResheduledHomeCollection.resheduleHomeCollectionResponseInfo,
    ...CancelHomeCollection.cancelHomeCollectionResponseInfo,
    ...HcCreditResponse.hcCreditResponseInfo,
    ...DownloadReportResponse.DownloadReportResponseInfo,
    ...PaymentResponse.paymentResponseInfo,
    ...ItemInclusionResponse.itemInclusionResponseInfo,
    ...FileUploadResponse.fileUploadResponseInfo,
    ...PaymentResponse.paymentResponseInfo,
};
