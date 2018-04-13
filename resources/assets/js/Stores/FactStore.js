import { FACT_URL, get_headers } from './../config'
const state = {
    facts: []
};

const mutations = {
    LOAD_ALL_FACTS(state, payload) {
        state.facts = payload;
    },
    ADD_NEW_FACT(state, payload) {
        state.facts.unshift(payload)
    },
    DELETE_FACT(state, payload) {
        state.facts = state.facts.filter(f => {
            return f.id != payload.id;
        })
    }

};

const getters = {
    get_all_facts(state) {
        return state.facts
    }
};

const actions = {
    load_all_facts({commit}) {
        axios.get(FACT_URL, {headers: get_headers()}).then(response => {
                    if (response.status === 200) {
                        commit('LOAD_ALL_FACTS', response.data);
                    }
                }, (error) => {
                    console.log('Error occured when loading the facts', error)
                })
      
    },
    add_new_fact({commit}, payload) {
        commit('ADD_NEW_FACT', payload);
    }, 
   
    delete_fact({commit}, payload) {
        axios.delete(FACT_URL + '/' + payload.id, { headers: get_headers() } ).then(resp => {
            commit('DELETE_FACT', resp.data)
        }, (error) => {
            console.log('ERROR DELETING FACT RECORD', error)
        })
    }

};

export default  {
    state, mutations, actions, getters
}
