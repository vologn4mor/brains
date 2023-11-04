<template>
  <div>
    <AppHeader />
    <RouterView />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';

export default {
  components: { AppHeader }
}
</script>

<style lang="scss">
@font-face {
  font-family: "SF Mono";
  src: url("./assets/fonts/SFMono-Regular.otf");
}

@font-face {
  font-family: "SF Mono Bold";
  src: url("./assets/fonts/SFMono-Bold.otf");
}

@font-face {
  font-family: "SF Mono Heavy";
  src: url("./assets/fonts/SFMono-Heavy.otf");
}

@font-face {
  font-family: "SF Pro";
  src: url("./assets/fonts/SF-Pro-Display-Regular.otf");
}

@font-face {
  font-family: "SF Pro Medium";
  src: url("./assets/fonts/SF-Pro-Display-Medium.otf");
}

body {
  background-color: $main-dark;
}

p,
span,
a,
h1,
h2,
h3 {
  color: #FFFFFF;
  font-family: "SF Mono";
}

a {
  text-decoration: none;
}

button:hover {
  cursor: pointer;
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}

.breaker-lines {
  background-image: url("/src/assets/HomeView/lines-small.svg");
  height: 17px;
}
</style>