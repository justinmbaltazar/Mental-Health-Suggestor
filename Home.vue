<template>
  <div class="home">
    <Header />
    <div class="container">
      <div class="logo">
        <img src="@/assets/Group 2.png" />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
export default {
  name: "Home",
  components: {
    Header,
  },
};
</script>

<style scoped lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100vh;
}
.logo {
}
</style>



