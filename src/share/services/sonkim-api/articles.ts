import FetchDataService from "../fetch"

export const GetArticles = async (params = {_limit: 20}) => {
    try {
        const {articles, count} = await FetchDataService.GET("/user-api/articles", params)
        return {articles, count}
    }catch (err){
        throw err
    }
}

export const GetArticleDetail = async (articleId:number|string) => {
    try {
        return await FetchDataService.GET("/user-api/articles/"+articleId)
    }catch (err){
        throw err
    }
}
