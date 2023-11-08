<template>
    <div class="agents-container">
        <div class="agents-block">
            <div class="blockchain-container container">
                <div class="blockchain-block">
                    <div class="left">
                        <AppCard>
                            <p class="title">Blockchain Manager</p>
                            <p class="text">This comprehensive agent is designed to revolutionize the NFT experience. It
                                seamlessly integrates the capabilities of multiple specialized agents.</p>
                            <div class="points">
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>Multimedia Playback: Enables users to enjoy a rich multimedia experience by playing
                                        audio, visual, and video NFTs.</p>
                                </div>
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>Minting Simplified: Allows effortless creation and distribution of NFTs, eliminating
                                        the complexities of cryptocurrency and crypto wallets.</p>
                                </div>
                                <div class="point">
                                    <img :src="check" alt="check">
                                    <p>Instant Creation: Facilitates real-time crafting of NFTs from a phone or PC, ensuring
                                        that even those new to the NFT world can create and launch their tokens in under a
                                        minute.</p>
                                </div>
                            </div>
                            <AppButton text="Try it now!" padding="15px 40px" />
                        </AppCard>
                    </div>
                    <div class="right">
                        <img :src="image" alt="">
                    </div>
                </div>
            </div>
            <div class="breaker-lines breaker"></div>
        </div>
    </div>
</template>

<script>
import AppCard from '../components/AppCard.vue';
import image from "@/assets/AgentsView/image.png";
import check from "@/assets/HomeView/ThirdBlock/check.svg"
import AppButton from '../components/AppButton.vue';


export default {
    components: { AppCard, AppButton },
    data() {
        return {
            image,
            check
        }
    }
}
</script>

<style scoped lang="scss">
.blockchain-block {
    padding-top: 181px;
    display: flex;
    justify-content: space-between;
    margin: 0 100px;


    .left {
        max-width: 615px;

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
@media (max-width:360px) {
    .blockchain-block {
        margin: 0 20px 100px 20px;
        flex-direction: column-reverse;
        padding-top: 125px;

        .right {
            img {
                max-width: 320px;
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