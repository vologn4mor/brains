<template>
    <div class="main-block">
        <div>
            <p class="introducing">Introducing Brainz:</p>
            <h1 class="main-text">Intelligent Agents <br /> for Exponential Success</h1>
            <p class="offer">We offer a suite of intelligent agents designed to bring your startup to exponential growth.
            </p>
            <AppButton text="More about Brainz" padding="15px 40px" class="more-button" />
            <div class="main-info">
                <div class="main-info-container">
                    <div>
                        <p>25</p><span>MVPs</span>
                    </div>
                    <div>
                        <p>15</p><span>Partners</span>
                    </div>
                    <div>
                        <p>6</p><span>Startups</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import hands from "@/assets/HomeView/hands.png"
import AppButton from "../components/AppButton.vue";

export default {
    data() {
        return {
            hands
        };
    },
    components: { AppButton }
}
</script>

<style lang="scss">
.main-block {
    background: url("/src/assets/HomeView/hands.png");
    min-height: 879px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;

    .introducing,
    .main-text {
        font-family: "SF Mono Bold";
    }

    .introducing,
    .main-text .introducing {
        padding-top: 100px;
        color: #B6FFFA;
        font-size: 32px;
        font-family: "SF Mono Heavy";
    }

    .main-text {
        font-size: 70px;
        margin-top: 20px;
        margin-bottom: 0px;
    }

    .more-button {
        margin-top: 100px;
    }

    .main-info {
        background-image: url("/src/assets/HomeView/lines.svg");
        height: 200px;
        margin-top: 100px;

        .main-info-container {
            display: flex;
            justify-content: center;

            div {
                display: flex;
                align-items: center;
                margin: 0 100px;

                p {
                    margin: 60px 0;
                    margin-right: 30px;
                    font-family: "SF Mono Heavy";
                    font-size: 72px;
                }

                span {
                    font-family: "SF Pro";
                    opacity: 0.4;
                    font-size: 40px;
                }
            }
        }
    }
}
</style>