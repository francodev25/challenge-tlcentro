<template>
    <div class="card">
        <div class="card-container">
            <div class="card__description">
                {{ element.description }}
            </div>
            <div class="card__host">
                {{ element.host }}
            </div>
            <div class="card__ip">
                {{ element.ip }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: {
        element: {
            required: true,
            type: Object
        }
    }
};
</script>

<style scoped>
.card {
    margin: 0.5rem 0;
    width: 100%;
}
.card-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0 auto;
}
</style>
