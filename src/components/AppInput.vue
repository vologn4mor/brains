<template>
    <input :placeholder="placeholder" :style="width ? `width: ${width}px;` : null" :type="type" :value="value"
        @input="(val) => $emit('input', val)">
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: false,
            default: ""
        },
        type: {
            type: String,
            required: false,
            default: "text"
        },
        width: {
            type: String,
            required: false,
            default: ''
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>

<style scoped lang="scss">
input {
    font-family: "SF Mono Bold";
    font-weight: bold;
    font-size: 18px;
    color: #fff;
    background-color: $card-gray;
    border: 2px solid gray;
    padding: 15px 20px;
    border-radius: 8px;
    width: 277px;
}

input:focus {
    outline: none;
    border: 2px solid #B6FFFA;
}
</style>