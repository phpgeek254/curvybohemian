import { SLIDER_URL, get_headers } from './../config'
const state = {
    sliders: [],
};

const mutations = {
    LOAD_ALL_SLIDERS (state, payload) {
        state.sliders = payload
    },
    ADD_NEW_SLIDER(state, payload) {
        state.sliders.unshift(payload);
    },
    DELETE_SLIDER(state, payload) {
        state.sliders = state.sliders.filter(slider => {
            return slider.id != payload.id;
        })
    }

};
const getters = {
    get_all_sliders(state) {
        return state.sliders
    }
};
const actions = {
    load_all_sliders({commit}) {
        axios.get(SLIDER_URL, { headers: get_headers()}).then(response => {
            if (response.status === 200) {
                 commit('LOAD_ALL_SLIDERS', response.data)
            }
        }, (error) => {
            console.log('An Error Occured while loading tyhe sliders')
        })
      
    },
    add_new_slider({commit}, payload) {
        commit('ADD_NEW_SLIDER', payload);
    },
    delete_slider({commit}, payload){
        axios.delete(SLIDER_URL + '/' + payload.id, {headers: get_headers() }).then(resp => {
            if(resp.status === 200) {
                commit('DELETE_SLIDER', resp.data)
            }
        })
    }
    
};

export default  {
    state, mutations, actions, getters
}

