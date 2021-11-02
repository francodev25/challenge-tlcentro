<template>
    <button
        :class="className"
        type="button"
        @click="$emit('click', $event)"
    >
        {{ slug }}
    </button>
</template>

<script>
export default {
    name: "BaseButton",
    props: {
        slug: {
            type: String,
        },
        theme:{
            type:String,
            default:'primary'
        }
    },
    computed:{
        className(){
            const classes = `btn btn-${this.theme}`;
            return classes
        }
    }
};
</script>

<style scoped>
.btn{
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: auto;
    height:3.5rem;
    padding: 0 2rem;
    font-family: inherit;
    font-size: 1.25rem;
    border:0;
    border-radius: 0.5rem;
    background:transparent;
    cursor: pointer;
    outline: none;
    transition-property: background, box-shadow;
    transition-duration:0.35s;
}

.btn-primary{
    background: rgb(4, 18, 52);
    color:white;
}

.btn-secondary{
    background: #d2d2d2;
    color:rgb(91, 91, 91);
}

</style>
