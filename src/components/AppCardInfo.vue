<template>
    <div class="card-info">
        <div class="card-info-block">
            <div class="left">
                <img :src="item.image" alt="img">
                <p class="title">{{ item.title }}</p>
                <p class="text">{{ item.text }}</p>
            </div>
            <div class="right">
                <img :src="info" alt="">
            </div>
        </div>
        <div class="schedule">
            <RouterLink to="/">
                Shedule a call
            </RouterLink>
        </div>
    </div>
</template>

<script>
import info from "@/assets/HomeView/MeetOurAgents/info.svg"
import { RouterLink } from "vue-router";

export default {
    data() {
        return {
            info
        };
    },
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    components: { RouterLink }
}
</script>

<style lang="scss" scoped>
.card-info {
    background-color: $card-gray;
    transition: 0.5s;
    min-width: 407px;
    min-height: 302px;
    max-width: 407px;
    max-height: 302px;
    margin: 0 10px 10px 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .card-info-block {
        display: flex;
        justify-content: space-between;

        .right {
            padding: 20px 20px 0 0;
        }

        .left {
            padding: 40px 0 0 40px;

            .text {
                transition: 0.5s;
                opacity: 0.5;
                font-family: "SF Pro";
                font-size: 18px;
                margin-top: 10px;
            }

            .title {
                font-family: "SF Mono Bold";
                font-size: 24px;
                margin-bottom: 0;
            }
        }
    }

}

.card-info:nth-child(3n) {
    margin: 0 0 10px 0;
}

.schedule {
    opacity: 0;
    text-align: center;
    background-color: #313737;
    border-top: 1px solid #b6fffa;
    padding: 15px;
}

.card-info:hover {
    background-color: #222121;
    transition: 0.5s;

    .text {
        display: none;
        transition: 0.5s;
        opacity: 0;
    }

    .schedule {
        opacity: 1;
    }
}
</style>

<style scoped lang="scss">
@media (max-width: 360px) {
    .card-info {
        max-height: none;

        .card-info-block {
            justify-content: space-between;


            .left {

                .text {
                    max-width: 240px;
                }

                .title {}
            }
        }

    }
}
</style>