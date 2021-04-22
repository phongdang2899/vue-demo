<template>
  <div class="error">
    <p>404</p>
    <h1>Not Found</h1>
    <a v-on:click="backHome">Back to home</a>
  </div>
</template>

<script>
export default {
  name: "Error",
  methods: {
      backHome() {
          this.$router.push('/')
      }
  }
};
</script>

<style scoped>
.error {
  
  margin: 0 17%;
  width: 500px;
}
p{
    font-size: 200px;
}
h1{
    text-align: center;
}
a{
    text-decoration: underline  !important;
    cursor: pointer;
}
a:hover {
    color: green !important;
}
</style>