import { BEAUTY_URL, get_headers } from './../config'
const state = {
    beauty_list: [],
};

const getters = {
    get_beauty_list(state) {
        return state.beauty_list
    },
};

const mutations = {
    LOAD_BEAUTY_LIST(state, payload){
        state.beauty_list = payload
    },

    ADD_NEW_BEAUTY(state, payload) {
        state.beauty_list.unshift(payload)
    },

    DELETE_BEAUTY(state, payload) {
        state.beauty_list = state.beauty_list.filter(b => {
            return b.id != payload.id
        })
    }
};

const actions = {
    add_new_beauty({commit}, payload) {
        commit('ADD_NEW_BEAUTY', payload);
    },
    load_beauty_list({commit}, payload) {
        axios.get(BEAUTY_URL, {headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        commit('LOAD_BEAUTY_LIST', response.data);
                    }
                }, (error) => {
                    console.log('An Error Occured while loading the beauty list.', error)
                })
    },
    delete_beauty({commit}, payload) {
        axios.delete(BEAUTY_URL + '/' + payload.id, { headers: get_headers() } ).then(resp => {
            commit('DELETE_BEAUTY', resp.data)
        }, (error) => {
            console.log('ERROR DELETING BEAUTY RECORD', error)
        })
    }
};

export default  {
    state, mutations, actions, getters
}