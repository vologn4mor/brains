<template>
    <div class="agents-container">
        <div class="agents-block">
            <div class="blockchain-container container">
                <div class="blockchain-block">
                    <div class="left">
                        <AppCard type="agent">
                            <p class="title">{{ openedAgent.title }}</p>
                            <p class="text">{{ openedAgent.text }}</p>
                            <div class="points">
                                <div class="point" v-for="(point, index) in openedAgent.points" :key="index">
                                    <img :src="check" alt="check">
                                    <p>{{ point }}</p>
                                </div>
                            </div>
                            <AppButton text="Try it now!" padding="15px 40px" />
                        </AppCard>
                    </div>
                    <div class="right">
                        <img :src="openedAgent.img" alt="">
                    </div>
                </div>
            </div>
            <div class="breaker-lines breaker"></div>
        </div>
    </div>
</template>

<script>
import AppCard from '../components/AppCard.vue';
import image from "@/assets/AgentsView/blockchain-manager.png";
import check from "@/assets/HomeView/ThirdBlock/check.svg"
import AppButton from '../components/AppButton.vue';
import agents from '@/jsons/AgentsView/agents.js'


export default {
    components: { AppCard, AppButton },
    data() {
        return {
            image,
            check,
            openedAgent: null,
        }
    },
    methods: {
        updatePage() {
            let agent = this.$route.params.agent
            this.openedAgent = agents.filter(item => item.route === agent)[0]
            if (!this.openedAgent) {
                agent = "blockchain-manager"
                this.openedAgent = agents.filter(item => item.route === agent)[0]
            }
        }
    },
    beforeMount() {
        this.updatePage();
    },
    watch: {
        $route() {
            this.updatePage()
        }
    },
}
</script>

<style scoped lang="scss">
.blockchain-block {
    padding-top: 181px;
    display: flex;
    justify-content: space-between;
    margin: 0 100px;

    .right {
        img {
            width: 615px;
            height: 544px;
        }
    }


    .left {
        max-width: 615px;

        div {}

        // div {
        //     height: 544px;

        //     p,
        //     .point,
        //     .points,
        //     img {
        //         height: fit-content;
        //     }
        // }

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

        .title {
            font-family: "SF Mono Bold";
            font-size: 24px;
            font-weight: bold;
        }

        .text {
            font-family: "SF Pro";
            font-size: 18px;
            opacity: 0.5;
        }

        button {
            margin-bottom: 15px;
        }
    }
}

.breaker {
    margin: 100px 0 76px 0;
}
</style>

<style scoped lang="scss">
@media (max-width:700px) {
    .blockchain-block {
        margin: 0 20px 100px 20px;
        flex-direction: column-reverse;
        padding-top: 125px;

        .right {
            img {
                max-width: 100%;
            }

            margin-bottom: 10px;
        }

        .left {
            .points {
                .point {
                    line-height: 24px;
                }
            }

            button {
                width: 100%;
            }
        }
    }

    .breaker {
        display: none;
    }
}
</style>