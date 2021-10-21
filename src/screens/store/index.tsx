import React, { useEffect, useState } from "react";
import { Alert } from "react-native";

import { Box, Button, Heading, Input, Text } from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";
import { ScreenName, StaticImages } from "../../share";
import { useNavigation } from "@react-navigation/core";
import { ImageStatic } from "../../components";
import DialogMemberShip from "../../components/organisms/dialog-membership";
import { getAllStore } from "../../share/services/sonkim-api/stores";
import CardStore from "../../components/molecules/card-store";

const StorePage = () => {
    const navigation = useNavigation();
    const [open, setOpen] = useState(false);
    const [store, setStore] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const _navigateForm = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.REGISTER_MEMBERSHIP_FORM);
    };

    const _getAllStore = () => {
        setLoading(true);
        getAllStore().then(({ data }) => {
            let formatData: any[] = [];
            data.forEach((item: any) => {
                formatData.push({
                    id: item.id,
                    name: item.name,
                    avatar: item.avatar.formats.thumbnail.url,
                    address: item.location.address,
                });
            });
            setStore(formatData);
            setLoading(false);
        }).catch(err => Alert.alert(err.message));
    };

    useEffect(() => {
        _getAllStore();
    }, []);

    if (!!loading) {
        return null
    }
    return (
        <Box flex={1} position="relative" alignItems="center">
            <ImageStatic
                resizeMode="cover"
                position="absolute"
                bottom={0}
                left={0}
                width="100%"
                height="100%"
                uri={StaticImages.link_membership_backgroud}
            />
            <Box flex={1} width="100%">
                <ScreenHeader
                    hasBackButton={true}
                    title={"Cửa hàng Healthspa"}
                    bgColor="primary.500"
                />

                <Box p={5} flexDirection="row">
                    {store.map((item) => (
                        <CardStore address={item.address} url={{ uri: item.avatar }} key={item.id}></CardStore>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default StorePage;
