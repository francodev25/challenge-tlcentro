import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import Servers from "./modules/servers";
import editor_Modal from "./modules/editorModal";
import createLogger from "../plugins/logger.js";

Vue.use(Vuex);

const debug = process.env.NODE_ENV !== "production";

let plugins = [createPersistedState()];

if (debug) {
    plugins.push(createLogger());
}

const servers = {
    namespaced: true,
    ...Servers
}

const editorModal = {
    namespaced: true,
    ...editor_Modal
}

export default new Vuex.Store({
    modules: {
        servers,
        editorModal,
    },
    strict: debug,
    plugins: plugins
});
