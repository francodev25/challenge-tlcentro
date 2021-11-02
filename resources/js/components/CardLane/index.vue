<template>
    <div class="card" :class="{ selected: isSelected }">
        <div class="card-container">
            <div class="card__description">
                <label>
                    {{ element.description }}
                </label>
            </div>
            <div class="card__actions">
                <div class="action" v-if="serverSelected === null">
                    <i
                        class="bx bxs-check-circle"
                        style="color:#ccc"
                        @click="handleInput(element)"
                    ></i>
                </div>
                <div
                    class="action"
                    v-else-if="
                        element.description === serverSelected.description
                    "
                >
                    <i class="bx bxs-check-circle" style="color:#2cff00"></i>
                </div>
                <div
                    class="action"
                    v-else-if="
                        element.description !== serverSelected.description
                    "
                    @click="handleInput(element)"
                >
                    <i class="bx bxs-check-circle" style="color:#ccc"> </i>
                </div>
                <div class="action">
                    <i class="bx bxs-pencil" @click="openEditor(element)"></i>
                </div>
                <div class="action">
                    <i
                        class="bx bxs-trash"
                        @click="handleDelete(element.description)"
                    ></i>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters: mapGettersServers } = createNamespacedHelpers("servers");
//Actions for Open Modal and Editing
const { mapActions: mapActionsEditors } = createNamespacedHelpers(
    "editorModal"
);
export default {
    name: "CardLane",
    props: {
        element: {
            required: true,
            type: Object
        }
    },
    data() {
        return {
            isSelected: false
        };
    },
    computed: {
        ...mapGettersServers(["serverSelected"])
    },
    methods: {
        ...mapActionsEditors(["openModal", "setEditor"]),
        handleDelete(description) {
            //TODO: Delete Confirm alert
            alert(`Are you sure for deleting ? : ${description}`);
        },
        handleInput(element) {
            this.$emit("input", element);
        },
        openEditor(element) {
            this.openModal();
            this.setEditor(element);
        }
    }
};
</script>

<style scoped>
.card {
    margin: 0.5rem 0;
}
.card-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;
}
.card__actions {
    display: flex;
    justify-content: center;
    align-items: flex-end;
}

.action {
    padding: 1rem;
    cursor: pointer;
}

.selected {
    border: 1px solid red;
}
</style>
