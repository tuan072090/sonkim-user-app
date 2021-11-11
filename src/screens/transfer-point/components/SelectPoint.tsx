import React, {memo, useEffect, useState} from "react";
import {Box, HStack, Input, Modal, SimpleGrid} from "native-base";
import {Typo} from "../../../components/atoms/typo";
import {Image, PressBox} from "../../../components";
import {PointSystemType, ScreenSize, useLocalStorage} from "../../../share";

type SelectPointPropsType = {
    pointSystem: PointSystemType,
    pointValue: number,
    onChangePointValue: (value: number) => void,
    onChangePointSystem: (value: PointSystemType) => void
}
const cardWidth = ScreenSize.vw / 3.5;

export const SelectPoint: React.FC<SelectPointPropsType> = memo(({pointSystem, onChangePointSystem, pointValue, onChangePointValue}) => {
    const [pointSystems] = useLocalStorage(useLocalStorage.KEY_LOCAL_POINT_SYSTEMS, [])
    const [pointSystemSelect, selectPointSystem] = useState<PointSystemType>(pointSystem)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        if (pointSystem) selectPointSystem(pointSystem)
    }, [pointSystem])

    const _onchangeText = (text: string) => {
        const point = text.length > 0 ? parseInt(text) : 0
        onChangePointValue(point)
    }

    const _toggleModal = () => {
        setOpenModal(!openModal)
    }

    const _onChangePointSystem = (newPoint: PointSystemType) => {
        selectPointSystem(newPoint)
        setOpenModal(false)
        onChangePointSystem(newPoint)
    }

    return (
        <>
            <Box borderRadius={10} bgColor="white" p={4} mt={2}>
                <HStack justifyContent="space-between">
                    <Input width="60%"
                           fontSize="md"
                           value={pointValue+""}
                           onChangeText={_onchangeText}
                           borderColor="transparent"
                           _focus={{borderColor: "transparent"}}
                           placeholder="Số lượng"
                           keyboardType="numeric"
                    />

                    <PressBox onPress={_toggleModal} flexDirection="row" alignItems="center">
                        <Box mr={1} alignItems="flex-end">
                            <Typo type="subtitle16">{pointSystemSelect.symbol}</Typo>
                            <Typo type="caption" color={"gray.500"}>{(1 / pointSystemSelect.ratio).toFixed(2)}</Typo>
                        </Box>
                        <Image uri={pointSystemSelect.icon.url} width={10} height={10} borderRadius="full"
                               borderWidth={1}
                               borderColor="gray.500"/>
                    </PressBox>
                </HStack>
            </Box>
            <Modal isOpen={openModal} onClose={() => setOpenModal(false)} mt={12}>
                <Modal.Content width="100%" paddingBottom={20} marginTop="auto" safeAreaBottom={true}>
                    <Modal.CloseButton/>
                    <Modal.Header><Typo type="title" textAlign="center">Chọn thẻ</Typo></Modal.Header>
                    <Modal.Body>
                        <SimpleGrid columns={3} spacingY={3} spacingX={3}>
                            {
                                //  @ts-ignore
                                pointSystems ? pointSystems.map((item: PointSystemType, index) => {
                                    const isSelected = pointSystemSelect.id === item.id

                                    return (
                                        <PressBox key={index}
                                                  onPress={() => _onChangePointSystem(item)}
                                                  p={2}
                                                  alignItems="center"
                                                  borderRadius={16}
                                                  width={cardWidth}
                                                  borderWidth={1}
                                                  borderColor={isSelected ? "primary.500" : "muted.300"}
                                        >
                                            <Image uri={item.icon.url} width={50} height={50}/>
                                            <Typo mt={3} type="subtitle14">{item.symbol}</Typo>
                                        </PressBox>
                                    )
                                }) : null
                            }
                        </SimpleGrid>
                    </Modal.Body>

                </Modal.Content>
            </Modal>
        </>
    )
})
