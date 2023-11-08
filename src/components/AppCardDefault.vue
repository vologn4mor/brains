<template>
    <div class="card">
        <img :src="img" alt="">
        <div>
            <p class="title">{{ title }}</p>
            <p class="text">{{ text }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        img: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        text: {
            type: String,
            required: true,
        },
    }
}
</script>

<style scoped lang="scss">
.card {
    background-color: $card-gray;
    padding: 40px;
    max-width: 326px;
    width: 100%;

    img {
        margin-right: 30px;
    }

    .title {
        font-family: "SF Mono Bold";
        font-size: 24px;
        margin-bottom: 10px;
    }

    .text {
        font-family: "SF Pro";
        font-size: 18px;
        opacity: 0.5;
    }
}
</style>

<style scoped lang="scss">
img {
    max-width: 80px;
}
</style>