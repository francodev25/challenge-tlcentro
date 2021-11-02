<template>
    <div>
        <h1 class="example">Consultas SNMP</h1>
        <div class="board">
            <!-- Lane DND -->
            <Lane/>

            <!-- Server CardLane Selected -->
            <div class="serverSelected" v-if="serverSelected">
                <BaseButton :slug="'Consultar'" @click="handleRequest"></BaseButton>
                <Card :element="serverSelected" />
            </div>

            <!-- Request Results-->
            <div class="serverSelected" v-if="serverSelected">
                <div v-for="(result, index) in resultsKeys">
                    <p>
                        <span class="resultTitle">
                            {{ result }}
                        </span>
                        <br />
                        {{ resultsValues[index] }}
                    </p>
                </div>
                <div v-if="!resultsKeys.length && !error">
                    Sin consultas
                </div>
                <div v-if="error">
                    Hubo un error en la IP del server, intente con la primer
                    opcion
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { Lane, Card, BaseButton} from "../components";
import { createNamespacedHelpers } from "vuex";
const {
    mapGetters: mapGettersServers,
    mapActions: mapActionsServers
} = createNamespacedHelpers("servers");
const {
    mapActions: mapActionsEditor
} = createNamespacedHelpers("editorModal");
const API_URL = process.env.MIX_API_URL;
export default {
    name: "Home",
    components: {
        Lane,
        Card,
        BaseButton,
    },
    data() {
        return {
            isLoading: true,
            error: null,
            resultsValues: [],
            resultsKeys: [],
            isDebug: process.env.NODE_ENV !== "production"
        };
    },
    async created(){
        const ser = await fetch(`${API_URL}/api/v1/servers`)
                .then(response => response.json())
                .then(data => {
                    console.log('data',data)
                    return data
                })
        this.setInitialServers(ser);
        this.setServer(ser[0]);
    },
    computed: {
        ...mapGettersServers(["servers", "serverSelected"]),
    },
    methods: {
        ...mapActionsServers(["setInitialServers", "setServer"]),
        ...mapActionsEditor(["openModal"]),
        handleRequest() {
            fetch(`${API_URL}/snmp/${this.serverSelected.ip}`, {
                mode: "cors",
                headers: {
                    "Access-Control-Allow-Origin": "*"
                }
            })
                .then(response => response.json())
                .then(data => {
                    if (this.isDebug) console.log("Consult Host", data);
                    this.error = null;
                    this.resultsValues = Object.values(data.results);
                    this.resultsKeys = Object.keys(data.results);
                })
                .catch(error => {
                    this.resultsValues = [];
                    this.resultsKeys = [];
                    this.error = error;
                });
        }
    }
};
</script>

<style>
.overflow-hidden {
  overflow: hidden;
}

.board {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(15rem, calc(100% / 3)));
    align-items: center;
    padding: 20px;
}

.serverSelected {
    padding: 0 1rem;
    width: 100%;
    height: 100%;
}

.resultTitle {
    font-weight: 600;
}
</style>
