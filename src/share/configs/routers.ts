
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
    MEMBERSHIP_REGISTER_SCREEN: "LoyaltyRegister",
    MEMBERSHIP_REGISTER_SELECT_SCREEN: "LoyaltyRegisterSelect",
    MEMBERSHIP_DETAIL_SCREEN: "MembershipCardDetail",
    USER_LIST_CARD: "UserListCard",
    USER_INFO: 'UserInfo',
    LINK_MEMBERSHIP: 'LinkMembership',
    LINK_MEMBERSHIP_FORM: 'LinkMembershipForm',
    REGISTER_MEMBERSHIP_FORM: "RegisterMembershipForm",
    USE_POINT: 'UsePoint',
    USE_POINT_QR: 'UsePointQR',
    TRANSFER_POINT: 'TransferPoint',
    STORES_SCREEN: "Stores",
    VOUCHERS_SCREEN: "Vouchers",
    VOUCHER_DETAIL:"VoucherDetail",
    ORDER_VOUCHERS_SCREEN: "OrderVouchers",
    ORDER_VOUCHER_DETAIL: "OrderVoucherDetail",
    ORDER_GIFT_CARDS_SCREEN: "OrderGiftCards",
    ORDER_GIFT_CARD_DETAIL_SCREEN: "OrderGiftCardDetail",
    TRANSACTION_SWAP_POINT_HISTORY: 'TransactionSwapPointHistory',
    ARTICLE_SCREEN: "Article",
    GIFT_CARD_LIST_SCREEN: "GiftCardList",
    GIFT_CARD_DETAIL_SCREEN: "GiftCardDetail",

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
    [ScreenName.MEMBERSHIP_REGISTER_SCREEN]: "Đăng ký thẻ thành viên",
    [ScreenName.USER_LIST_CARD]: "Danh sách thẻ",
    [ScreenName.USER_INFO]: "Thông tin cá nhân",
    [ScreenName.LINK_MEMBERSHIP]: "Liên kết thẻ",
    [ScreenName.REGISTER_MEMBERSHIP_FORM]: "Điền form đăng ký",
    [ScreenName.LINK_MEMBERSHIP_FORM]: 'Điền form Liên kết thẻ',
    [ScreenName.USE_POINT]: 'Tích và dùng điểm',
    [ScreenName.USE_POINT_QR]: 'Tích và dùng điểm',
    [ScreenName.TRANSFER_POINT]: 'Đổi điểm',
    [ScreenName.STORES_SCREEN]: 'Danh sách store',
    [ScreenName.VOUCHERS_SCREEN]: 'Danh sách ưu đãi',
    [ScreenName.VOUCHER_DETAIL]: 'Chi tiết ưu đãi',
    [ScreenName.ORDER_VOUCHERS_SCREEN]: "Ưu đãi đã mua",
    [ScreenName.ORDER_VOUCHER_DETAIL]: "Ưu đãi đã mua",
    [ScreenName.ORDER_GIFT_CARDS_SCREEN]: "Thẻ quà tặng đã mua",
    [ScreenName.ORDER_GIFT_CARD_DETAIL_SCREEN]: "Chi tiết thẻ quà tặng",
    [ScreenName.TRANSACTION_SWAP_POINT_HISTORY]: 'Lịch sử đổi điểm',
    [ScreenName.GIFT_CARD_LIST_SCREEN]: 'Thẻ quà tặng',
    [ScreenName.GIFT_CARD_DETAIL_SCREEN]: 'Chi tiết thẻ quà tặng',
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

        [ScreenName.GIFT_CARD_DETAIL_SCREEN]: {
            path: 'giftCard/:id',
            parse: {
                id: String,
            },
        },
    }
}
