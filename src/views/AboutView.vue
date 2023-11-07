<template>
    <div class="about-container">
        <div class="main-container">
            <div class="main-block">
                <h1 class="main-text">About our company</h1>
                <p class="pioneers">
                    At Brains, we are pioneers in providing cutting-edge solutions for Web3 startups. With our suite of
                    intelligent agents, we offer a comprehensive ecosystem that drives growth, enhances user experience, and
                    simplifies complex processes. But that’s not all – our team of skilled software experts stands ready to
                    develop new agents tailored to your specific needs, ensuring you stay ahead of the game.</p>
            </div>
        </div>
        <div class="second-container container">
            <div class="second-block">
                <img :src="secondBlockImage" alt="" class="second-block-image">
                <img :src="secondBlockImageMobile" alt="" class="second-block-image-mobile">
                <div class="info">
                    <div class="left">
                        <img :src="atom" alt="atom">
                        <p>Our mission</p>
                        <span>Innovate, Thrive, Succeed: Brains and Intelligent Agents Fuel Your Web3 Dominance!</span>
                    </div>
                    <div class="right">
                        <p>
                            Our mission at Brains is to empower businesses of all sizes and industries to harness the power
                            of artificial intelligence to drive growth, efficiency, and innovation.
                        </p>
                        <p>
                            From purchasing NFTs effortlessly with traditional payment methods to minting without the need
                            for crypto wallets, our existing agents revolutionize how you operate. Engage your existing
                            audience on social media channels, automate sales, deliver exceptional customer support, measure
                            customer satisfaction, and build meaningful connections through token-based marketing – all with
                            Brains.
                        </p>
                        <p>
                            Brains is not just a company; it’s a catalyst for your success. Our intelligent agents, combined
                            with our agile software development capabilities, empower you to navigate the ever-evolving
                            landscape of Web3 startups confidently. Let us be the driving force behind your growth and
                            unleash the full potential of your venture.
                        </p>
                        <p>
                            Join the Brains revolution today and experience the limitless possibilities of intelligent
                            agents. Together, we will shape the future of Web3 startups.
                        </p>
                    </div>
                </div>
            </div>
        </div>
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
        <div class="fourth-block container">
            <div class="up-block">
                <AppCard v-for="(item, index) in fourthBlockData" :key="index">
                    <div class="card">
                        <img :src="item.img" alt="img">
                        <p class="title">{{ item.title }}</p>
                        <p class="text">{{ item.text }}</p>
                    </div>
                </AppCard>
            </div>
            <div class="down-block">
                <AppCard>
                    <div class="block-container">
                        <div class="left">
                            <img :src="first" alt="" class="first-mobile">
                            <img :src="cup" alt="img">
                            <p class="colored">What we do</p>
                            <p class="title">Empowering Web3 Startups with Intelligent Agents</p>
                            <p class="text">
                                At Brains, we are pioneers in providing cutting-edge solutions for Web3 startups. Our
                                mission is
                                to
                                empower Web3 Startups with Intelligent Agents.
                            </p>
                            <p class="text">
                                Here’s an overview of what we do:Our Solutions:We offer a suite of intelligent agents
                                designed
                                to
                                streamline and enhance your startup operations.
                            </p>
                            <p class="text">
                                Training and Support:
                            </p>
                            <p class="text">
                                We provide training and support to ensure our customers get the most out of our solutions.
                                Our
                                team
                                of experts is available to provide assistance and guidance whenever needed.
                            </p>
                            <p class="text">
                                Exit:
                            </p>
                            <p class="text">
                                We help you to sell this business in six-to-twelve months and provide professional support
                                in
                                dealing with brokers.
                            </p>
                            <AppButton text="Shedule a call" padding="15px 40px" />
                        </div>
                        <div class="right">
                            <div>
                                <img :src="first" alt="img" class="first">
                            </div>
                            <div>
                                <img :src="second" alt="img">
                                <img :src="third" alt="img">
                            </div>
                        </div>
                    </div>
                </AppCard>
            </div>
        </div>
        <div class="breaker-lines breaker"></div>
    </div>
</template>

<script>
import secondBlockImage from "@/assets/AboutView/second-block-img.png"
import secondBlockImageMobile from "@/assets/AboutView/second-block-img-mobile.png"
import atom from "@/assets/AboutView/atom.svg"
import AppCard from "../components/AppCard.vue";
import fourthBlockData from "@/jsons/AboutView/fourth-block.js"
import AppButton from "../components/AppButton.vue";
import cup from "@/assets/AboutView/FourthBlock/cup.svg"
import first from "@/assets/AboutView/FourthBlock/first.png"
import second from "@/assets/AboutView/FourthBlock/second.png"
import third from "@/assets/AboutView/FourthBlock/third.png"

