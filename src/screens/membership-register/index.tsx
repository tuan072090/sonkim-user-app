import React, {useEffect, useState} from "react";
import {Alert} from "react-native";
import {Box} from "native-base";
import {useNavigation, useRoute} from '@react-navigation/native';
import {RedirectBox} from "./components/RedirectBox";
import {LoyaltyProgramTypes, SonkimApiService, useLocalStorage} from "../../share";
import RegisterMembership from "./components/register-membership";
import {LinkMemberShip} from "./components/link-membership/LinkMemberShip";
import {FullScreenLoader, MainLayout} from "../../components";

const MembershipRegisterScreen: React.FC<any> = MainLayout(() => {
    const route = useRoute()
    const navigation = useNavigation()
    const [loyaltyProgram, setLoyaltyProgram] = useState<null | LoyaltyProgramTypes>(null)
    const [type, setType] = useState<"register" | "link" | null>(null)
    const [userMemberShipCards] = useLocalStorage(useLocalStorage.KEY_LOCAL_USER_CARDS, [])

    //  @ts-ignore
    const loyaltyProgramId = route.params?.id || null

    useEffect(() => {
        if(userMemberShipCards){
            const isRegistered = userMemberShipCards.find((item:any) => item.loyalty_program.id === loyaltyProgramId)
            if(isRegistered){
                Alert.alert("Bạn đã là thành viên của "+isRegistered.loyalty_program.name + " rồi")
                navigation.goBack()
            }
        }
    },[userMemberShipCards])

    useEffect(() => {
        if (loyaltyProgramId) {
            SonkimApiService.GetLoyaltyProgramDetail(loyaltyProgramId).then(data => {
                setLoyaltyProgram(data)
            }).catch(err => {
                Alert.alert("Lỗi: " + err.message)
            })
        }
    }, [loyaltyProgramId])

    if (!loyaltyProgram) {
        return (
            <FullScreenLoader/>
        )
    }

    return (
        <Box flex={1}>
            {
                !type ? <RedirectBox setType={setType} loyaltyProgram={loyaltyProgram}/>
                    : type === "link" ? <LinkMemberShip loyaltyProgram={loyaltyProgram}/>
                    : type === "register" ? <RegisterMembership loyaltyProgram={loyaltyProgram}/> : null
            }
        </Box>
    )
})

//  add auth require
MembershipRegisterScreen.defaultProps = {authRequire: true}
export default MembershipRegisterScreen
