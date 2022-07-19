
export const API_URI = "https://api.sonkim.upme.dev"
export const APP_VERSION = "1.7.4"
export const APP_BUILD = 13

//  account api
export const SKR_API_URI = "https://user.api.skr.dev.meete.co"
export const CAPTCHA_TOKEN = "qMENBhNelfmayYTxBfLszfWdf0PJL7G__Ja_ooj5O4cXRjWBqXSw81YyW9sOiXhkv6E3OWEKSha_DfNWIskCguoLfe6ovYqGmkn3DRtutJsYo8sRR5Jk8TAgbgYoRT4vxdyxW9NvcE7oFPh-MGEKB6q5JuGSuO-j5RDsYgP9268"
export const DEBUG_OTP = "000000"

//  SonKim BU APIs
export const SKM_LOGIN = 'https://rms.sonkimmode.vn/api/user/login'
export const SKM_GET_ACCOUNT = 'https://rms.sonkimmode.vn/api/customer/short/search'
export const SKM_CREATE_ACCOUNT = 'https://rms.sonkimmode.vn/api/customer/insert'

export const GSSHOP_CREATE_MEMBER = 'https://loyalty-staging.gsshop.vn/loyalty-api/account/registerNew'
export const GSSHOP_GET_MEMBER = 'https://loyalty-staging.gsshop.vn/loyalty-api/account'

export const GS25_REGISTER_MEMBER = 'http://devapi.gs25.com.vn:8091/authentication/accountmember/register'
export const GS25_LOGIN = 'http://devapi.gs25.com.vn:8091/authentication/accountmember/token'
export const GS25_GET_INFO = 'http://devapi.gs25.com.vn:8091/v/V1.6.0'

export const JARDIN_GET_TOKEN = 'http://210.211.109.91:9900/api/0/auth/access_token'
export const JARDIN_CREATE_MEMBER = 'http://210.211.109.91:9900/api/0/customers/create_or_update'
export const JARDIN_GET_CUSTOMER = 'http://210.211.109.91:9900/api/0/customers/get_customer_by_phone'
export const JARDIN_GET_CUSTOMER_BY_CARD = 'http://210.211.109.91:9900/api/0/customers/get_customer_by_card'

export const WATAMIN_GET_TOKEN = 'http://210.211.109.91:9900/api/0/auth/access_token'
export const WATAMIN_CREATE_MEMBER = 'http://210.211.109.91:9900/api/0/customers/create_or_update'
export const WATAMIN_GET_CUSTOMER = 'http://210.211.109.91:9900/api/0/customers/get_customer_by_phone'
export const WATAMIN_GET_CUSTOMER_BY_CARD = 'http://210.211.109.91:9900/api/0/customers/get_customer_by_card'

//  maping Bu Sonkim to loyalty ID in strapi
export const BuMapping = {
    "jockey": 10,
    "vera": 11,
    "gsshop": 9,
    "watamin": 8,
    "jardin": 4,
    "gs25": 2
}
