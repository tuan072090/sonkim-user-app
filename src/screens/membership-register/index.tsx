import React, {useEffect, useState} from "react";
import {Alert, StyleSheet} from "react-native";
import {Box,Text} from "native-base";
import { useRoute, useNavigation } from '@react-navigation/native';
import {RedirectBox} from "./components/RedirectBox";
import {LoyaltyProgramTypes, SonkimApiService} from "../../share";
import RegisterMembership from "./components/register-membership";
import {LinkMemberShip} from "./components/link-membership/LinkMemberShip";
import {FullScreenLoader, MainLayout} from "../../components";

const MembershipRegisterScreen:React.FC<any> = MainLayout(() => {
  const route = useRoute()
  const [loyaltyProgram, setLoyaltyProgram] = useState<null|LoyaltyProgramTypes>(null)
  const [type, setType] = useState<"register"|"link"|null>(null)
  //  @ts-ignore
  const loyaltyProgramId = route.params?.id || null

  useEffect(() => {
    if(loyaltyProgramId){
      SonkimApiService.GetLoyaltyProgramDetail(loyaltyProgramId).then(data => {
        setLoyaltyProgram(data)
      }).catch(err => {
        Alert.alert("Lỗi: "+ err.message)
      })
    }
  },[loyaltyProgramId])

  if(!loyaltyProgram){
    return (
        <FullScreenLoader/>
    )
  }

  return(
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
