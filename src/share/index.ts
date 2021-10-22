import {Colors} from "./configs/colors";
import {ScreenName, ScreenTitle, Deeplink} from "./configs/routers";
import {MAPBOX_ACCESS_TOKEN} from './configs/tokens'
import StaticImages from './static/images'
import {ScreenSize} from './utils/sizes'
import LocalStorageService from "./services/local-storage";
import Validator from './utils/validators'
import Formatter from './utils/formatter'
import Translate from './languages'

//  services
import FetchDataService from "./services/fetch";
import {CheckPhone, Register, Login, Logout, ResetPassword} from "./services/sonkim-api/auth";
import {getVouchers} from "./services/sonkim-api/vouchers";
import {GetUserProfile} from './services/sonkim-api/user'

const SonkimApiService = {
    CheckPhone,Register, Login, ResetPassword, Logout,GetUserProfile, getVouchers
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

    //  services
    FetchDataService,
    SonkimApiService,
    FirebaseService,
    //  hooks
    useDebounce,
    useCountDown,
    useLocalStorage
}
