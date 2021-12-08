import React, {memo, useState} from "react";
import {Center, Text, VStack} from "native-base";
import {ScreenSize} from "../../../share";
import {BranchCardType} from "./branch-card.types";
import PressBox from "../../atoms/press-box";
import Image from "../../atoms/image";
import {Typo} from "../../index";

const fullWidth = ScreenSize.vw;

const cardRegisterWidth = fullWidth / 3.5;
const cardRegisterHeight = fullWidth / 2.7 +12;

const BranchCard: React.FC<BranchCardType> = memo(({loyaltyProgram, onSelect, isSelect = false, ...props}) => {
    const {id, name, avatar} = loyaltyProgram

    const _onPress = () => {
        onSelect(loyaltyProgram)
    }

    return (
        <PressBox
            borderRadius={16}
            onPress={_onPress}
            {...props}
            overflow="hidden"
            borderWidth={!isSelect ? 1 : 2}
            borderColor={!isSelect ? 'muted.300' : 'primary.700'}
            width={cardRegisterWidth}
            height={cardRegisterHeight}
            flexDirection="column"
            alignItems="center">
            <VStack p={3} alignItems="center">
                <Image uri={avatar.url} width={20} height={20} />

                <Typo
                    numberOfLines={2}
                    type={isSelect ? "subtitle16" : "body16"}
                    color={isSelect ? "primary.500" : "black"}
                    mt={2}
                    textAlign="center">
                    {name}
                </Typo>
            </VStack>
        </PressBox>
    );
})

export default BranchCard
