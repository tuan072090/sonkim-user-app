//  configs
import {Colors} from "./configs/colors";
import {Deeplink, ScreenName, ScreenTitle} from "./configs/routers";
import {API_URI, APP_VERSION,APP_BUILD} from './configs/commonConfigs'
import {FontStyles} from './configs/fontStyles'

import StaticImages from './static/images'
import LocalStorageService from "./services/local-storage";
import Translate from './languages'

//  utils
import {ScreenSize} from './utils/sizes'
import Validator from './utils/validators'
import Formatter from './utils/formatter'
import {GenderList} from "./utils/constant";

//  services
import FetchDataService from "./services/fetch";
import {CheckPhone, Login, Logout, Register, ResetPassword} from "./services/sonkim-api/auth";
import {
    BuyPromotion,
    GetOrderPromotionDetail,
    GetOrderPromotions,
    GetPromotionDetail,
    GetPromotions
} from "./services/sonkim-api/promotions";
import {GetPersonalInfo, UpdatePersonalInfo} from './services/sonkim-api/user'
import {GetUploadUrl, UploadImage} from './services/sonkim-api/upload'
import {GetArticleDetail, GetArticles} from './services/sonkim-api/articles'
import {GetStores} from './services/sonkim-api/stores'
import {GetNotifications, ReadNotification} from './services/sonkim-api/notifications'
import {GetBranches} from './services/sonkim-api/branches'
import {
    GetLoyaltyProgramDetail,
    GetLoyaltyPrograms, GetUserMembershipCardDetail,
    GetUserMembershipCards, RegisterMemberShipCard, UpdateMemberShipCardInfo
} from './services/sonkim-api/loyaltyPrograms'
import {GetGiftCardDetail, GetGiftCards, GetOrderGiftCards} from './services/sonkim-api/giftCards'
import FirebaseService from "./services/firebase";

//  hooks
import {useDebounce} from "./hooks/useDebounce";
import {useCountDown} from "./hooks/useCountdown";
import {useLocalStorage} from './hooks/useLocalStorage'
import {GetPointHistories, GetPointSwapHistories, GetPointSystems} from "./services/sonkim-api/points";

const SonkimApiService = {
    CheckPhone,
    Register,
    Login,
    ResetPassword,
    Logout,
    GetPersonalInfo,
    UpdatePersonalInfo,
    GetBranches,
    GetPromotions,
    GetOrderPromotions,
    GetOrderPromotionDetail,
    GetPromotionDetail,
    BuyPromotion,
    GetUploadUrl,
    UploadImage,
    GetArticles,
    GetArticleDetail,
    GetStores,
    GetNotifications,
    ReadNotification,
    GetLoyaltyPrograms,
    RegisterMemberShipCard,
    UpdateMemberShipCardInfo,
    GetLoyaltyProgramDetail,
    GetUserMembershipCards,
    GetUserMembershipCardDetail,
    GetGiftCards,
    GetOrderGiftCards,
    GetGiftCardDetail,
    GetPointHistories,
    GetPointSwapHistories,
    GetPointSystems
}

export {
    Colors,
    FontStyles,
    ScreenName, ScreenTitle, Deeplink, API_URI, APP_VERSION,APP_BUILD,
    StaticImages,
    LocalStorageService,

    //  utils
    ScreenSize,
    Validator,
    Formatter,
    GenderList,

    //  services
    FetchDataService,
    SonkimApiService,
    FirebaseService,

    //  hooks
    useDebounce,
    useCountDown,
    useLocalStorage,

    //  language
    Translate
}

//  types
export type {StoreTypes} from './data-types/store.types'
export type {BusinessUnitType} from './data-types/businessUnit.types'
export type {UserType} from './data-types/user.types'
export type {PromotionType, OrderVoucherType} from './data-types/promotion.types'
export type {GiftCardType, OrderGiftCardTypes} from './data-types/giftCard.types'
export type {NotificationType} from './data-types/notification.types'
export type {LoyaltyProgramTypes} from './data-types/loyaltyProgram.types'
export type {UserMemberShipCardType} from './data-types/userMembershipCard.types'
export type {PointSwapHistoryType, PointSystemType} from './data-types/point.types'
