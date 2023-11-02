<template>
    <button :style="padding ? `padding: ${padding};` : null" @click="$emit('click')">
        {{ text }}
    </button>
</template>

<script>
export default {
    props: {
        text: {
            type: String,
            required: true
        },
        padding: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
button {
    background-color: $light-blue;
    color: $main-dark;
    padding: 10px 25px;
    border-radius: 8px;
    border: none;
    font-family: "SF Mono Bold";
}
</style>