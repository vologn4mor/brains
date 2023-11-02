<template>
  <div class="main-container">
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
  font-family: "SF Pro";
  src: url("./assets/fonts/SF-Pro-Display-Regular.otf");
}

body {
  background-color: $main-dark;
}

p,
span,
a {
  color: #FFFFFF;
  font-family: "SF Mono";
}

a {
  text-decoration: none;
}

.main-container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>