<template>
    <div class="onbaording-container">
        <div class="main-container ">
            <div class="container">
                <div class="main-block ">
                    <img :src="basketball" alt="">
                    <h1 class="main-text">Welcome to the Future of Sports: Onboarding with Web3 Integration</h1>
                    <p class="text">
                        We are thrilled to introduce you to the cutting-edge world of sports entertainment powered by Web3
                        integration. Our mission is to revolutionize how fans engage with their favorite sports and
                        athletes, creating an immersive and rewarding experience like never before. Let’s embark on this
                        exciting journey together!</p>
                    <div class="btn">
                        <AppButton text="Try it now!" padding="15px 40px" />
                    </div>
                </div>
            </div>
        </div>
        <div class="second-container container">
            <div class="second-block">
                <div class="cards-block">
                    <div class="card" v-for="(item, index) in secondBlock" :key="index">
                        <img :src="item.img" alt="img">
                        <p class="title">{{ item.title }}</p>
                        <p class="text">{{ item.text }}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="breaker-lines breaker"></div>
    </div>
</template>

<script>
import basketball from "@/assets/OnboardingView/basketball.svg"
import AppButton from "../components/AppButton.vue";
import secondBlock from "../jsons/OnboardingView/second-block";

export default {
    data() {
        return {
            basketball,
            secondBlock
        };
    },
    components: { AppButton }
}
</script>

<style lang="scss" scoped>
.main-container {
    background: url("/src/assets/OnboardingView/main-lines.svg");
    min-height: 895px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;

    img {
        padding-top: 155px;

        max-width: 100px;
    }

    .main-block {
        display: flex;
        flex-direction: column;
        margin: 0 100px;
    }

    .main-text {
        padding-top: 60px;
        font-size: 32px;
        font-family: "SF Mono Heavy";
        margin-top: 0;
        font-size: 70px;
        margin-bottom: 0px;
    }

    .text {
        max-width: 1192px;
        font-size: 14px;
        opacity: 0.5;
        line-height: 28px;
        font-size: 18px;
        font-family: "SF Pro";
    }

    .btn {
        display: inline-block;
    }
}

.second-block {
    margin: 0 100px;

    .cards-block {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        margin-top: 180px;

        .card {
            background-color: $card-gray;
            padding: 38px;
            border: 2px solid $card-gray;
            max-width: 535px;
            width: 100%;
            margin-bottom: 10px;

            .title {
                font-family: "SF Mono Bold";
                font-size: 24px;
            }

            .text {
                font-family: "SF Pro";
                font-size: 18px;
                opacity: 0.5;
            }
        }

        .card:hover {
            background-color: $main-dark;
            border: 2px solid $card-gray;
        }
    }
}

.breaker {
    margin: 200px 0 86px 0;
}
</style>