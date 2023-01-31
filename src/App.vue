<template>
  <section>
    <Sidebar />
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
  color: #2c3e50;
  margin-top: 60px;
}
</style>
