<template>
    <div class="header">
        <div class="logo"><img :src="logo" alt="logo"></div>
        <div class="menu">
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
            ]
        };
    },
    components: { AppButton }
}
</script>

<style lang="scss" scoped>
.header {
    padding: 20px 45px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    background-color: #060505;

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