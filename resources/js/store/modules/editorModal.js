const state = function() {
    return {
        isCurrentOpen: false,
        currentEditor:{}
    };
};

const getters = {
    isCurrentOpen: state => {
        return state.isCurrentOpen;
    },
    getCurrentEditor: state => {
        return state.currentEditor;
    }
};

const mutations = {
    OPEN_MODAL(state) {
        state.isCurrentOpen = true;
    },
    CLOSE_MODAL(state){
        state.isCurrentOpen = false;
    },
    SET_EDITOR(state,payload){
        state.currentEditor = {...payload}
    },
    CLEAR_EDITOR(state){
        state.currentEditor = null
    },
    UPDATE_EDITOR(state,newRecord){
        state.currentEditor = {...state.currentEditor,...newRecord}
    },
};

const actions = {
    openModal({ commit }) {
        commit("OPEN_MODAL");
    },
    closeModal({ commit }) {
        commit("CLOSE_MODAL");
        commit("CLEAR_EDITOR");
    },
    setEditor({commit},payload){
        commit("SET_EDITOR",payload);
    },
    clearEditor({commit}){
        commit("CLEAR_EDITOR");
    },
    updateEditor({commit},newRecord){
        commit("UPDATE_EDITOR",newRecord);
    }
};

export default {
    state,
    getters,
    mutations,
    actions,
};
