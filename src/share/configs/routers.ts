
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
    USER_INFO: 'UserInfo',
    REGISTER_MEMBERSHIP: "RegisterMembership",
    LINK_MEMBERSHIP: 'LinkMembership',
    LINK_MEMBERSHIP_FORM: 'LinkMembershipForm',
    REGISTER_MEMBERSHIP_FORM: "RegisterMembershipForm",
    USEPOINT: 'UsePoint',
    USEPOINTQR: 'UsePointQR',
    TRANSFER_POINT: 'TransferPoint',
    STORE: "Store",
    VOUCHERS_SCREEN: "Vouchers",
    VOUCHER_DETAIL:"VoucherDetail",
    TRANSACTION_HISTORY: 'TransactionHistory',
    ARTICLE_SCREEN: "Article"

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
    [ScreenName.USER_INFO]: "Thông tin cá nhân",
    [ScreenName.REGISTER_MEMBERSHIP]: "Đăng ký thẻ",
    [ScreenName.LINK_MEMBERSHIP]: "Liên kết thẻ",
    [ScreenName.REGISTER_MEMBERSHIP_FORM]: "Điền form đăng ký",
    [ScreenName.LINK_MEMBERSHIP_FORM]: 'Điền form Liên kết thẻ',
    [ScreenName.USEPOINT]: 'Tích và dùng điểm',
    [ScreenName.USEPOINTQR]: 'Tích và dùng điểm',
    [ScreenName.TRANSFER_POINT]: 'Đổi điểm',
    [ScreenName.STORE]: 'Danh sách store',
    [ScreenName.VOUCHERS_SCREEN]: 'Danh sách khuyến mãi',
    [ScreenName.VOUCHER_DETAIL]: 'Chi tiết khuyến mãi',
    [ScreenName.TRANSACTION_HISTORY]: 'Lịch sử đổi điểm',
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

        [ScreenName.VOUCHER_DETAIL]: {
            path: 'voucher/:id',
            parse: {
                id: String,
            },
        },

        [ScreenName.BU_DETAIL_SCREEN]: {
            path: 'bu/:id',
            parse: {
                id: String,
            },
        },
    }
}
