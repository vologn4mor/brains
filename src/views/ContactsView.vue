<template>
    <div class="contacts-container">
        <div class="main-container">
            <div class="main-block">
                <div class="content">
                    <div class="left">
                        <p class="colored">Get in touch</p>
                        <h1 class="main-text">Contact us</h1>
                    </div>
                    <div class="right">
                        <div class="points">
                            <div class="point">
                                <img :src="check" alt="check">
                                <p>Interested in learning more or ready to get started with Brains?</p>
                            </div>
                            <div class="point">
                                <img :src="check" alt="check">
                                <p>Reach out to our team and let us guide you through the process.</p>
                            </div>
                            <div class="point">
                                <img :src="check" alt="check">
                                <p>Explore the possibilities of intelligent agents for your Web3 startup!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="second-container container">
            <div class="second-block">
                <div class="up">
                    <AppCard>
                        <div class="card card-left">
                            <div class="left">
                                <p class="colored">USA, Germany, Swtzerland</p>
                                <p class="title">We are a growing global company.</p>
                                <p class="text">Our company was founded in 2022. We work daily to become better, and we are
                                    ready to share best practices.</p>
                            </div>
                            <div class="right">
                                <img :src="map" alt="">
                            </div>
                        </div>
                    </AppCard>
                    <AppCard>
                        <div class="card card-right">
                            <div class="left">
                                <p class="title">Send us a message</p>
                                <AppInput placeholder="Name" />
                                <AppInput placeholder="Email" />
                                <AppInput placeholder="Message" />
                                <AppButton text="Submit" paddin="15px 40px" />
                            </div>
                            <div class="right">
                                <img :src="file" alt="">
                            </div>
                        </div>
                    </AppCard>
                </div>
                <div class="down">
                    <div class="cards-block">
                        <AppCardDefault v-for="(item, index) in secondBlockData" :key="index" :img="item.img"
                            :title="item.title" :text="item.text" />
                    </div>
                </div>
            </div>
        </div>
        <div class="breaker-lines breaker"></div>
        <div class="third-block container">
            <div class="card-block">
                <AppCard>
                    <div class="block-container">
                        <div class="left">
                            <img :src="atom" alt="img">
                            <p class="colored">Our mission</p>
                            <p class="title">Innovate, Thrive, Succeed: Brains and Intelligent Agents Fuel Your Web3
                                Dominance!</p>
                            <p class="text">
                                Our mission at Brains is to empower businesses of all sizes and industries to harness the
                                power of artificial intelligence to drive growth, efficiency, and innovation.
                            </p>
                            <p class="text">
                                From purchasing NFTs effortlessly with traditional payment methods to minting without the
                                need for crypto wallets, our existing agents revolutionize how you operate. Engage your
                                existing audience on social media channels, automate sales, deliver exceptional customer
                                support, measure customer satisfaction, and build meaningful connections through token-based
                                marketing – all with Brains.
                            </p>
                            <p class="text">
                                Brains is not just a company; it’s a catalyst for your success. Our intelligent agents,
                                combined with our agile software development capabilities, empower you to navigate the
                                ever-evolving landscape of Web3 startups confidently. Let us be the driving force behind
                                your growth and unleash the full potential of your venture.
                            </p>
                            <p class="text">
                                Join the Brains revolution today and experience the limitless possibilities of intelligent
                                agents. Together, we will shape the future of Web3 startups.
                            </p>
                        </div>
                        <div class="right">
                            <div>
                                <img :src="first" alt="img">
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
import check from "@/assets/HomeView/ThirdBlock/check.svg"
import AppCard from "../components/AppCard.vue";
import file from "@/assets/ContactsView/SecondBlock/file.png"
import map from "@/assets/ContactsView/SecondBlock/map.png"
import AppInput from "../components/AppInput.vue";
import AppButton from "../components/AppButton.vue";
import AppCardDefault from "../components/AppCardDefault.vue";
import secondBlockData from "../jsons/ContactsView/second-block";
import first from "@/assets/AboutView/FourthBlock/first.png"
import second from "@/assets/AboutView/FourthBlock/second.png"
import third from "@/assets/AboutView/FourthBlock/third.png"
import atom from "@/assets/AboutView/atom.svg"

export default {
    data() {
        return {
            check,
            file,
            map,
            secondBlockData,
            first,
            second,
            third,
            atom
        };
    },
    components: { AppCard, AppInput, AppButton, AppCardDefault }
}
</script>

<style scoped lang="scss">
.main-container {
    background: url("/src/assets/ContactsView/main-lines.svg");
    min-height: 420px;
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    text-align: center;

    .main-block {
        display: flex;
        flex-direction: column;
        align-items: center;

        .content {
            display: flex;
            margin-top: 180px;
            align-items: center;
            max-width: 1240px;
            width: 100%;
            justify-content: space-between;

            .right {
                .points {
                    .point {
                        display: flex;

                        img {
                            margin-right: 10px;
                        }

                        p {
                            font-size: 14px;
                            opacity: 0.5;
                        }
                    }
                }
            }

            .left {
                text-align: left;

                .colored {
                    color: #B6FFFA;
                    font-family: "SF Mono Heavy";
                    font-size: 36px;
                    margin-bottom: 10px;
                }
            }
        }
    }

    .main-text {
        font-size: 32px;
        font-family: "SF Mono Heavy";
        margin-top: 0;
        font-size: 70px;
        margin-bottom: 0px;
    }

}

.second-container {
    .second-block {
        margin: 180px 100px 0 100px;


        .up {
            display: flex;
            justify-content: space-between;

            div {
                padding-right: 0;
            }

            .card {
                display: flex;
                max-width: 575px;
                width: 100%;
            }

            .card-left {
                .colored {
                    color: $light-blue;
                    font-weight: bold;
                }

                .title {
                    font-size: 32px;
                    font-family: "SF Mono Heavy";
                }

                .text {
                    font-family: "SF Pro";
                    font-size: 18px;
                    opacity: 0.5;
                    line-height: 28px;
                }
            }

            .card-right {
                .left {
                    .title {
                        font-size: 32px;
                        font-family: "SF Mono Heavy";
                    }

                    input {
                        margin-bottom: 10px;
                    }

                    button {
                        margin-top: 10px;
                    }
                }
            }
        }

        .down {
            .cards-block {
                margin-top: 10px;
                display: flex;
                justify-content: space-between;
            }
        }
    }


}

.breaker {
    margin: 200px 0 180px 0;
}

.third-block {
    margin-top: 200px;

    .card-block {
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
                    max-width: 348px;
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
</style>