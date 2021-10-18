import React from "react";

import { Heading, SimpleGrid, Text, VStack } from "native-base";
import CardBU from "./index";
import { StaticImages } from "../../../share";
import { ListCardBuType } from "./cardBU.types";

const ListCardBU: React.FC<ListCardBuType> = ({ choise, setChoise }) => {
    const listBU = [
        {
            url: StaticImages.gs25,
            name: "GS25",
        },

        {
            url: StaticImages.health_spa,
            name: "Health Spa",
        },
        {
            url: StaticImages.jockey,
            name: "Jockey",
        },
        {
            url: StaticImages.jardin,
            name: "Jardin Dessens",
        },
        {
            url: StaticImages.vera,
            name: "Vera",
        },
        {
            url: StaticImages.lazada,
            name: "Lazada",
        },
        {
            url: StaticImages.cgv,
            name: "CGV cinema",
        },
        {
            url: StaticImages.kyo_watamin,
            name: "Kyo watami",
        },
    ];

    const _choiseBu = (name: string) => {
        setChoise(name);
    };

    console.log(choise);

    return (
        <VStack space={3} mt="4">
            <Heading size="xl">
                <Text fontSize="xl">Bấm chọn BU cần đăng ký thẻ</Text>
            </Heading>
            <SimpleGrid columns={3} spacingY={3} spacingX={3}>
                {listBU.map((item) => {
                    return (
                        <CardBU
                            onPress={() => _choiseBu(item.name)}
                            active={choise === item.name ? true : false}
                            key={item.name}
                            url={item.url}
                            name={item.name}
                        />
                    );
                })}
            </SimpleGrid>
        </VStack>
    );
};

export default ListCardBU;
