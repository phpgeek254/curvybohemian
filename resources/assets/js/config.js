export const HOST_URL = 'http://curvybohemian.com'

export const API = HOST_URL + '/api'
// Gallery Routes
export const GALLERY_URL = API + '/gallery'

//Post Routes
export const POST = API + '/posts'

// blog Routes
export const BLOG_URL = API + '/blog'

export const IMAGE_URL = API + '/image'
export const LIKE_URL = API + '/like'
export const COMMENT_URL = API + '/comment'
export const POST_URL = API + '/post'
export const SLIDER_URL = API + '/slider'
export const FACT_URL = API + '/fact'
export const FASHION_URL = API + '/fashion'
export const DIY_URL = API + '/diy'
export const BEAUTY_URL = API + '/beauty'


export const REGISTER_URL = API + '/auth'
export const LOGIN_URL = HOST_URL + '/oauth/token'
export const USER_URL = 'api/user'



export const AUTH_USER_URL = API + '/user'

export const get_headers = function () {
    const token = window.localStorage.getItem('access_token');
    const headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + token
    };
    return headers
};

export const CLIENT_ID = 2
export const CLIENT_SECRET = 'WC1VMhVin0HofYRiIQ9ufYx7iO2S35cGor1XU7ak'
