import React, {useEffect, useState} from "react";
import {SimpleGrid, VStack} from "native-base";
import {Alert} from "react-native";
import CardStore from ".";
import {GetStores} from "../../../share/services/sonkim-api/stores";

const ListCardStore = ({}) => {
    // const navigation = useNavigation();
    const [store, setStore] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    // const _navigateForm = () => {
    //     // @ts-ignore
    //     navigation.navigate(ScreenName.REGISTER_MEMBERSHIP_FORM);
    // };

    const _getAllStore = () => {
        setLoading(true);
        GetStores().then(({data}) => {
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
        }).catch((err) => Alert.alert(err.message));
    };

    useEffect(() => {
        _getAllStore();
    }, []);
    if (!!loading) {
        return null;
    }
    return (
        <VStack space={3}>
            <SimpleGrid columns={2} spacingY={3} spacingX={3}>
                {store.map((item: any) => {
                    return (
                        <CardStore
                            address={item.address}
                            url={{uri: item.avatar}}
                            key={item.id}
                        />
                    );
                })}
            </SimpleGrid>
        </VStack>
    );
};

ListCardStore.propTypes = {};

export default ListCardStore;
