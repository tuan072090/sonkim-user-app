import React, {useState} from "react";
import {Button, Modal, ScrollView, Text} from "native-base";
import {useNavigation} from "@react-navigation/core";
import {DialogPointChanger} from "./dialogPointExchange.types";
import {ListBUCard} from "../../index";

const DialogPointChange: React.FC<DialogPointChanger> = ({
                                                             onClose,
                                                             isOpen = false,
                                                             choiseBu,
                                                         }) => {
    const navigation = useNavigation();

    const [bu, setBU] = useState<string>("");

    const _choiseBU = () => {
        choiseBu(bu);
        onClose();
    };

    return (
        <Modal isOpen={isOpen} size="full" onClose={onClose}>
            <Modal.Content {...styles.bottom} >
                <Modal.CloseButton size={"lg"} top={"3%"}/>
                <Modal.Header borderBottomWidth={0}>
                    <Text fontSize="xl" fontWeight="semibold" textAlign="center">
                        Chọn thẻ cần đổi điểm
                    </Text>
                </Modal.Header>
                <Modal.Body>
                    <ScrollView w='100%'>
                        <ListBUCard/>
                    </ScrollView>
                </Modal.Body>
                <Modal.Footer mb={2} bgColor="white">
                    <Button
                        disabled={bu === "" ? true : false}
                        onPress={_choiseBU}
                        width={"100%"}
                        p="3"
                        rounded="xl"
                    >
                        Chọn
                    </Button>
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
};

DialogPointChange.propTypes = {};

export default DialogPointChange;

const styles = {
    bottom: {
        marginBottom: 0,
        marginTop: "auto",
        borderRadius: "24px 24px 0px 0px",
    },
};
