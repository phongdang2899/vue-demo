<template>
  <div id="condition">
    <h1>Condition</h1>
    <ul class="tabs">
      <li v-on:click="changeTabs('login')">Dang Nhap</li>
      <li v-on:click="changeTabs('register')">Dang Ky</li>
    </ul>
    <div class="login" v-show="tabSelected === 'login'">
      <h2>Form Dang Nhap</h2>
      <form action>
        <input type="text" placeholder="Nhap username" />
        <input type="password" placeholder="Nhap password" />
      </form>
    </div>
    <div class="register" v-show="tabSelected === 'register'">
      <h2>Form Dang Ky</h2>
      <form action>
        <input type="text" placeholder="Nhap username" />
        <input type="password" placeholder="Nhap password" />
        <input type="password" placeholder="Nhap lai password" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Condition",
  data() {
    return {
      tabSelected: "login",
    }
    
  },
  methods: {
    changeTabs(tab) {
      this.tabSelected = tab;
    },
  },
};
</script>

<style scoped>
.tabs {
  margin: 0;
  padding: 0;
}
.tabs li {
  cursor: pointer;
  display: inline-block;
  padding: 10px 15px;
  border: 1px solid #000;
}
.login,
.register {
  padding: 15px;
  border: 2px solid blue;
  margin-top: 20px;
}
</style>