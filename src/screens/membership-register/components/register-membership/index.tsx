import React, {useState} from "react";
import {Box, Button, Heading, ScrollView, Text} from "native-base";
import ScreenHeader from "../../../../components/organisms/screen-header";
import {LoyaltyProgramTypes, ScreenName, SonkimApiService, StaticImages} from "../../../../share";
import {Dialog, HTMLContent, ImageStatic, MyButton} from "../../../../components";
import {RegisterMembershipForm} from "./register-membership-form";
import {Alert, StyleSheet} from "react-native";
import {useNavigation} from "@react-navigation/core";

type RegisterMembershipTypes = {
    loyaltyProgram: LoyaltyProgramTypes,
}
const RegisterMembership: React.FC<RegisterMembershipTypes> = ({loyaltyProgram}) => {
    const [cardInfo, setCardInfo] = useState(null);
    const [formData, setFormData] = useState<any>()
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const _onFormChange = (data: any) => {
        setFormData(data)
    }

    const _navToHome = () => {
        //  @ts-ignore
        navigation.navigate(ScreenName.HOME_SCREEN)
        setCardInfo(null)
    }

    const _navToCardDetail = () => {
        //  @ts-ignore
        navigation.navigate(ScreenName.MEMBERSHIP_DETAIL_SCREEN, {id: cardInfo.id});
        setCardInfo(null)
    }

    const _submit = async () => {
        try {
            setLoading(true)
            //  register
            const card = await SonkimApiService.RegisterMemberShipCard(loyaltyProgram.id, formData)

            console.log("card....", card)

            setCardInfo(card)
            setLoading(false)
        }catch (err) {
            console.log("err....", err)
            setCardInfo(null)
            setLoading(false)
            Alert.alert(err.message, err.status)
        }
    }

    const {business_unit} = loyaltyProgram

    return (
        <Box flex={1} position="relative" alignItems="center">
            <ScreenHeader
                hasBackButton={true}
                title={loyaltyProgram.name}
                bgColor="primary.500"
            />

            <ScrollView>
                <Heading color="white" fontSize="md" fontWeight="semibold" p={5} textAlign="center"
                         bg="primary.500">
                    ??i???n th??ng tin ????ng k?? l??m th??? th??nh vi??n {business_unit.name}
                </Heading>

                <Box position="relative" bg="primary.500" style={styles.registerForm}>
                    <ImageStatic resizeMode="cover" position="absolute" top={0} left={0} right={0} bottom={0}
                                 height="105%" uri={StaticImages.reg_membership_backgroud}/>

                    <RegisterMembershipForm p={5} pb={15} width="full" onFormChange={_onFormChange}/>

                    <Box style={styles.bottomBox}/>
                </Box>

                <Box p={5}>
                    <Text fontSize="lg" fontWeight="medium" color="primary.800">
                        Th??ng tin th??? t??ch ??i???m {business_unit.name}
                    </Text>

                    <Box my={3}>
                        <HTMLContent>
                            {loyaltyProgram.body}
                        </HTMLContent>
                    </Box>
                </Box>
            </ScrollView>

            <Dialog
                isOpen={!!cardInfo}
                onClose={() => setCardInfo(null)}
                imgUri={loyaltyProgram.avatar.url}
                title="T???o th??? th??nh vi??n th??nh c??ng"
                messenge={`Ch??c m???ng b???n ???? t???o th??nh c??ng th??? th??nh vi??n ${business_unit.name}`}
                footer={<Button.Group space={5}>
                    <Button width={'45%'} onPress={_navToHome} rounded="xl" bgColor="info.100" _text={{ color: "primary.500" }}>
                        V??? trang ch???
                    </Button>
                    <Button onPress={_navToCardDetail} width={'45%'} rounded="xl" >
                        Xem th???
                    </Button>
                </Button.Group>
                }
            />

            <Box width="100%" pt={4} px={4} safeAreaBottom={true} shadow={9}>
                <MyButton size="lg" isLoading={loading} w="100%" onPress={_submit}>????ng k?? th???</MyButton>
            </Box>
        </Box>
    );
};

export default RegisterMembership;

const styles = StyleSheet.create({
    registerForm: {
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: 'hidden',
    },
    bottomBox: {
        width: '100%',
        height: 20
    }
})
