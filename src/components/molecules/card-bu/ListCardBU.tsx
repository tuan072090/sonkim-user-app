import React from "react";

import { Heading, SimpleGrid, Text, VStack } from "native-base";
import CardBU from "./index";
import { StaticImages } from "../../../share";


const ListCardBU = () => {
    const listBU = [
        {
            url: StaticImages.gs25,
            name: "GS25",
        },
        {
            url: StaticImages.lazada,
            name: "Lazada",
        },
        {
            url: StaticImages.vera,
            name: "CGV cinema",
        },
        {
            url: StaticImages.kyo_watamin,
            name: "Kyo watami",
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

    return (
        <VStack space={3} mt="4">
            <Heading size="xl">
                <Text fontSize="xl">Bấm chọn BU cần đăng ký thẻ</Text>
            </Heading>
            <SimpleGrid columns={3} spacingY={3} spacingX={3}>
                {listBU.map((item) => {
                    return <CardBU key={item.name} url={item.url} name={item.name} />;
                })}
            </SimpleGrid>
        </VStack>
    );
};

export default ListCardBU;
