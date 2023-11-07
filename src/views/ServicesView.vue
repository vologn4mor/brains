<template>
    <div class="services-block">
        <div class="main-block">
            <p class="introducing">Introducing Brainz:</p>
            <h1 class="main-text">
                Services we provide <br />
                for your Web 3.0 Project</h1>
            <p class="complete">The complete list of BTS (Build-Tokenize-Sell)</p>
        </div>
        <div class="build-block container">
            <h2>Build</h2>
            <div class="build-cards">
                <AppCard v-for="(item, index) in build" :key=index>
                    <img :src="item.img" alt="img">
                    <p class="title">{{ item.title }}</p>
                    <div class="points" v-for="(point, ind) in item.points" :key="ind">
                        <div class="point">
                            <img :src="check" alt="check">
                            <p>{{ point }}</p>
                        </div>
                    </div>
                </AppCard>
            </div>
        </div>
        <div class="tokenize-block container">
            <h2>Tokenize</h2>
            <div class="tokenize-cards">
                <div class="left">
                    <AppCard>
                        <div class="card1">
                            <img :src="tokenize[0].img" alt="img">
                            <p class="title">{{ tokenize[0].title }}</p>
                            <div class="points" v-for="(point, index) in tokenize[0].points" :key="index">
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>{{ point }}</p>
                                </div>
                            </div>
                        </div>
                    </AppCard>
                </div>
                <div class="middle">
                    <AppCard>
                        <div class="card2">
                            <img :src="tokenize[1].img" alt="img">
                            <p class="title">{{ tokenize[1].title }}</p>
                            <div class="points" v-for="(point, index) in tokenize[1].points" :key="index">
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>{{ point }}</p>
                                </div>
                            </div>
                        </div>
                    </AppCard>
                    <AppCard>
                        <div class="card3">
                            <img :src="tokenize[2].img" alt="img">
                            <p class="title">{{ tokenize[2].title }}</p>
                            <div class="points" v-for="(point, index) in tokenize[2].points" :key="index">
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>{{ point }}</p>
                                </div>
                            </div>
                        </div>
                    </AppCard>
                </div>
                <div class="right">
                    <AppCard>
                        <div class="card4">
                            <img :src="tokenize[3].img" alt="img">
                            <p class="title">{{ tokenize[3].title }}</p>
                            <div class="points" v-for="(point, index) in tokenize[3].points" :key="index">
                                <div v-if="(typeof point === 'object')">
                                    <div class="point">
                                        <img :src="check" alt="check">
                                        <p>{{ point.title }}</p>
                                    </div>
                                    <ul>
                                        <li v-for="(item, idx) in point.points" :key="idx">
                                            {{ item }}
                                        </li>
                                    </ul>
                                </div>
                                <div class="point" v-else>
                                    <img :src="check" alt="check">
                                    <p>{{ point }}</p>
                                </div>
                            </div>
                        </div>
                    </AppCard>
                </div>
            </div>
        </div>
        <div class="sell-block container">
            <h2>Sell</h2>
            <div class="sell-cards">
                <AppCard>
                    <div class="sell-card">
                        <div class="left">
                            <img :src="album" alt="">
                            <p class="title">Token Sale</p>
                        </div>
                        <div class="right">
                            <div class="points">
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>Building and growing of community for crypto investors as preparing of the token sale
                                        process</p>
                                </div>
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>Our unique project promotion approach will help you set up a community of potential
                                        investors ASAP.</p>
                                </div>
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>You can use Deep Shopify or Bigcommerce integration to create your token store on the
                                        best marketplaces.</p>
                                </div>
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>Integrated flexible marketplace for selling goods/tokens for crypto or credit card
                                        payment via web/mobile or chatbots on Facebook and Instagram</p>
                                </div>
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
import build from '../jsons/ServicesView/build';
import tokenize from '../jsons/ServicesView/tokenize';
import check from "@/assets/HomeView/ThirdBlock/check.svg"
import AppCard from "../components/AppCard.vue"
import album from "@/assets/ServicesView/Tokenize/album.svg";


