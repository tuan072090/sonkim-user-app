import React from 'react';
import {Box, Modal, Text} from 'native-base';
import {DialogType} from './dialogType.types';
import Image from "../../atoms/image";

const Dialog: React.FC<DialogType> = ({onClose, isOpen, title = 'title', messenge = "", imgUri, footer}) => {

    return (
        <Modal isOpen={isOpen} size='xl' onClose={onClose}>
            <Modal.Content rounded='16'>
                <Modal.Body>
                    <Box flex={1} alignContent='center' alignItems='center'>
                        {imgUri && <Image uri={imgUri} width={88} height={88}/>}
                        <Text fontSize="xl" fontWeight="semibold" textAlign="center">{title}</Text>
                        <Text fontSize="md" textAlign="center" color="muted.500">{messenge}</Text>
                    </Box>
                </Modal.Body>

                {
                    footer && <Modal.Footer mb={2} bgColor='white'>
                        {footer}
                    </Modal.Footer>
                }

            </Modal.Content>
        </Modal>
    );
};

export default Dialog;
