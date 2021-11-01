import React, {useContext} from "react";
import {Box, ScrollView} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import {StaticImages, Translate} from "../../share";
import LanguageProvider from "../../share/context/Language";
import {CheckAllIcon, MainLayout} from "../../components";
import NotificationCard from "./components/NotificationCard";


const notificationSampleData = [
    {
        logo: StaticImages.lazada,
        title: 'Đăng kí thành công thẻ Lazada',
        due: '12/12/2021 - 12:00',
        description: 'Chúc mừng bạn đã đăng kí thành công thẻ thành viên của Lazada',
        unread: true,
    },
    {
        logo: StaticImages.cgv,
        title: 'Bạn đã trở thành thành viên của CGV Cinema',
        due: '12/12/2021 - 12:00',
        description: 'Chúc mừng bạn đã đăng kí thành công thẻ thành viên của Lazada',
        unread: true
    },
    {
        logo: StaticImages.gs25,
        title: 'Bạn đã được tặng 1 voucher',
        due: '12/12/2021 - 12:00',
        description: 'Bạn đã được tặng 1 voucher 50% khi mua hóa đơn trên 100k'
    },
    {
        logo: StaticImages.cgv,
        title: 'Bạn đã nhận được một sản phẩm tri ân khách hàng',
        due: '12/12/2021 - 12:00',
        description: 'Chúc mừng bạn đã trở thành thành viên vàng của Jockey. Bạn sẽ nhận được một...'
    },
]

const NotificationsScreen: React.FC<any> = MainLayout(() => {
    const {language} = useContext(LanguageProvider.context)

    return (
        <Box flex={1}>
            <ScreenHeader hasBackButton={true} title={Translate[language].notifications} bgColor="primary.500"
                          rightIcon={<CheckAllIcon size={6}/>}/>
            <ScrollView>
                {
                    notificationSampleData.map((item, index) => (
                        <NotificationCard item={item} key={index}/>
                    ))
                }
            </ScrollView>
        </Box>
    )
})

NotificationsScreen.defaultProps = {authRequire: true}

export default NotificationsScreen
