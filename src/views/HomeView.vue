<template>
    <div class="main-block">
        <div class="main-container">
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
    <div class="meet-our-agents container">
        <h2>Meet our Agents</h2>
        <div class="cards-block">
            <AppCardInfo v-for="(item, index) in meetOurAgentsInfo" :key="index" :item="item">
            </AppCardInfo>
        </div>
    </div>
    <div class="breaker"></div>
    <div class="third-block container">
        <div class="block">
            <div class="big-with-checks">
                <div class="left">
                    <div class="title">
                        <p>Not ready
                            to risk your
                            own money on development?</p>
                    </div>
                    <div class="checks">
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>30+ developers, designers,
                                and managers working for us</span>
                        </div>
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>Start now and we will invest
                                in the MVP development</span>
                        </div>
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>You manage the growth
                                and community</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img :src="bankrote" alt="">
                </div>
            </div>
            <div class="big-with-checks">
                <div class="left">
                    <div class="title">
                        <p>Do you count
                            the product overcomplicated?</p>
                    </div>
                    <div class="checks">
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>Not needed to start from scratch</span>
                        </div>
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>Our platform covers tech features that exist in your fantasy even</span>
                        </div>
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>Let’s make together your idea clear for the market and its participants</span>
                        </div>
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>We are startupers for 15+ years. Not needed to chew on the details</span>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img :src="confounded" alt="">
                </div>
            </div>
        </div>
        <div class="block">
            <div class="big-with-checks">
                <div class="left">
                    <div class="title">
                        <p>Not ready
                            to risk your
                            own money on development?</p>
                    </div>
                    <div class="checks">
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>If we believe in your project, we can start after the handshake even</span>
                        </div>
                        <div class="check">
                            <img :src="check" alt="check">
                            <span>You’ll see how your product idea looks with professional UI/UX design in a couple of
                                days</span>
                        </div>
                    </div>
                    <AppButton text="Build with us" padding="15px 40px" />
                </div>
                <div class="right">
                    <img :src="users" alt="">
                </div>
            </div>
            <div class="small-cards-container">
                <div class="small-card">
                    <p class="number">1</p>
                    <p class="text">Short interview
                        to ensure we align</p>
                </div>
                <div class="small-card">
                    <p class="number">2</p>
                    <p class="text">Deep discussion to arrange
                        the roadmap and handshake</p>
                </div>
                <div class="small-card">
                    <p class="number">3</p>
                    <p class="text">Professional UI/UX design</p>
                </div>
                <div class="small-card">
                    <p class="number">4</p>
                    <p class="text">We take a small equity share with most of the development cost covered</p>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="wishes-card">
                <div class="left">
                    <div class="title">
                        <p>Wishes</p>
                    </div>
                    <div class="text">
                        <p>Arrow project align team export frame. Variant rectangle variant vertical fill. Plugin inspect
                            underline device share project distribute. Flatten italic background create move. Move flows
                            asset overflow italic slice polygon group flows. </p>
                    </div>
                    <a href="/" class="visit-link">
                        <p>Visit website</p>
                        <img :src="dblArr" alt="dblArr">
                    </a>
                </div>
                <div class="right">
                    <img :src="wishes" alt="">
                </div>
            </div>
            <div class="small-cards-container">
                <div class="small-card">
                    <p class="number">5</p>
                    <p class="text">Making a new brand and first
                        public release</p>
                </div>
                <div class="small-card">
                    <p class="number">6</p>
                    <p class="text">Ongoing consulting and optimizin of business strategy, customer care and scaling</p>
                </div>
                <div class="small-card">
                    <p class="number">7</p>
                    <p class="text">Marketing automation by using dialog selling system and content generation based on
                        first clients feedback and analytics of their behavior</p>
                </div>
                <div class="small-card">
                    <p class="number">8</p>
                    <p class="text">We help you to sell this business in six-to-twelve months and professional support in
                        dealing
                        with brokers</p>
                </div>
            </div>
        </div>
        <div class="block">
            <div class="card-with-picture">
                <img :src="boomerang" alt="">
                <div class="text-block">
                    <p class="title">Boomerang</p>
                    <p class="text">Cashback solution for Shopify</p>
                </div>
            </div>
            <div class="card-with-picture">
                <img :src="alpha" alt="">
                <div class="text-block">
                    <p class="title">Alpha</p>
                    <p class="text">Crypto news</p>
                </div>
            </div>
            <div class="card-with-picture">
                <img :src="sonft" alt="">
                <div class="text-block">
                    <p class="title">SONFT</p>
                    <p class="text">NFT gated streaming</p>
                </div>
            </div>
        </div>
    </div>
    <div class="technical-overview">
        <div class="technical-overview-container container">
            <div class="technical-block">
                <div class="left-block">
                    <h2>Technical <br /> overview</h2>
                    <a href="/" class="visit-link">
                        <p>Visit website</p>
                        <img :src="arrRight" alt="">
                    </a>
                </div>
                <div class="right-block">
                    <div class="first-list">
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Smart Contract development</p>
                        </div>
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Mobile & Desktop Software development</p>
                        </div>
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Professional custom UX</p>
                        </div>
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Advertising campaign management</p>
                        </div>
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Infrastructure setup and monitoring</p>
                        </div>
                    </div>
                    <div class="second-list">
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Token gated technologies</p>
                        </div>
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Brand development</p>
                        </div>
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Ongoing business support</p>
                        </div>
                        <div class="check">
                            <img :src="check" alt="">
                            <p>Community building and growing</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="expecting container">
        <div class="expecting-block">
            <h2>Why do we need you and what we<br />
                are expecting from you?</h2>
            <div class="first-block">
                <div class="card-with-img" v-for="(item, index) in expectingCards" :key="index">
                    <img :src="item.img" alt="">
                    <p>{{ item.text }}</p>
                </div>
            </div>
            <div class="second-block">
                <div class="left">
                    <p class="title">Embrace the future of Web3 entrepreneurship with power of Brainz.</p>
                    <p class="text">Our intelligent agents are designed to drive growth,
                        enhance user experience, and simplify complex processes.</p>
                    <AppButton text="Revolutionize your startup" padding="15px 40px" />
                </div>
                <div class="right">
                    <img :src="expectingBigImage" alt="">
                </div>
            </div>
            <div class="third-block">
                <AppFaqCard />
                <AppFaqCard />
                <AppFaqCard />
                <AppFaqCard />
            </div>
        </div>
    </div>
    <div class="breaker"></div>
