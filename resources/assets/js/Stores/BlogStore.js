import { BLOG_URL, get_headers } from "../config";

const state = {
    blogs: [],
};

const getters = {
    get_blogs(state) {
        return state.blogs
    },
};

const mutations = {
    LOAD_ALL_BLOGS(state, payload){
        state.blogs = payload
    },

    ADD_NEW_BLOG(state, payload) {
        state.blogs.unshift(payload)
    },
    DELETE_BLOG(state, payload) {
        state.blogs = state.blogs.filter(b => {
            return b.id != payload.id
        })
    }
};

const actions = {
    add_new_blog({commit}, payload) {
        commit('ADD_NEW_BLOG', payload);
    },
    get_all_blogs({commit}, payload) {
        commit('LOAD_ALL_BLOGS', payload)
    },
    delete_blog({commit}, payload) {
        axios.delete(BLOG_URL + '/' + payload.id, { headers: get_headers() } ).then(resp => {
            commit('DELETE_BLOG', resp.data)
        }, (error) => {
            console.log('ERROR DELETING BLOG RECORD', error)
        })
    }
};

export default  {
    state, mutations, actions, getters
}