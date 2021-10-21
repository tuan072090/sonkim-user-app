import React from "react";
import {Box, Pressable, ScrollView, SearchIcon, Text} from "native-base";
import {ListIcon} from "../../../components";
// import {SearchIcon} from "../../../components";

export const SearchHeader = () => {

    return (
        <Box bgColor="primary.500" width="100%" roundedBottom="xl">

            <Box flexDirection="row" safeAreaTop={true} p={3}>
                <Pressable bgColor="rgba(255,255,255,0.3)"
                           justifyContent="center"
                           alignItems="center"
                           width={10} height={10}
                           borderWidth={1}
                           rounded="lg"
                           borderColor="white">
                    <SearchIcon size={5} color="white"/>
                </Pressable>

                <Pressable flexGrow={100}
                           flexDirection="row"
                           bgColor="rgba(255,255,255,0.3)"
                           justifyContent="center"
                           alignItems="center"
                           height={10}
                           borderWidth={1}
                           rounded="lg"
                           borderColor="white"
                           ml={3}>

                    <ListIcon size={5}/>

                    <Text ml={1} color="white">Xem danh sách</Text>
                </Pressable>
            </Box>

            <Box width="100%" pt={2} pb={1} >
                <ScrollView horizontal={true}>

                    <Pressable px={3} pb={2}>
                        <Box p={1} borderBottomWidth={1} borderBottomColor="white"><Text color="white">LAZADA</Text></Box>
                    </Pressable>

                    <Pressable px={3} pb={2}>
                        <Box p={1}><Text color="white">CGV</Text></Box>
                    </Pressable>

                    <Pressable px={3} pb={2}>
                        <Box p={1}><Text color="white">JOCKEY</Text></Box>
                    </Pressable>

                    <Pressable px={3} pb={2}>
                        <Box p={1}><Text color="white">VERA</Text></Box>
                    </Pressable>

                    <Pressable px={3} pb={2}>
                        <Box p={1}><Text color="white">CGV</Text></Box>
                    </Pressable>

                    <Pressable px={3} pb={2}>
                        <Box p={1}><Text color="white">JOCKEY</Text></Box>
                    </Pressable>

                    <Pressable px={3} pb={2}>
                        <Box p={1}><Text color="white">VERA</Text></Box>
                    </Pressable>

                </ScrollView>
            </Box>
        </Box>
    )
}
