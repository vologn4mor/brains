<template>
    <div :class="type">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        type: String,
        default: '',
        required: false
    }
}
</script>

<style lang="scss" scoped>
div {
    background-color: $card-gray;
    padding: 40px;
}

.agent {
    height: 464px;
}
</style>