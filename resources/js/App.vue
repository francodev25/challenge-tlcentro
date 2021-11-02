<template>
    <main>
        <nav class="navbar navbar-expand-lg navbar-dark bg-telecentro">
            <div class="container-fluid">
                <router-link class="navbar-brand" to="/">
                    <img
                        src="https://www.telecentro.com.ar/img/logo-imagotipo.svg"
                        alt=""
                        width="90"
                        height="32"
                    />
                </router-link>
                <router-link class="nav-link" to="/about">
                    About
                </router-link>
            </div>
        </nav>
        <div class="container mt-5">
            <router-view></router-view>
        </div>

        <!-- Modal Outside -->
        <Modal :labelModal="'Edit Server'">
            <template v-slot:body>
                <FormEditor :current="getCurrentEditor" />
            </template>

            <template v-slot:footer>
                <div>
                    <BaseButton :slug="'Actualizar'" @click="updateServer" />
                    <BaseButton
                        :slug="'Cancelar'"
                        :theme="'secondary'"
                        @click="closeModal"
                    />
                </div>
            </template>
        </Modal>
    </main>
</template>

<script>
import { BaseButton, Modal, FormEditor } from "./components";
import { createNamespacedHelpers } from "vuex";
const {
    mapGetters: mapGettersEditorModal,
    mapActions: mapActionsEditorModal
} = createNamespacedHelpers("editorModal");
const { mapActions: mapActionsServers } = createNamespacedHelpers("servers");
const API_URL = process.env.MIX_API_URL;

export default {
    name: "App",
    components: {
        Modal,
        BaseButton,
        FormEditor
    },
    computed: {
        ...mapGettersEditorModal(["getCurrentEditor"])
    },
    methods: {
        ...mapActionsEditorModal(["closeModal"]),
        ...mapActionsServers(["setInitialServers", "setServer"]),
        async updateServer() {
            await this.$http.put(
                `${API_URL}/api/v1/servers/${this.getCurrentEditor.id}`,
                this.getCurrentEditor
            );
            this.closeModal();
            const ser = await fetch(`${API_URL}/api/v1/servers`)
                .then(response => response.json())
                .then(data => {
                    console.log("data", data);
                    return data;
                });
            this.setInitialServers(ser);
            this.setServer(ser[0]);
        }
    }
};
</script>

<style scoped>
.bg-telecentro {
    background: rgb(4, 18, 52);
}
.nav-link {
    color: white;
}
</style>