</template>

<script>

import hands from "@/assets/HomeView/hands.png"
import AppButton from "../components/AppButton.vue";
import AppCardInfo from "../components/AppCardInfo.vue";
import AppFaqCard from "../components/AppFaqCard.vue"
import meetOurAgentsInfo from "../jsons/HomeView/meet-our-agents";
import check from "@/assets/HomeView/ThirdBlock/check.svg"
import bankrote from "@/assets/HomeView/ThirdBlock/bankrote.svg"
import confounded from "@/assets/HomeView/ThirdBlock/confounded.svg"
import users from "@/assets/HomeView/ThirdBlock/users.svg"
import dblArr from "@/assets/HomeView/ThirdBlock/double-arrows.svg"
import wishes from "@/assets/HomeView/ThirdBlock/wishes.png"
import boomerang from "@/assets/HomeView/ThirdBlock/boomerang.png"
import alpha from "@/assets/HomeView/ThirdBlock/alpha.png"
import sonft from "@/assets/HomeView/ThirdBlock/sonft.png"
import arrRight from "@/assets/HomeView/TechnicalOverview/arrow-right.svg"
import expectingCards from "@/jsons/HomeView/expecting-cards"
import expectingBigImage from "@/assets/HomeView/Expecting/second-block-image.png"

export default {
    data() {
        return {
            hands,
            meetOurAgentsInfo,
            check,
            bankrote,
            confounded,
            users,
            dblArr,
            wishes,
            boomerang,
            alpha,
            sonft,
            arrRight,
            expectingCards,
            expectingBigImage
        };
    },
    components: { AppButton, AppCardInfo, AppFaqCard }
}
</script>

