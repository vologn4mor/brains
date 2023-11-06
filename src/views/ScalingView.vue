<template>
    <div class="scaling-container">
        <div class="main-block">
            <p class="colored">BRNZ.AI</p>
            <h1 class="main-text">Scaling Blockchains</h1>
        </div>
        <div class="problem-container container">
            <div class="problem-block">
                <h2>Problem</h2>
                <div class="cards">
                    <AppCardDefault v-for="(item, index) in problem" :key="index" :img="item.img" :title="item.title"
                        :text="item.text" />
                </div>
            </div>
        </div>
        <div class="solution-container container">
            <div class="solution-block">
                <h2>Solution</h2>
                <div class="cards">
                    <div class="card" v-for="(item, index) in solution" :key="index">
                        <img :src="item.img" alt="">
                        <div class="info">
                            <p class="title">{{ item.title }}</p>
                            <p class="text">{{ item.text }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="breaker-lines breaker">
        </div>
        <div class="proposition-container container">
            <div class="proposition-block">
                <h2>Unique Value Proposition</h2>
                <div class="cards">
                    <AppCardDefault v-for="(item, index) in proposition" :key="index" :img="item.img" :title="item.title"
                        :text="item.text" />
                </div>
            </div>
        </div>
        <div class="breaker-lines breaker">
        </div>
        <div class="market-container container">
            <div class="market-block">
                <h2>Go-to-Market Strategy</h2>
                <div class="cards">
                    <AppCardDefault v-for="(item, index) in market" :key="index" :img="item.img" :title="item.title"
                        :text="item.text" />
                </div>
            </div>
        </div>
        <div class="breaker-lines breaker"></div>
        <div class="business-container container">
            <div class="business-block">
                <h2>Business Model</h2>
                <div class="cards">
                    <AppCardDefault v-for="(item, index) in business" :key="index" :img="item.img" :title="item.title"
                        :text="item.text" />
                </div>
            </div>
        </div>
        <div class="analysis-container">
            <div class="container">
                <div class="analysis-block">
                    <div class="left">
                        <h2>Market Analysis</h2>
                        <p>The global blockchain technology market was valued at $10.02 billion in 2022 and is expected to
                            grow at a CAGR of 87.7% from 2023 to 2030. The NFT market worldwide is projected to grow by
                            18.55% (2023-2027), resulting in a market volume of US$3,162.00m in 2027. The social media
                            advertising market is set to soar to an astounding $207.10 billion in 2023. The affiliate
                            marketing industry is worth $17 billion in 2023.</p>
                    </div>
                    <div class="right">
                        <div class="cards">
                            <AppCardDefault v-for="(item, index) in analysis" :key="index" :img="item.img"
                                :title="item.title" :text="item.text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="projections-container container">
            <div class="projections-block">
                <div class="left">
                    <h2>Financial Projections</h2>
                    <p>These numbers show the vast potential of the market that Brains is entering. By leveraging the power
                        of Brains’ multi-agent system, startups can seize a significant portion of this growing market.</p>
                </div>
                <div class="right">
                    <div class="cards">
                        <div class="card">
                            <p class="year">2023</p>
                            <p class="sum">$18.82 Billion</p>
                        </div>
                        <div class="card">
                            <p class="year">2024</p>
                            <p class="sum">$35.32 Billion</p>
                        </div>
                        <div class="card">
                            <p class="year">2025</p>
                            <p class="sum">$66.35 Billion</p>
                        </div>
                        <div class="card">
                            <p class="year">2026</p>
                            <p class="sum">$124.63 Billion</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import AppCardDefault from '../components/AppCardDefault.vue';
import analysis from '../jsons/ScalingView/analysis';
import business from '../jsons/ScalingView/business';
import market from '../jsons/ScalingView/market';
import problem from '../jsons/ScalingView/problem';
import proposition from '../jsons/ScalingView/proposition';
import solution from '../jsons/ScalingView/solution';



export default {
    data() {
        return {
            problem,
            solution,
            proposition,
            market,
            business,
            analysis
        };
    },
    components: { AppCardDefault }
}
</script>

<style scoped lang="scss">
.main-block {
    background-image: url("/src/assets/ScalingView/main-lines.svg");
    height: 420px;
    text-align: center;

    .colored {
        margin-top: 0;
        padding-top: 152px;
        color: #B6FFFA;
        font-size: 32px;
        font-family: "SF Mono Heavy";
        margin-top: 0;
    }

    .colored,
    .main-text {
        font-family: "SF Mono Heavy";
        font-weight: bold;
    }

    .main-text {
        font-size: 70px;
        margin-top: 20px;
        margin-bottom: 0px;
    }
}

h2 {
    text-align: center;
    font-family: "SF Mono Heavy";
    font-size: 48px;
    font-weight: bold;
}

.problem-block {
    margin: 0 100px;

    h2 {
        margin-top: 160px;
    }

    .cards {
        display: flex;
        justify-content: space-between;
    }
}

.solution-block {
    margin: 170px 100px 0 100px;

    .cards {
        display: flex;
        justify-content: space-between;

        .card {
            padding: 38px;
            border: 2px solid $light-blue;
            max-width: 536px;
            width: 100%;
            display: flex;
            justify-content: space-between;

            img {
                max-width: 80px;
            }

            .info {
                max-width: 415px;

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
}

.proposition-block {
    margin: 0 100px;
    display: flex;
    justify-content: space-between;

    h2 {
        text-align: left;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        max-width: 823px;

        div {
            background-color: $main-dark;

        }
    }
}

.market-block {
    margin: 0 100px;

    h2 {
        margin-top: 160px;
    }

    .cards {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        div {
            margin-bottom: 10px;
        }
    }
}

.business-block {
    margin: 0 100px;

    .cards {
        display: flex;
        flex-wrap: wrap;

        div {
            display: flex;
            max-width: 536px;
            background-color: $main-dark;
        }
    }
}

.analysis-container {
    background-image: url("/src/assets/ScalingView/seventh-lines.svg");
    height: 558px;

    .analysis-block {
        margin: 100px;
        display: flex;
        align-items: center;

        .left {
            h2 {
                margin-top: 100px;
                text-align: left;
                margin-bottom: 10px;
            }

            p {
                max-width: 308px;
                font-size: 18px;
                font-family: "SF Pro";
                opacity: 0.5;
            }
        }

        .right {
            .cards {
                display: flex;
                margin-top: 100px;

                div:first-child {
                    margin-right: 10px;
                }

                div {
                    padding: 38px;
                    border: 2px solid $light-blue;
                    background-color: transparent;
                    backdrop-filter: blur(10px);
                }
            }
        }
    }
}

.breaker {
    margin: 160px 0 120px 0;
}

.projections-block {
    margin: 160px 100px;
    display: flex;
    justify-content: space-between;

    .left {
        max-width: 326px;
        padding: 36px 45px;

        h2 {
            text-align: left;
        }
    }

    .right {
        .cards {

            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;


            .card {
                padding: 38px;
                border: 2px solid $light-blue;
                max-width: 327px;
                width: 100%;
                margin-bottom: 10px;


                .year {
                    font-family: "SF Pro";
                    font-size: 64px;
                    color: $light-blue;
                    margin-bottom: 10px;
                    margin-top: 0;
                }

                .sum {
                    font-family: "SF Mono";
                    font-size: 24px;
                    font-weight: bold;
                    margin: 0;
                }
            }
        }
    }
}
</style>