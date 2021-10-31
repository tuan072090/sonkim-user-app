import {Colors} from "./configs/colors";
import {Deeplink, ScreenName, ScreenTitle} from "./configs/routers";
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
import {GetVouchers} from "./services/sonkim-api/vouchers";
import {GetPersonalInfo, UpdatePersonalInfo} from './services/sonkim-api/user'
import {GetUploadUrl, UploadImage} from './services/sonkim-api/upload'
import {GetArticleDetail, GetArticles} from './services/sonkim-api/articles'
import {GetStores} from './services/sonkim-api/stores'
import FirebaseService from "./services/firebase";

//  hooks
import {useDebounce} from "./hooks/useDebounce";
import {useCountDown} from "./hooks/useCountdown";
import {useLocalStorage} from './hooks/useLocalStorage'

const SonkimApiService = {
    CheckPhone,
    Register,
    Login,
    ResetPassword,
    Logout,
    GetPersonalInfo,
    UpdatePersonalInfo,
    GetVouchers,
    GetUploadUrl,
    UploadImage,
    GetArticles,
    GetArticleDetail,
    GetStores
}

export {
    Colors,
    ScreenName, ScreenTitle, Deeplink,
    StaticImages,
    Translate,
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
    useLocalStorage
}

//  types
export type {StoreTypes} from './data-types/store.types'
export type {BusinessUnitType} from './data-types/businessUnit.types'
export type {UserType} from './data-types/user.types'
export type {PromotionType} from './data-types/promotion.types'
