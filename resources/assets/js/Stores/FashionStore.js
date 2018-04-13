import { FASHION_URL, get_headers } from './../config'
const state = {
    fashion: []
};

const mutations = {
    LOAD_ALL_FASHION(state, payload) {
        state.fashion = payload;
    },
    ADD_NEW_FASHION(state, payload) {
        state.fashion.unshift(payload)
    },
    DELETE_FASHION(state, payload) {
        state.fashion = state.fashion.filter(fashion => {
        return fashion.id != payload.id;
        })
    }

};

const getters = {
    get_all_fashion(state) {
        return state.fashion
    }
};

const actions = {
    load_all_fashion({commit}) {
        axios.get(FASHION_URL, {headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        commit('LOAD_ALL_FASHION', response.data);
                    }
                }, (error) => {
                    console.log('An Error Occured while loading the fashion list', error)
                })
        
    },
    add_new_fashion({commit}, payload) {
        commit('ADD_NEW_FASHION', payload);
    },
    delete_fashion({commit}, payload) {
        axios.delete(FASHION_URL + '/' + payload.id, { headers: get_headers() } ).then(resp => {
            commit('DELETE_FASHION', resp.data)
        }, (error) => {
            console.log('ERROR DELETING FASHION RECORD', error)
        })
    }

};

export default  {
    state, mutations, actions, getters
}
