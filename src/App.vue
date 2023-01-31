<template>
  <section>
    <Sidebar />
    <router-view class="content"></router-view>
  </section>
</template>

<script>
import Sidebar from "./components/sidebar-menu.vue";
export default {
    name: 'App',
    components: {Sidebar},
    data() {
      return {}
    }
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  margin-top: 60px;
}

.content{
  position: relative;
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    height: 100%;
    min-height: min-content;
}

</style>
