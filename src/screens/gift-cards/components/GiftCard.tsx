import { Box, Button, HStack, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import { ImageStatic, ValueIcon } from '../../../components'
import { FormatVND } from '../../../share/utils/formatter'
import { GiftCardType } from '../giftCard.type'


const GiftCard:React.FC<GiftCardType> = ({giftCard,...props}) => {
    return (
        <Pressable _pressed={{opacity: 0.5}}>
            <VStack bgColor="white" borderRadius={12} shadow={4} mt={3}>
                <HStack px={3} py={2}>
                    <Box borderRadius={6}>
                        <ImageStatic uri={giftCard.avatar} borderRadius={6} width={20} height={20}/>
                    </Box>

                    <VStack pl={3} py={1} flex={1}>
                        <Text fontWeight="semibold" fontStyle="normal" lineHeight="md" fontSize="md" >{giftCard.title}</Text>
                        <Box width="full">
                            <HStack alignItems="center" mt={1}>
                                <ValueIcon size={4}/>
                                <Text ml={2} fontWeight="normal" lineHeight="xs" letterSpacing="lg" fontSize="sm">Trị giá: {FormatVND(giftCard.value)} đ</Text> 
                            </HStack>
                        </Box> 
                    </VStack>
                </HStack>
                <Box borderWidth={1} borderColor="#C8C8C8" borderStyle="dashed" width="80" mx="auto"/>
                <HStack justifyContent="space-between" alignItems="center" px={4} my={2}>
                    <VStack>
                        <Text fontWeight="semibold" fontStyle="normal" fontSize="md" color="primary.500">{FormatVND(giftCard.price)} đ</Text>
                        <Text fontWeight="normal" fontStyle="normal" fontSize="sm" color="#C8C8C8" textDecorationLine="line-through">{FormatVND(giftCard.cost)} đ</Text>
                    </VStack>

                    <Button bgColor="rgba(8,105,129,0.2)" borderRadius={10} width={40}>
                        <Text fontWeight='semibold' fontStyle='normal' fontSize='md' lineHeight='md'
                              color='rgba(8,105,129,1)' textAlign="center" my='auto'>Mua thẻ quà tặng</Text>
                    </Button>
                </HStack>
            </VStack>
        </Pressable>
    )
}

export default GiftCard

