
export const ScreenName = {
    MAIN_SCREEN: "Main",
    HOME_SCREEN: "Home",
    NEAR_BY_SCREEN: "NearBy",
    CART_SCREEN: "Cart",
    NOTIFICATION_SCREEN: "Notification",
    PHONE_INPUT_SCREEN: "PhoneInput",
    LOGIN_SCREEN: "Login",
    REGISTER_SCREEN: "Register",
    OTP_SCREEN: "OtpScreen",
    RESET_PASSWORD_SCREEN: "ResetPassword",
    ACCOUNT_SCREEN: "Account",
    ACCOUNT_SETTING_SCREEN: "AccountSetting",
    BU_DETAIL_SCREEN: "BUDetail",
    USER_LIST_CARD: "UserListCard",
    REGISTER_MEMBERSHIP: "RegisterMembership",
    LINK_MEMBERSHIP: 'LinkMembership',
    LINK_MEMBERSHIP_FORM: 'LinkMembershipForm',
    REGISTER_MEMBERSHIP_FORM: "RegisterMembershipForm",
    USEPOINT: 'UsePoint',
    USEPOINTQR: 'UsePointQR',
    TRANSFERPOINT: 'TransferPoint',
    STORE: "Store",
}
export const ScreenTitle = {
    [ScreenName.HOME_SCREEN]: "Trang chủ",
    [ScreenName.NOTIFICATION_SCREEN]: "Thông báo",
    [ScreenName.NEAR_BY_SCREEN]: "Gần bạn",
    [ScreenName.CART_SCREEN]: "Giỏ hàng",
    [ScreenName.ACCOUNT_SCREEN]: "Tài khoản",
    [ScreenName.ACCOUNT_SETTING_SCREEN]: "Thiết lập tài khoản",
    [ScreenName.LOGIN_SCREEN]: "Đăng nhập",
    [ScreenName.REGISTER_SCREEN]: "Đăng ký",
    [ScreenName.RESET_PASSWORD_SCREEN]: "Đổi mật khẩu",
    [ScreenName.BU_DETAIL_SCREEN]: "Chi tiết BU",
    [ScreenName.USER_LIST_CARD]: "Danh sách thẻ",
    [ScreenName.REGISTER_MEMBERSHIP]: "Đăng ký thẻ",
    [ScreenName.LINK_MEMBERSHIP]: "Liên kết thẻ",
    [ScreenName.REGISTER_MEMBERSHIP_FORM]: "Điền form đăng ký",
    [ScreenName.LINK_MEMBERSHIP_FORM]: 'Điền form Liên kết thẻ',
    [ScreenName.USEPOINT]: 'Tích và dùng điểm',
    [ScreenName.USEPOINTQR]: 'Tích và dùng điểm',
    [ScreenName.TRANSFERPOINT]: 'Đổi điểm',
    [ScreenName.STORE]: 'Danh sách store',

}

export const Deeplink = {
    screens: {
        Main: {
            screens: {
                [ScreenName.HOME_SCREEN]: 'home',
                [ScreenName.CART_SCREEN]: 'cart',
                [ScreenName.NEAR_BY_SCREEN]: 'nearby',
                [ScreenName.NOTIFICATION_SCREEN]: 'notification',
                [ScreenName.ACCOUNT_SCREEN]: 'account',
            }
        },

        [ScreenName.LOGIN_SCREEN]: {
            path: 'login'
        },
        [ScreenName.REGISTER_SCREEN]: {
            path: 'register'
        },
        [ScreenName.RESET_PASSWORD_SCREEN]: {
            path: "forgotpass"
        },
        [ScreenName.REGISTER_MEMBERSHIP]: {
            path: "registerMemberShip"
        },
        [ScreenName.REGISTER_MEMBERSHIP_FORM]: {
            path: "RegisterMembershipForm"
        },
        [ScreenName.LINK_MEMBERSHIP]: {
            path: "linkMembership"
        },

        [ScreenName.BU_DETAIL_SCREEN]: {
            path: 'bu/:id',
            parse: {
                id: String,
            },
        },
    }
}
