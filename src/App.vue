<template>
<div class="row">
  <div class="col-2">
    <!-- <Navbar></Navbar> -->
    <router-view name="Navbar"></router-view>
  </div>
  <div class="col-10">
    <router-view />
  </div>
</div>
  
  
</template>
<script>

export default {
  components: {
    // Navbar,
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
}


</style>
