import React from "react";
import { StaticImages } from "../../../share";
import { Pressable, Text } from "native-base";
import ImageStatic from "../../atoms/image/ImageStatic";
import { FeatureItemTypes } from "./featureItem.types";

const FeatureItem: React.FC<FeatureItemTypes> = ({ name, ...props }) => {
    const _onPressHandler = () => { };

    const itemImage =
        name === "UsePoint"
            ? StaticImages.earn_point
            : name === "RegisterMembership"
                ? StaticImages.register_card
                : name === "LinkMembership"
                    ? StaticImages.link_card
                    : name === "TransferPoint"
                        ? StaticImages.transfer_point
                        : name === "History"
                            ? StaticImages.history_point
                            : name === "RankPoint"
                                ? StaticImages.rank_point
                                : StaticImages.fallback_img;

    const itemLabel =
        name === "UsePoint"
            ? "Tích, dùng điểm"
            : name === "RegisterMembership"
                ? "Đăng ký thẻ"
                : name === "LinkMembership"
                    ? "Liên kết thẻ"
                    : name === "TransferPoint"
                        ? "Đổi điểm"
                        : name === "History"
                            ? "Lịch sử"
                            : name === "RankPoint"
                                ? "Thứ hạng điểm"
                                : "...";

    return (
        <Pressable
            onPress={_onPressHandler}
            _pressed={{ opacity: 0.5 }}
            flexDirection="column"
            alignItems="center"
            {...props}
        >
            <ImageStatic uri={itemImage} width={16} height={16} borderRadius={100} />
            <Text mt={2} textTransform="uppercase" textAlign="center">
                {itemLabel}
            </Text>
        </Pressable>
    );
};

const FeatureItems = {
    UsePoint: (props: any) => <FeatureItem name="UsePoint" {...props} />,
    RegisterMembership: (props: any) => (
        <FeatureItem name="RegisterMembership" {...props} />
    ),
    LinkMembership: (props: any) => (
        <FeatureItem name="LinkMembership" {...props} />
    ),
    TransferPoint: (props: any) => (
        <FeatureItem name="TransferPoint" {...props} />
    ),
    History: (props: any) => <FeatureItem name="History" {...props} />,
    RankPoint: (props: any) => <FeatureItem name="RankPoint" {...props} />,

};

export default FeatureItems;
