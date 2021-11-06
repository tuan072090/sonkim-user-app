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
        case ScreenName.MEMBERSHIP_CARD_REGISTER_SCREEN:
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
        case ScreenName.TRANSACTION_HISTORY:
            itemImage = StaticImages.history_point
            itemLabel = "Lịch sử"
            break;
        case "RankPoint":
            itemImage = StaticImages.rank_point
            itemLabel = "Thứ hạng"
            break;
        case "Vouchers":
            itemImage = StaticImages.vouchers
            itemLabel = "Voucher"
            break;
        case "GiftCards":
            itemImage = StaticImages.gift_cards
            itemLabel = "Thẻ quà tặng"
            break;
        case "News":
            itemImage = StaticImages.news
            itemLabel = "Tin tức"
            break;
        case "Stores":
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
    RegisterMembership: (props: any) => (<FeatureItem name={ScreenName.MEMBERSHIP_CARD_REGISTER_SCREEN} {...props} />),
    LinkMembership: (props: any) => (<FeatureItem name="LinkMembership" {...props} />),
    TransferPoint: (props: any) => (<FeatureItem name="TransferPoint" {...props} />),
    History: (props: any) => <FeatureItem name="History" {...props} />,
    RankPoint: (props: any) => <FeatureItem name="RankPoint" {...props} />,
    Vouchers: (props: any) => <FeatureItem name="Vouchers" {...props} />,
    GiftCards: (props: any) => <FeatureItem name="GiftCards" {...props} />,
    News: (props: any) => <FeatureItem name="News" {...props} />,
    Stores: (props: any) => <FeatureItem name="Stores" {...props} />
};

export default FeatureItems;
