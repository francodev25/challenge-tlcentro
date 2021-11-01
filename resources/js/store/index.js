import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import createLogger from "../plugins/logger.js";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

let plugins = [createPersistedState()];

if (debug) {
    plugins.push(createLogger());
}

export default new Vuex.Store({
    state: {
        draggingCard: null,
        serverSelected: null,
        servers: [
            {
                id: 1,
                description: "primer",
                host: "localhost",
                ip: "127.0.0.1"
            },
            {
                id: 2,
                description: "segundo",
                host: "anotherWebsite_1",
                ip: "195.168.12.15"
            },
            {
                id: 3,
                description: "tercero",
                host: "anotherWebsite_2",
                ip: "195.168.1.15"
            }
        ],
        dataServerSNMP: {}
    },
    getters: {
        servers(state) {
            return state.servers;
        },
        serverSelected(state) {
            return state.serverSelected;
        },
        dataServerSNMP(state) {
            return state.dataServerSNMP;
        }
    },
    mutations: {
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
        GET_DATA_SNMP(state, payload) {}
    },
    actions: {
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
        getDataSNMP({ commit }, payload) {
            commit("GET_DATA_SNMP", payload);
        }
    },
    strict: debug,
    plugins: plugins
});
