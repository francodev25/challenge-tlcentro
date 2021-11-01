<template>
    <button @click="$emit('click', $event)">
        {{ slug }}
    </button>
</template>

<script>
export default {
    name: "Button",
    props: {
        slug: {
            type: String
        }
    }
};
</script>

<style></style>