export default {
    data() {
        return {
            secondBlockImage,
            secondBlockImageMobile,
            atom,
            fourthBlockData,
            first,
            second,
            third,
            cup
        };
    },
    components: { AppCard, AppButton }
}
</script>

<style scoped lang="scss">
.main-container {
    background: url("/src/assets/AboutView/main-lines.svg");
    min-height: 468px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;

    .main-block {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .main-text {
        padding-top: 155px;
        // color: #B6FFFA;
        font-size: 32px;
        font-family: "SF Mono Heavy";
        margin-top: 0;
        font-size: 70px;
        // margin-top: 20px;
        margin-bottom: 0px;
    }

    .pioneers {
        text-align: center;
        max-width: 1192px;
        font-size: 14px;
        opacity: 0.5;
        line-height: 28px;
        font-size: 18px;
        font-family: "SF Pro";
    }
}

.second-container {
    .second-block {
        background-color: $card-gray;
        margin: 120px 100px 0 100px;
        padding: 40px;
    }

    .info {
        display: flex;
        justify-content: space-between;

        .left,
        .right {
            max-width: 530px;
        }

        .left {
            font-family: "SF Mono Bold";

            img {
                margin: 40px 0;
            }

            p {
                color: #B6FFFA;
                font-size: 18px;
                margin-top: 0;
            }

            span {
                font-size: 24px;
            }
        }

        .right {

            p {
                font-family: "SF Pro";
                font-size: 18px;
                line-height: 28px;
                opacity: 0.5;
            }

            p:first-child {
                margin-top: 40px;
            }
        }
    }
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

.fourth-block {
    margin-top: 200px;

    .up-block {
        display: flex;
        margin: 0 100px;
        justify-content: space-between;

        div {
            max-width: 326px;

            .card {
                .title {
                    font-family: "SF Mono Bold";
                    font-weight: bold;
                    font-size: 24px;
                }

                .text {
                    font-family: "SF Pro";
                    font-size: 18px;
                    opacity: 0.5;
                }
            }
        }
    }

    .down-block {
        margin: 10px 100px;

        .block-container {
            display: flex;
            justify-content: space-between;

            .left {
                max-width: 560px;

                .colored {
                    color: #B6FFFA;
                    font-family: "SF Mono Bold";
                    font-weight: bold;
                    font-size: 18px;
                }

                .title {
                    font-family: "SF Mono Bold";
                    font-weight: bold;
                    font-size: 24px;
                }

                .text {
                    font-family: "SF Pro";
                    line-height: 24px;
                    font-size: 18px;
                    opacity: 0.5;
                }
            }

            .right {
                div:last-child {
                    display: flex;
                    justify-content: space-between;
                }
            }
        }

    }


}

.breaker {
    margin: 200px 0 59px 0;
}

.first-mobile,
.second-block-image-mobile {
    display: none;
}
</style>

<style scoped lang="scss">
@media (max-width: 360px) {

    .main-container {
        background: url("/src/assets/AboutView/main-lines-mobile.svg");
        min-height: 638px;
        width: 100%;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
        text-align: center;

        .main-block {
            margin: 0 20px;

            .main-text {
                font-size: 43px;
                text-align: left;
            }

            .pioneers {
                text-align: left;
            }
        }
    }

    .second-block {
        display: flex;
        flex-direction: column-reverse;
        margin: 120px 20px 100px 20px !important;

        .second-block-image {
            display: none;
        }

        .second-block-image-mobile {
            display: block;
        }

        .info {
            flex-direction: column;

            img {
                margin-top: 0 !important;
            }
        }
    }

    .main-info {
        .main-info-container {
            flex-direction: column;
            background-image: url("/src/assets/AboutView/main-info-lines-mobile.svg");
            height: 620px;
            margin-top: 100px;
            align-items: center;

            div {
                margin: 0 20px;
            }
        }
    }

    .fourth-block {
        margin: 500px 20px 50px 20px;

        .up-block {
            flex-direction: column;
            margin: 0 auto;

            div {
                margin-bottom: 10px;
            }
        }

        .down-block {
            margin: 10px 0;

            .block-container {
                // display: flex;

                flex-direction: column;

                .first-mobile {
                    display: block;
                    width: 240px;
                    margin-bottom: 40px;
                }

                .first {
                    display: none;
                }

                .right {
                    margin-top: 18px;

                    div:last-child {
                        img {
                            height: auto;
                            width: 115px;
                        }
                    }
                }
            }
        }
    }

    .breaker {
        display: none;
    }
}
</style>