export default {
    components: { AppCard },
    data() {
        return {
            build,
            check,
            tokenize,
            album
        }
    }
}
</script>

<style scoped lang="scss">
.main-block {
    background-image: url("/src/assets/ServicesView/main-lines.svg");
    height: 537px;
    text-align: center;

    .introducing {
        margin-top: 0;
        padding-top: 152px;
        color: #B6FFFA;
        font-size: 32px;
        font-family: "SF Mono Heavy";
        margin-top: 0;
    }

    .introducing,
    .main-text {
        font-family: "SF Mono Bold";
    }

    .complete {
        font-size: 14px;
        opacity: 0.5;
    }

    .main-text {
        font-size: 70px;
        margin-top: 20px;
        margin-bottom: 0px;
    }
}

.build-block {
    margin-top: 100px;

    h2 {
        font-family: "SF Mono Heavy";
        font-size: 48px;
        text-align: center;

    }

    .build-cards {
        max-width: 1240px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        div {
            width: 225px
        }

        .title {
            font-size: 24px;
            font-weight: bold;
        }

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

}

.tokenize-block {
    margin-top: 100px;

    h2 {
        font-family: "SF Mono Heavy";
        font-size: 48px;
        text-align: center;

    }

    .tokenize-cards {
        display: flex;
        margin: 0 100px;
        justify-content: space-between;

        .title {
            font-size: 24px;
            font-weight: bold;
        }

        .points {
            .point {
                display: flex;

                img {
                    margin-right: 10px;
                }

                p {
                    font-size: 14px;
                    opacity: 0.5;
                    line-height: 22px;
                }
            }
        }

        .left {
            .card1 {
                height: 756px;
            }
        }

        .middle {
            .card2 {
                height: 254px;

            }

            .card3 {
                height: 401px;

            }

            div:first-child {
                margin-bottom: 7px;
            }
        }

        .left,
        .middle {
            div {
                width: 222px;
            }
        }

        .right {
            color: #fff;

            .card4 {
                height: 756px;
            }

            li {
                opacity: 0.5;
                font-family: "SF Pro";
                margin-bottom: 10px;
                font-size: 16px;
            }
        }
    }
}

.sell-block {
    margin-top: 100px;

    h2 {
        font-family: "SF Mono Heavy";
        font-size: 48px;
        text-align: center;

    }

    .sell-cards {
        margin: 0 100px;

        .sell-card {
            display: flex;
            align-items: center;
            justify-content: space-between;


            .left {
                display: flex;
                align-items: center;

                img {
                    margin-right: 40px;
                }

                p {
                    margin-right: 40px;
                }
            }

            .title {
                font-size: 24px;
                font-weight: bold;
            }

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
    }


}

.breaker {
    margin: 160px 0 106px 0;
}
</style>

<style scoped lang="scss">
@media (max-width: 360px) {
    .services-block {
        overflow: hidden;

        .main-block {
            text-align: left;

            .introducing {
                margin: 0 20px;
                font-size: 16px;
            }

            .main-text {
                font-size: 30px;
                margin: 0 20px;
            }

            .complete {
                margin: 20px;
                line-height: 24px;
            }
        }
    }

    .build-block {
        .build-cards {
            flex-direction: column;
            margin: 0 20px;
            width: 320px;
            width: 100%;

            div {
                margin-bottom: 10px;
                max-width: 240px;
                width: 100%;
            }
        }
    }

    .tokenize-block {

        .tokenize-cards {
            flex-direction: column;
            margin: 0 20px;

            .middle,
            .left {
                margin-bottom: 10px;
            }

            .left,
            .middle,
            .right {
                max-width: 320px;
            }
        }
    }

    .sell-block {
        .sell-cards {
            margin: 0 20px 50px 20px;

            .sell-card {
                flex-direction: column;
            }
        }
    }

    .breaker {
        display: none;
    }
}
</style>