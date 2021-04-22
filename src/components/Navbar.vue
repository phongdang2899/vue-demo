<template>
  <div id="nav">
    <ul>
      <div class="nav-img">
          <img alt="Vue logo" src="../assets/logo.png" />
          <h5>Vuejs</h5>
      </div>
      <hr>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/About">About</router-link>
      </li>
      <li>
        <router-link to="/User">User</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navbar",
};
</script>

<style scoped>
ul {
  box-sizing: border-box;
  list-style-type: none;
  margin: 0;
  padding: 0;
  width: 16%;
  background-color: #f1f1f1;
  position: fixed;
  height: 100%;
  overflow: auto;
}

.nav-img img {
  margin: 5px 0px;
  /* object-fit: contain; */
  height: 40px;
  border: 1px #000 solid;
  border-radius: 50px;
}

li a {
  display: block;
  color: #000;
  padding: 8px 10px;
  margin: 2px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #4caf50;
  opacity: 0.8;
  color: white;
}
li a.router-link-exact-active {
  background-color: #4caf50;
  color: white;
}
</style>