<style lang="scss" scoped>
.main-block {
    background-color: #060505;

    .main-container {
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
            margin-top: 0;
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

}

.meet-our-agents {
    h2 {
        text-align: center;
        margin: 135px 0 48px 0;
        font-family: "SF Mono Heavy";
        font-size: 48px;
    }

    .cards-block {
        display: flex;
        flex-wrap: wrap;
        margin: 40px 99px;
    }
}

.breaker {
    background-image: url("/src/assets/HomeView/lines-small.svg");
    height: 17px;
    margin: 190px 0 180px 0;
}

.third-block {


    .block {
        margin: 0 100px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;

        .big-with-checks {
            background-color: #161616;
            display: flex;
            min-width: 615px;
            min-height: 440px;
            max-width: 615px;
            max-height: 440px;

            .left {
                margin-left: 40px;

                .title {
                    font-family: "SF Mono Heavy";
                    font-weight: bold;
                    font-size: 32px;
                }

                .checks {
                    margin-bottom: 20px;

                    .check {
                        display: flex;
                        align-items: center;
                        margin-bottom: 10px;

                        span {
                            font-family: "SF Pro";
                            font-size: 18px;
                            opacity: 0.5;
                        }

                        img {
                            margin-right: 10px;
                        }
                    }
                }
            }
        }

        .small-cards-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-left: 10px;

            .small-card {
                background-color: #2f2e2e;
                width: 302px;
                height: 215px;


                .number {
                    color: #B6FFFA;
                    border: 3px solid #B6FFFA;
                    border-radius: 16px;
                    display: inline-block;
                    padding: 8px 16px;
                    font-family: "SF Pro";
                    font-size: 24px;
                    margin: 40px 0 0 40px;
                }

                .text {
                    margin: 20px 40px 0 40px;
                    font-family: "SF Pro";
                    font-size: 16px;
                }
            }

            .small-card:nth-child(-n+2) {
                margin-bottom: 10px;
            }
        }

        .wishes-card {
            display: flex;
            min-width: 615px;
            min-height: 440px;
            max-width: 615px;
            max-height: 440px;
            background-color: #2f2e2e;
            overflow: hidden;

            .left {
                padding: 40px 0 40px 40px;

                .title {
                    font-family: "SF Mono Heavy";
                    font-size: 32px;

                    p {
                        margin-top: 0px;
                    }
                }

                .text {
                    p {
                        font-family: "SF Pro Medium";
                        font-size: 18px;
                        opacity: 0.5;
                        line-height: 28px;
                    }
                }

                .visit-link {
                    display: flex;
                    align-items: center;

                    p {
                        color: #B6FFFA;
                    }
                }
            }
        }

        .card-with-picture {
            background-color: #161616;

            .text-block {
                padding: 40px;

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
        }
    }
}

.technical-overview {
    background-image: url("/src/assets/HomeView/TechnicalOverview/lines.svg");
    height: 420px;
    margin: 190px 0 180px 0;
    display: flex;

    .technical-overview-container {
        display: flex;

        .technical-block {
            margin: 0 100px;
            display: flex;

            .left-block,
            .right-block {
                margin-top: 100px;
            }

            .left-block {
                margin-right: 250px;

                h2 {
                    font-family: "SF Mono Heavy";
                    font-size: 40px;
                    margin-top: 0;
                }

                .visit-link {
                    display: flex;
                    align-items: center;

                    p {
                        color: #B6FFFA;
                    }
                }
            }

            .right-block {
                display: flex;

                .first-list,
                .second-list {
                    .check {
                        display: flex;

                        p {
                            margin-left: 10px;
                            opacity: 0.5;
                        }
                    }
                }

                .first-list {
                    margin-right: 20px;
                }
            }
        }
    }


}

.expecting {
    .expecting-block {
        margin: 0 100px;

        h2 {
            font-family: "SF Mono Bold";
            font-size: 40px;
            text-align: center;
        }

        .first-block {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;

            .card-with-img {
                background-color: #161616;
                padding: 40px;
                max-width: 328px;
                width: 100%;
                display: flex;
                align-items: center;
                margin-bottom: 10px;

                p {
                    max-width: 400px;
                    margin-left: 10px;
                }

            }
        }

        .second-block {
            background-color: #222121;
            display: flex;
            justify-content: space-between;
            align-items: center;

            .left {
                margin-left: 100px;

                .title {
                    font-family: "SF Mono Bold";
                    font-size: 40px;
                    max-width: 550px;
                    margin: 0;
                }

                .text {
                    font-family: "SF Pro";
                    font-size: 18px;
                    max-width: 440px;
                    opacity: 0.5;
                }
            }
        }

        .third-block {
            margin-top: 10px;
            display: grid;
            grid-template-columns: 615px 615px;
            grid-gap: 10px;
            align-items: start;
        }
    }
}
</style>