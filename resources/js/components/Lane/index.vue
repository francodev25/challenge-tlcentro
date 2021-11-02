<template>
    <div class="lane">
        <div class="lane__couter">Total : {{ serversLength }}</div>
        <Container
            group-name="list-servers"
            @drag-start="handleDragStart($event)"
            @drop="handleDrop($event)"
            :get-child-payload="getChildPayload"
            :drop-placeholder="{ className: 'placeholder' }"
        >
            <Draggable v-for="server in servers" :key="server.id">
                <CardLane
                    :element="server"
                    @input="handleChange($event)"
                    v-model="picked"
                >
                </CardLane>
            </Draggable>
        </Container>
    </div>
</template>

<script>
import { Container, Draggable } from "vue-smooth-dnd";
import { createNamespacedHelpers  } from "vuex";
const {
    mapGetters: mapGettersServers,
    mapActions: mapActionsServers
} = createNamespacedHelpers("servers");

import CardLane from "../CardLane";

export default {
    name: "Lane",
    components: {
        CardLane,
        Container,
        Draggable
    },
    data() {
        return {
            draggingCard: {
                lane: "",
                index: -1,
                cardData: {}
            },
            picked: null
        };
    },
    computed:{
        ...mapGettersServers(['servers' , 'serversLength'])
    },
    methods: {
        ...mapActionsServers([
            "addDragStart",
            "addServerFrom",
            "removeServerFrom",
            "setServer"
        ]),
        handleDragStart(dragResult) {
            const { payload, isSource } = dragResult;
            if (isSource) {
                const draggingCard = {
                    index: payload.index,
                    cardData: {
                        ...this.servers[payload.index]
                    }
                };
                this.addDragStart(draggingCard);
            }
        },
        handleDrop(dropResult) {
            const { removedIndex, addedIndex } = dropResult;
            if (removedIndex === addedIndex) {
                return;
            }

            if (removedIndex !== null) {
                this.removeServerFrom(removedIndex);
            }
            if (addedIndex !== null) {
                this.addServerFrom(addedIndex);
            }
        },
        getChildPayload(index) {
            return {
                index
            };
        },
        handleChange($event) {
            this.picked = $event;
            this.setServer(this.picked);
        }
    }
};
</script>

<style>
.lane {
    background: rgb(186, 210, 255);
    padding: 0.5rem;
    height: 100%;
}

.lane__couter {
    font-size: 1.5rem;
    font-weight: 500;
}
</style>
