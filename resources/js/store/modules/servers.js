const state = function() {
    return {
        draggingCard: null,
        serverSelected: null,
        servers: [],
    }
}


const getters = {
    servers : state => {
        return state.servers;
    },
    serversLength: state =>{
        return state.servers.length
    },
    serverSelected: state =>{
        return state.serverSelected;
    },
};

const mutations = {
    SET_INITIAL_SERVERS(state, payload) {
        state.servers = [...payload];
    },
    ADD_SERVER(state, payload) {
        state.servers = [...state.servers, payload];
    },
    ADD_DRAG_START(state, payload) {
        state.draggingCard = payload;
    },
    REMOVE_SERVER_FROM(state, index) {
        state.servers.splice(index, 1);
    },
    ADD_SERVER_FROM(state, index) {
        state.servers.splice(index, 0, state.draggingCard.cardData);
    },
    SET_SERVER(state, payload) {
        state.serverSelected = payload;
    },
};

const actions = {
    setInitialServers({ commit }, payload) {
        commit("SET_INITIAL_SERVERS", payload);
    },
    addServer({ commit }, payload) {
        commit("ADD_SERVER", payload);
    },
    addDragStart({ commit }, payload) {
        commit("ADD_DRAG_START", payload);
    },
    addServerFrom({ commit }, index) {
        commit("ADD_SERVER_FROM", index);
    },
    removeServerFrom({ commit }, index) {
        commit("REMOVE_SERVER_FROM", index);
    },
    setServer({ commit }, payload) {
        commit("SET_SERVER", payload);
    },
};

export default {
    state,
    getters,
    mutations,
    actions
};
