import { ACCREDITATION_ERROR_CONFIG } from './config/accreditation';
import { BANNER_ERROR_CONFIG } from './config/banner';
import { BLOG_ERROR_CONFIG } from './config/blog';
import { CAREER_ERROR_CONFIG } from './config/career';
import { CART_ERROR_CONFIG } from './config/cart';
import { CENTER_ERROR_CONFIG } from './config/center';
import { CENTER_VISIT_SLOTS_ERROR_CONFIG } from './config/center_visit_slots';
import { COMMON_ERROR_CONFIG } from './config/common';
import { DEFAULT_ERROR_CONFIG } from './config/default';
import { ENQUIRE_ERROR_CONFIG } from './config/enquire_now';
import { FAQ_ERROR_CONFIG } from './config/faq';
import { FILE_UPLOAD_ERROR_CONFIG } from './config/file_upload';
import { HOME_COLLECTION_ERROR_CONFIG } from './config/home_collection';
import { ITEM_ERROR_CONFIG } from './config/item';
import { MASTER_ERROR_CONFIG } from './config/master';
import { OTP_ERROR_CONFIG } from './config/otp';
import { PRESCRIPTION_ERROR_CONFIG } from './config/prescription';
import { RESHEDULE_ERROR_CONFIG } from './config/reshedule_home_collection';
import { TEST_ERROR_CONFIG } from './config/test';
import { TESTIMONIAL_ERROR_CONFIG } from './config/testimonial';
import { UHID_PROFILE_ERROR_CONFIG } from './config/uhid_profile';
import { ACCREDITATION_ERROR } from './errors/accreditation';
import { BANNER_ERROR } from './errors/banner';
import { BLOG_ERROR } from './errors/blog';
import { CAREER_ERROR } from './errors/career';
import { CART_ERROR } from './errors/cart';
import { CENTER_ERROR } from './errors/center';
import { CENTER_VISIT_SLOTS_ERROR } from './errors/center_visit_slots';
import { CITY_ERROR } from './errors/city';
import { COMMON_ERROR } from './errors/common';
import { DEFAULT_ERROR } from './errors/default';
import { ENQUIRE_ERROR } from './errors/enquire_now';
import { FAQ_ERROR } from './errors/faq';
import { FILE_UPLOAD_ERROR } from './errors/file_upload';
import { HOME_COLLECTION_ERROR } from './errors/home_collection';
import { ITEM_ERROR } from './errors/item';
import { OTP_ERROR } from './errors/otp';
import { PRESCRIPTION_ERROR } from './errors/prescription';
import { RESHEDULE_ERROR } from './errors/reshedule_home_collection';
import { TEST_ERROR } from './errors/test';
import { TESTIMONIAL_ERROR } from './errors/testimonial';
import { UHID_PROFILE_ERROR } from './errors/uhid_profile';
import { MASTER_ERROR } from './master/master.error';
import { CITY_ERROR_CONFIG } from './config/city';
import { CONDITION_ERROR } from './errors/condition';
import { CONDITION_ERROR_CONFIG } from './config/condition';

export type ERROR =
    | DEFAULT_ERROR
    | COMMON_ERROR
    | MASTER_ERROR
    | TEST_ERROR
    | TESTIMONIAL_ERROR
    | CART_ERROR
    | ACCREDITATION_ERROR
    | CENTER_ERROR
    | BANNER_ERROR
    | CAREER_ERROR
    | ENQUIRE_ERROR
    | FAQ_ERROR
    | CENTER_VISIT_SLOTS_ERROR
    | ITEM_ERROR
    | UHID_PROFILE_ERROR
    | BLOG_ERROR
    | OTP_ERROR
    | PRESCRIPTION_ERROR
    | HOME_COLLECTION_ERROR
    | RESHEDULE_ERROR
    | FILE_UPLOAD_ERROR
    | CITY_ERROR
    | CONDITION_ERROR;

export {
    ACCREDITATION_ERROR,
    BANNER_ERROR,
    BLOG_ERROR,
    CAREER_ERROR,
    CART_ERROR,
    CENTER_ERROR,
    CENTER_VISIT_SLOTS_ERROR,
    COMMON_ERROR,
    DEFAULT_ERROR,
    ENQUIRE_ERROR,
    FAQ_ERROR,
    FILE_UPLOAD_ERROR,
    HOME_COLLECTION_ERROR,
    ITEM_ERROR,
    MASTER_ERROR,
    OTP_ERROR,
    PRESCRIPTION_ERROR,
    RESHEDULE_ERROR,
    TEST_ERROR,
    TESTIMONIAL_ERROR,
    UHID_PROFILE_ERROR,
    CITY_ERROR,
    CONDITION_ERROR,
};

export const errorConfig = {
    ...DEFAULT_ERROR_CONFIG,
    ...COMMON_ERROR_CONFIG,
    ...TESTIMONIAL_ERROR_CONFIG,
    ...MASTER_ERROR_CONFIG,
    ...TEST_ERROR_CONFIG,
    ...CART_ERROR_CONFIG,
    ...CENTER_ERROR_CONFIG,
    ...BANNER_ERROR_CONFIG,
    ...CAREER_ERROR_CONFIG,
    ...ACCREDITATION_ERROR_CONFIG,
    ...ENQUIRE_ERROR_CONFIG,
    ...CENTER_VISIT_SLOTS_ERROR_CONFIG,
    ...FAQ_ERROR_CONFIG,
    ...BLOG_ERROR_CONFIG,
    ...ITEM_ERROR_CONFIG,
    ...UHID_PROFILE_ERROR_CONFIG,
    ...OTP_ERROR_CONFIG,
    ...PRESCRIPTION_ERROR_CONFIG,
    ...HOME_COLLECTION_ERROR_CONFIG,
    ...RESHEDULE_ERROR_CONFIG,
    ...FILE_UPLOAD_ERROR_CONFIG,
    ...CITY_ERROR_CONFIG,
    ...CONDITION_ERROR_CONFIG,
};
