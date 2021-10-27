import {Colors} from "./configs/colors";
import {ScreenName, ScreenTitle, Deeplink} from "./configs/routers";
import {MAPBOX_ACCESS_TOKEN} from './configs/tokens'
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
import {CheckPhone, Register, Login, Logout, ResetPassword} from "./services/sonkim-api/auth";
import {getVouchers} from "./services/sonkim-api/vouchers";
import {GetPersonalInfo, UpdatePersonalInfo} from './services/sonkim-api/user'
import {GetUploadUrl, UploadImage} from './services/sonkim-api/upload'

const SonkimApiService = {
    CheckPhone,Register, Login, ResetPassword, Logout,GetPersonalInfo, UpdatePersonalInfo, getVouchers,GetUploadUrl,UploadImage
}
import FirebaseService from "./services/firebase";

//  hooks
import {useDebounce} from "./hooks/useDebounce";
import {useCountDown} from "./hooks/useCountdown";
import {useLocalStorage} from './hooks/useLocalStorage'

export {
    Colors,
    ScreenName, ScreenTitle, Deeplink,
    StaticImages,
    Translate,
    LocalStorageService,
    MAPBOX_ACCESS_TOKEN,
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
