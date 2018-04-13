import {get_headers, USER_URL} from "../config";
const state = {
    auth_user: null,
    users: []
};

const mutations = {
    SET_AUTH_USER (state, payload) {
        state.auth_user = payload;
    },
    UNSET_AUTH_USER (state) {
        state.auth_user = null;
    }
};
const getters = {
    get_auth_user(state){
        return state.auth_user
    }
};
const actions = {
    set_auth_user ({commit}, payload) {
        commit("SET_AUTH_USER", payload);
    },
    unset_auth_user({commit}) {
        commit("UNSET_AUTH_USER");
    },
    init_auth_user({commit}) {
        axios.get(USER_URL, { headers: get_headers()}).then(resp => {
            commit('SET_AUTH_USER', resp.data);
        }, (error) => {
            console.log("User not authenticated", error);
        })

    }
};
export default {
    state, actions, mutations, getters
}