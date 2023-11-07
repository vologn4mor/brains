<template>
    <div class="header">
        <div class="logo-block">
            <div class="">
                <img :src="logo" alt="logo" class="logo">
                <div class="mobile-route">
                    <img :src="arrRight" alt="" class="arr-right">
                    <img :src="currentRoute?.img" alt="">
                    <p class="route-title">{{ currentRoute?.title }}</p>
                </div>
            </div>
            <div class="burger-menu" @click="isOpened = !isOpened">
                <img :src="menuBtn" alt="">
            </div>
        </div>
        <div class="menu">
            <RouterLink v-for="(item, index) in routes" :key="index" :to="item.path">
                <img :src="item.img" :alt="item.title">
                <span>{{ item.title }}</span>
            </RouterLink>
            <AppButton text="Schedule a call" />
        </div>
        <div class="menu-mobile" v-if="isOpened">
            <RouterLink v-for="(item, index) in routes" :key="index" :to="item.path">
                <img :src="item.img" :alt="item.title">
                <span>{{ item.title }}</span>
            </RouterLink>
            <AppButton text="Schedule a call" />
        </div>
    </div>
</template>

<script>
import logo from "@/assets/logo.svg"
import home from "@/assets/header/home.svg"
import agents from "@/assets/header/agents.svg"
import onboarding from "@/assets/header/onboarding.svg"
import services from "@/assets/header/services.svg"
import blog from "@/assets/header/blog.svg"
import about from "@/assets/header/about.svg"
import contacts from "@/assets/header/contacts.svg"
import AppButton from "./AppButton.vue"
import arrRight from "@/assets/header/arr-right.svg"
import menuBtn from "@/assets/header/menu-btn.svg"

export default {
    data() {
        return {
            logo,
            routes: [
                {
                    title: "Home",
                    path: "/",
                    img: home
                },
                {
                    title: "Agents",
                    path: "/agents",
                    img: agents
                },
                {
                    title: "Onboarding",
                    path: "/onboarding",
                    img: onboarding
                },
                {
                    title: "Services",
                    path: "/services",
                    img: services
                },
                {
                    title: "Blog",
                    path: "/blog",
                    img: blog
                },
                {
                    title: "About",
                    path: "/about",
                    img: about
                },
                {
                    title: "Contacts",
                    path: "/contacts",
                    img: contacts
                },
            ],
            arrRight,
            menuBtn,
            currentRoute: null,
            isOpened: true
        };
    },
    components: { AppButton },
    methods: {
        updateCurrentRoute(path) {
            const route = this.routes.filter(item => {
                return item.path === path
            })

            return route.length ? route[0] : null
        }
    },
    watch: {
        $route(to) {
            this.currentRoute = this.updateCurrentRoute(to.fullPath);
            this.isOpened = false
        }
    },
    beforeMount() {
        this.currentRoute = this.updateCurrentRoute(this.$route.fullPath)
    }
}
</script>

<style lang="scss" scoped>
.header {
    padding: 20px 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: absolute;
    width: 94%;
    // top: 0;
    // background-color: #060505;
    z-index: 1;

    .mobile-route,
    .burger-menu,
    .menu-mobile {
        display: none;
    }

    .menu {
        display: flex;

        a {
            display: flex;
            align-items: center;
            margin-left: 30px;
            opacity: 0.5;
        }

        span {
            margin-left: 5px;
        }

        button {
            margin-left: 30px
        }

        .router-link-active {
            opacity: 1;
        }


    }
}
</style>

// Mobile

<style lang="scss" scoped>
@media (max-width: 360px) {
    .menu {
        display: none !important;
    }

    .logo-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 320px;

        div {
            display: flex;
            align-items: center;
        }

        .logo {
            max-width: 30px;
        }
    }

    .mobile-route {
        display: flex !important;
        align-items: center;

        .arr-right {
            width: 24px;
            margin: 0 5px 0 6px;
        }

        .route-title {
            margin-left: 5px;
        }
    }

    .burger-menu {
        display: flex !important;
    }

    .header {
        display: flex;
        flex-direction: column;
        padding: 20px 0;
        width: 100%;

        .menu-mobile {
            display: flex;
            flex-direction: column;
            background-color: $main-dark;
            width: 100%;
            border-radius: 6px;
            padding: 10px 0;

            a {
                display: flex;
                align-items: center;
                // margin-left: 30px;
                margin: 0 auto;
                opacity: 0.5;
                margin-bottom: 15px;
            }

            span {
                margin-left: 5px;
            }

            button {
                // margin-left: 30px
                max-width: 200px;
                margin: 0 auto;
            }

            .router-link-active {
                opacity: 1;
            }

            // margin-right: 200px;
            // justify-content: center;
            // margin: 0 auto;

        }
    }
}
</style>