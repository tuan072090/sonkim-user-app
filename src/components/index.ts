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
    VoucherIcons,
    ValueIcon,
    RefreshIcon,
    PointExchangericon,
    ArrowDropDownIcon
} from "./atoms/icons/CommonIcons"
import Image from "./atoms/image"
import ImageStatic from './atoms/image/ImageStatic'
import FullScreenLoader from './atoms/loader/FullScreenLoader';
import MyButton from './atoms/button/index'
import HTMLContent from "./atoms/html-content";

//  molecules
import Avatar from './molecules/avatar'
import Picker from './molecules/picker'
import QrCode from './molecules/qr-code'
import ImagePicker from "./molecules/image-picker"
import BarcodeCpn from './molecules/barcode'
import NotificationFloatMessage from "./molecules/notification-float-message";

//  Organisms
import DatePicker from './organisms/datepicker'
import FeatureItems from './organisms/feature-item'
import MembershipCard from './organisms/membership-cards'
import LoyaltyCard from './organisms/loyalty-cards'
import VoucherCard from "./organisms/voucher-card";
import GiftCard from './organisms/gift-card'
import AvatarPicker from './organisms/avatar-picker'
import Dialog from "./organisms/dialog/index";

//  templates
import OnBoarding from './templates/onboarding'
import AuthComponent from './templates/auth'
import MainLayout from "./templates/layout/MainLayout";
import {PageProps} from './templates/layout/mainLayoutProps.types'
import ListLoyaltySelect from "./templates/list-loyalty-select";
import { Typo } from "./atoms/typo";
import MySwitch from "./atoms/switch";
import PressBox from "./atoms/press-box";
import PriceDisplay from "./molecules/price-display";
import FloatMessage from "./molecules/float-message";
import OrderVoucherCard from "./organisms/order-voucher-card";
import ListLoyaltyFilter from "./templates/list-loyalty-filter";
import OrderVoucherList from "./templates/order-voucher-list";
import OrderGiftCardCard from "./organisms/order-gift-card";
import OrderGiftCardList from "./templates/order-giftcard-list";

export {
    //  Atoms
    HomeIcon, NotificationIcon, NearByIcon, CartIcon, AccountIcon, ImageIcon, EditIcon,RefreshIcon,
    ArrowDropDownIcon,
    PointExchangericon,
    MyButton,
    VoucherIcons,
    ValueIcon,
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
    HTMLContent,
    Typo,
    MySwitch,
    PressBox,

    //  Molecules
    Avatar,
    Picker,
    QrCode,
    BarcodeCpn,
    ImagePicker,
    PriceDisplay,
    FloatMessage,
    NotificationFloatMessage,

    //  Organisms
    DatePicker,
    FeatureItems,
    MembershipCard,
    LoyaltyCard,
    AvatarPicker,
    VoucherCard,
    GiftCard,
    Dialog,
    OrderVoucherCard,
    OrderGiftCardCard,

    //  Templates
    OnBoarding,
    AuthComponent,
    MainLayout,
    ListLoyaltySelect,
    ListLoyaltyFilter,
    OrderVoucherList,
    OrderGiftCardList
}

export type {PageProps}
