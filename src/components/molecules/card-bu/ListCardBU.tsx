import React, { useEffect, useState } from "react";
import { SimpleGrid, VStack } from "native-base";
import CardBU from "./index";
import { ListCardBuType } from "./cardBU.types";
import { GetBranches } from "../../../share/services/sonkim-api/branches";
import { Alert } from "react-native";

const ListCardBU: React.FC<ListCardBuType> = ({ choise, setChoise }) => {

    const [branch, setBranch] = useState<
        { id: number; name: string; url: string }[]
    >([]);

    const _choiseBu = (name: string) => {
        setChoise(name);
    };

    const _getAllBranch = () => {
        GetBranches().then(({ data }) => {
            let formatData: any[] = [];

            data.forEach((item: any) => {
                formatData.push({
                    id: item.id,
                    name: item.name,
                    url: item.logo.formats.thumbnail.url,
                });
            });
            setBranch(formatData);
        }).catch(err => Alert.alert(err.message));
    };

    useEffect(() => {
        _getAllBranch();
    }, []);

    return (
        <VStack space={3}>
            <SimpleGrid columns={3} spacingY={3} spacingX={3}>
                {branch.map((item) => {
                    return (
                        <CardBU
                            onPress={() => _choiseBu(item.name)}
                            active={choise === item.name ? true : false}
                            key={item.name}
                            url={{ uri: item.url }}
                            name={item.name}
                        />
                    );
                })}
            </SimpleGrid>
        </VStack>
    );
};

export default ListCardBU;
