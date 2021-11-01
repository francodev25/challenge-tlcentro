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
                    <router-link :to="`/editServer/${element.id}`">
                        <i class="bx bxs-pencil"></i>
                    </router-link>
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
import { mapGetters } from "vuex";
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
        ...mapGetters(["serverSelected"])
    },
    methods: {
        handleDelete(description) {
            //TODO: Delete Confirm alert
            alert(`Are you sure for deleting ? : ${description}`);
        },
        handleInput(element) {
            this.$emit("input", element);
        }
    }
};
</script>

<style>
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
