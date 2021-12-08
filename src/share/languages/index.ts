import {store} from "../../redux/store";

const languages = {
    vi: {
        hello:"Chào",
        anonymous: "Người lạ",
        home: "Trang chủ",
        notifications: "Thông báo",
        nearby: "Gần tôi",
        account: "Tài khoản",
        orders: "Đơn hàng",
        userListCard: "Danh sách thẻ",
        userInfo: "Thông tin cá nhân",
        buDetail: "Thông tin thẻ",
        registerMembership: 'Đăng ký thẻ',
        linkMembership: 'Liên kết thẻ',
        usePoint: 'Tích và dùng điểm',
        transferPoint: 'Đổi điểm',
        transactionHistory: 'Lịch sử đổi điểm',
        giftCards:'Thẻ quà tặng',
        orderGiftCards:'Thẻ quà tặng đã lấy',
        vouchers: 'Ưu đãi',
        orderVouchers: 'Ưu đãi đã lấy',
        inviteFriend: 'Mời bạn',
        currentLanguage: "Ngôn ngữ: Tiếng Việt",
        login: "Đăng nhập",
        logout: "Đăng xuất"
    },
    en: {
        hello:"Hello",
        anonymous: "Mr/Ms",
        home: "Home",
        notifications: "Notifications",
        nearby: "Near By",
        account: "Account",
        orders: "Orders",
        userListCard: "List Card",
        userInfo: "User Info",
        buDetail: "Card Information",
        registerMembership: 'Register membership',
        linkMembership: 'Link membership',
        usePoint: 'Use points',
        transferPoint: 'Transfer points',
        transactionHistory: 'Lịch sử đổi điểm',
        giftCards:'Gift Cards',
        orderGiftCards:'Order gift cards',
        vouchers: 'Vouchers',
        orderVouchers: 'Order vouchers',
        inviteFriend: 'Invite friend',
        currentLanguage: "Language: English",
        login: "Login",
        logout: "Logout"
    }
}

export const Translate = (text:string) =>  {
    const lang = store.getState().settings.language
    //  @ts-ignore
    return languages[lang][text]
}

export default languages
