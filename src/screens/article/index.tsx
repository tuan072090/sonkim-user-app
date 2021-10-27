import React, {useEffect, useState} from "react";
import {Alert} from "react-native";
import {FullScreenLoader, Image, MainLayout} from "../../components";
import {useRoute} from '@react-navigation/native';
import {ScreenSize, SonkimApiService} from "../../share";
import {Box, ScrollView, Text} from "native-base";
import ScreenHeader from "../../components/organisms/screen-header";

const ImgWidth = ScreenSize.vw - 30
export const ArticleScreen = MainLayout(({navigation}) => {
    const route = useRoute();
    const {params} = route
    const [article, setArticle] = useState<any|null>(null)

    useEffect(() => {
        //  @ts-ignore
        if (params.articleId) {
            //  @ts-ignore
            _fetchArticle(params.articleId)
        }
    }, [params])

    const _fetchArticle = async (articleId: number | string) => {
        try {
            const data = await SonkimApiService.GetArticleDetail(articleId)
            setArticle(data)
            navigation.setOptions({ title: data.title });
        } catch (err) {
            Alert.alert(err.message)
        }
    }

    return (
        <Box flex={1}>
            <ScreenHeader bgColor="primary.500" title={article ? article.title : ""}/>
            {
                !article ? <FullScreenLoader/>
                : <ScrollView>
                        <Box p={3}>
                            <Image uri={article.avatar.url} width={ImgWidth} height={ImgWidth / 2.198} resizeMode="stretch" borderRadius={26} />

                            <Box p={3} bgColor="white" mt={4} rounded="xl">
                                <Text fontSize="2xl" my={3}>{article.title}</Text>

                                <Text mt={4}>
                                    {article.body}
                                </Text>
                            </Box>
                        </Box>
                    </ScrollView>
            }

        </Box>
    )
})
