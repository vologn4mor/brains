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
                <img :src="secondBlockImage" alt="">
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
        <div class="fourth-block">

        </div>
    </div>
</template>

<script>
import secondBlockImage from "@/assets/AboutView/second-block-img.png"
import atom from "@/assets/AboutView/atom.svg"

export default {
    data() {
        return {
            secondBlockImage,
            atom
        }
    }
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
</style>