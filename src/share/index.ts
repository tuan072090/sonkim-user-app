import {Colors} from "./configs/colors";
import {ScreenName, ScreenTitle, Deeplink} from "./configs/routers";
import {MAPBOX_ACCESS_TOKEN} from './configs/tokens'
import StaticImages from './static/images'
import {ScreenSize} from './utils/sizes'
import LocalStorageService from "./services/local-storage";
import Validator from './utils/validators'
import Translate from './languages'

//  services
import FetchDataService from "./services/fetch";
import {CheckPhone} from "./services/sonkim-api/auth";

const SonkimApiService = {
    CheckPhone
}


export {
    Colors,
    ScreenName, ScreenTitle, Deeplink,
    StaticImages,
    ScreenSize,
    LocalStorageService,
    Validator,
    Translate,
    MAPBOX_ACCESS_TOKEN,
    //  services
    FetchDataService,
    SonkimApiService
}
