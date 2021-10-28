import {AccountIcon, CartIcon, HomeIcon, NearByIcon, NotificationIcon,} from "./atoms/icons/BottomNavIcons";
import {
    CheckAllIcon,
    CheckStoreIcon,
    ChevronLeftIcon,
    ChevronRightIcon,
    EditIcon,
    FriendIcon,
    HistoryIcon,
    ImageIcon,
    ListIcon,
    LocationIcon,
    NotificationOutlineIcon,
    PhoneIcon,
    TranslateIcon,
    VoucherIcons
} from "./atoms/icons/CommonIcons"
import Image from "./atoms/image"
import ImageStatic from './atoms/image/ImageStatic'
import FullScreenLoader from './atoms/loader/FullScreenLoader';

//  molecules
import Avatar from './molecules/avatar'
import Picker from './molecules/picker'
import QrCode from './molecules/qr-code'
import ImagePicker from "./molecules/image-picker";

//  Organisms
import DatePicker from './organisms/datepicker'
import FeatureItems from './organisms/feature-item'
import MembershipCards from './organisms/membership-cards'
import VoucherCard from "./organisms/voucher-card";
import AvatarPicker from './organisms/avatar-picker'

//  templates
import OnBoarding from './templates/onboarding'
import AuthComponent from './templates/auth'
import MainLayout from "./templates/layout/MainLayout";
import {PageProps} from './templates/layout/mainLayoutProps.types'

export {
    //  Atoms
    HomeIcon, NotificationIcon, NearByIcon, CartIcon, AccountIcon, ImageIcon, EditIcon,
    VoucherIcons,
    ChevronLeftIcon,
    ListIcon,
    LocationIcon,
    FriendIcon,
    TranslateIcon,
    ChevronRightIcon,
    NotificationOutlineIcon,
    CheckStoreIcon,
    HistoryIcon,
    CheckAllIcon, PhoneIcon,
    Image,
    ImageStatic,
    FullScreenLoader,

    //  Molecules
    Avatar,
    Picker,
    QrCode,
    ImagePicker,

    //  Organisms
    DatePicker,
    FeatureItems,
    MembershipCards,
    AvatarPicker,
    VoucherCard,

    //  Templates
    OnBoarding,
    AuthComponent,
    MainLayout
}

export type {PageProps}
