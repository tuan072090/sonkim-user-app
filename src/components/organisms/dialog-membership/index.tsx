import React from 'react';
import { Box, Button, Modal, Text } from 'native-base';
import { ImageStatic } from '../..';
import { ScreenName, StaticImages } from '../../../share';
import { DialogMemberShipType } from './DialogMembership.types';
import { useNavigation } from '@react-navigation/core';

const DialogMemberShip: React.FC<DialogMemberShipType> = ({ onClose, isOpen, title = 'title', messenge = "messenser", logoUri, footer }) => {
    const navigation = useNavigation();
    const _navigateHome = () => {
        // @ts-ignore
        navigation.navigate(ScreenName.HOME_SCREEN);
    };

    return (
        <Modal isOpen={isOpen} size='xl' onClose={onClose}>
            <Modal.Content rounded='16'>
                <Modal.Body>
                    <Box flex={1} alignContent='center' alignItems='center'>
                        <ImageStatic uri={logoUri} width={88} height={88} />
                        <Text fontSize="xl" fontWeight="semibold" textAlign="center">{title}</Text>
                        <Text fontSize="md" textAlign="center" color="muted.500">{messenge}</Text>
                    </Box>
                </Modal.Body>
                <Modal.Footer mb={2} bgColor='white'>
                    {!footer ? <Button.Group space={5}>
                        <Button width={'45%'} onPress={_navigateHome} rounded="xl" bgColor="info.100" _text={{ color: "primary.500" }}>
                            Về trang chủ
                        </Button>
                        <Button width={'45%'} rounded="xl" >
                            Xem thẻ
                        </Button>
                    </Button.Group> : footer}
                </Modal.Footer>
            </Modal.Content>
        </Modal>
    );
};

DialogMemberShip.propTypes = {

};

export default DialogMemberShip;