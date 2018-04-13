import { POST_URL, get_headers } from "../config";

const state = {
    posts: []
};

const mutations = {
    LOAD_ALL_POSTS(state, payload) {
        state.posts = payload;
    },
    ADD_NEW_POST(state, payload) {
        state.posts.unshift(payload)
    },
    DELETE_POST(state, payload) {
        state.posts = state.posts.filter(p => {
            return p.id != payload.id;
        })
    }

};

const getters = {
    get_all_posts(state) {
        return state.posts
    }
};

const actions = {
    load_all_posts({commit}, payload) {
        commit('LOAD_ALL_POSTS', payload);
    },
    add_new_post({commit}, payload) {
        commit('ADD_NEW_POST', payload);
    },
    delete_post({commit}, payload) {
        axios.delete(POST_URL + '/' + payload.id, { headers: get_headers() } ).then(resp => {
            commit('DELETE_POST', resp.data)
        }, (error) => {
            console.log('ERROR DELETING POST RECORD', error)
        })
    }

};

export default  {
    state, mutations, actions, getters
}
