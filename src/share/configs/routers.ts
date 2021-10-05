
export const ScreenName = {
    MAIN_SCREEN: "Main",
    HOME_SCREEN: "Home",
    NEAR_BY_SCREEN: "NearBy",
    CART_SCREEN: "Cart",
    NOTIFICATION_SCREEN: "Notification",
    LOGIN_SCREEN: "Login",
    REGISTER_SCREEN: "Register",
    AUTH_SCREEN: "Auth",
    ACCOUNT_SCREEN: "Account",
    BU_DETAIL_SCREEN: "BUDetail"
}
export const ScreenTitle = {
    [ScreenName.HOME_SCREEN]: "Trang chủ",
    [ScreenName.NOTIFICATION_SCREEN]: "Thông báo",
    [ScreenName.NEAR_BY_SCREEN]: "Gần bạn",
    [ScreenName.CART_SCREEN]: "Giỏ hàng",
    [ScreenName.ACCOUNT_SCREEN]: "Tài khoản",
    [ScreenName.LOGIN_SCREEN]: "Đăng nhập",
    [ScreenName.REGISTER_SCREEN]: "Đăng ký",
    [ScreenName.BU_DETAIL_SCREEN]: "Chi tiết BU"
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

        [ScreenName.AUTH_SCREEN]:{
            path: 'auth'
        },
        [ScreenName.LOGIN_SCREEN]:{
            path: 'login'
        },
        [ScreenName.REGISTER_SCREEN]:{
            path: 'register'
        },

        [ScreenName.BU_DETAIL_SCREEN]: {
            path: 'bu/:id',
            parse: {
                id: String,
            },
        },
    }
}
