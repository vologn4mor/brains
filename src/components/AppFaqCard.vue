<template>
    <div class="info-card" :class="isOpened ? 'active' : null" @click="isOpened = !isOpened">
        <div class="up-block">
            <p class="title">{{ item.title }}</p>
            <p class="plus" :class="isOpened ? 'rotated' : null">+</p>
        </div>
        <div class="info-block" :class="isOpened ? 'opened' : null">
            <div class="check" v-for="(point, index) in item.points" :key="index">
                <img :src="check" alt="">
                <p>{{ point }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import check from "@/assets/HomeView/ThirdBlock/check.svg"

export default {
    data() {
        return {
            isOpened: false,
            check
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    }
}
</script>

<style lang="scss">
.info-card {
    background-color: #161616;
    transition: 0.5s;
    padding: 40px;
    width: 535px;

    .up-block {
        display: flex;
        align-items: center;
        justify-content: space-between;

        .title {}

        .plus {
            color: #B6FFFA;
            font-weight: bold;
            font-size: 30px;
            transition: 0.5s;
        }

        .rotated {
            transform: rotate(45deg);
            transition: 0.5s;
        }
    }

    .info-block {
        max-height: 0;
        overflow: hidden;
        // transition: transform 0.5s;
        transition: all 0.25s ease-in-out;

        .check {
            display: flex;

            p {
                margin-left: 10px;
                opacity: 0.5;
            }
        }
    }

    .opened {
        max-height: none;
        // transition: transform 0.5s;
        animation: flipdown 0.5s ease both;
    }
}

.active {
    transition: 0.5s;
    background-color: #222121;
}
</style>

<style>
@media (max-width: 700px) {
    .info-card {
        max-width: none !important;
        width: auto;
    }
}
</style>