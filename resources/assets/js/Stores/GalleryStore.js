const state = {
    galleries: [],
};

const getters = {
    get_all_galleries(state) {
        return state.galleries
    },
};

const mutations = {
    LOAD_ALL_GALLERIES(state, payload) {
        state.galleries = payload
    },
    ADD_NEW_GALLERY(state, payload) {
        state.galleries.unshift(payload)
    },
    DELETE_GALLERY(state, payload){
        state.galleries = state.galleries.filter((gallery) => {
            return gallery.id !== payload.id;
        })
    },
};

const actions = {
    add_new_gallery({commit}, payload) {
        commit('ADD_NEW_GALLERY', payload)
    },
    get_all_galleries({commit}, payload) {
        commit('LOAD_ALL_GALLERIES', payload)
    },
    delete_gallery({commit}, payload) {
        commit('DELETE_GALLERY', payload);
    },
};

export default  {
    state, mutations, actions, getters
}