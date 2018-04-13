import { DIY_URL, get_headers } from "../config";

const state = {
    diys: [],
};

const getters = {
    get_all_diys(state) {
        return state.diys
    },
};

const mutations = {
    LOAD_ALL_DIY(state, payload){
        state.diys = payload
    },

    ADD_NEW_DIY(state, payload) {
        state.diys.unshift(payload)
    },
    DELETE_DIY(state, payload) {
        state.diys = state.diys.filter(d => {
            return d.id != payload.id
        })
    }
};

const actions = {
    add_new_diy({commit}, payload) {
        commit('ADD_NEW_DIY', payload);
    },
    load_all_diy({commit}, payload) {
        commit('LOAD_ALL_DIY', payload)
    },
    delete_diy({commit}, payload) {
        axios.delete(DIY_URL + '/' + payload.id, { headers: get_headers() } ).then(resp => {
            commit('DELETE_DIY', resp.data)
        }, (error) => {
            console.log('ERROR DELETING DIY RECORD', error)
        })
    }
};

export default  {
    state, mutations, actions, getters
}