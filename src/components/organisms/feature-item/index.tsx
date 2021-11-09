import React from "react";
import {ScreenName, StaticImages} from "../../../share";
import {Pressable} from "native-base";
import ImageStatic from "../../atoms/image/ImageStatic";
import {FeatureItemTypes} from "./featureItem.types";
import {useNavigation} from "@react-navigation/core";
import {Typo} from "../../atoms/typo";

const FeatureItem: React.FC<FeatureItemTypes> = ({name, ...props}) => {
    const navigation = useNavigation();

    const _onPressHandler = (name: string) => {
        // @ts-ignore
        navigation.navigate(name)
    };

    let itemImage = StaticImages.fallback_img
    let itemLabel = ".."

    switch (name){
        case ScreenName.USE_POINT:
            itemImage = StaticImages.use_point
            itemLabel = "Tích dùng điểm"
            break;
        case ScreenName.MEMBERSHIP_REGISTER_SELECT_SCREEN:
            itemImage = StaticImages.register_card
            itemLabel = "Đăng ký thẻ"
            break;
        case ScreenName.LINK_MEMBERSHIP:
            itemImage = StaticImages.link_card
            itemLabel = "Liên kết thẻ"
            break;
        case ScreenName.TRANSFER_POINT:
            itemImage = StaticImages.transfer_point
            itemLabel = "Đổi điểm"
            break;
        case ScreenName.TRANSACTION_SWAP_POINT_HISTORY:
            itemImage = StaticImages.history_point
            itemLabel = "Lịch sử"
            break;
        case "RankPoint":
            itemImage = StaticImages.rank_point
            itemLabel = "Thứ hạng"
            break;
        case ScreenName.VOUCHERS_SCREEN:
            itemImage = StaticImages.vouchers
            itemLabel = "Voucher"
            break;
        case ScreenName.GIFT_CARD_LIST_SCREEN:
            itemImage = StaticImages.gift_cards
            itemLabel = "Thẻ quà tặng"
            break;
        case "News":
            itemImage = StaticImages.news
            itemLabel = "Tin tức"
            break;
        case ScreenName.STORES_SCREEN:
            itemImage = StaticImages.stores
            itemLabel = "Cửa hàng"
            break;
    }

    return (
        <Pressable
            onPress={() => _onPressHandler(name)}
            _pressed={{opacity: 0.5}}
            flexDirection="column"
            alignItems="center"
            {...props}
        >
            <ImageStatic uri={itemImage} width={55} height={55}/>
            <Typo type="caption" mt={2} textTransform="uppercase" textAlign="center">
                {itemLabel}
            </Typo>
        </Pressable>
    );
};

const FeatureItems = {
    UsePoint: (props: any) => <FeatureItem name={ScreenName.USE_POINT} {...props} />,
    RegisterMembership: (props: any) => (<FeatureItem name={ScreenName.MEMBERSHIP_REGISTER_SELECT_SCREEN} {...props} />),
    LinkMembership: (props: any) => (<FeatureItem name={ScreenName.LINK_MEMBERSHIP} {...props} />),
    TransferPoint: (props: any) => (<FeatureItem name={ScreenName.TRANSFER_POINT} {...props} />),
    History: (props: any) => <FeatureItem name={ScreenName.TRANSACTION_SWAP_POINT_HISTORY} {...props} />,
    RankPoint: (props: any) => <FeatureItem name="RankPoint" {...props} />,
    Vouchers: (props: any) => <FeatureItem name={ScreenName.VOUCHERS_SCREEN} {...props} />,
    GiftCards: (props: any) => <FeatureItem name={ScreenName.GIFT_CARD_LIST_SCREEN} {...props} />,
    News: (props: any) => <FeatureItem name="News" {...props} />,
    Stores: (props: any) => <FeatureItem name={ScreenName.STORES_SCREEN} {...props} />
};

export default FeatureItems;
