<template>
  <div>
    <h4>Danh sách người dùng</h4>
    <table class="table">
      <thead>
        <tr>
          <th>Mã người dùng</th>
          <th>Họ tên</th>
          <th>Ngày sinh</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in listUser" v-bind:key="user.id">
          <td scope="row">
            <router-link :to="{ name: 'Detail', params: { id: user.id } }">{{user.id}}</router-link>
          </td>
          <td>{{user.userName}}</td>
          <td>{{user.birth}}</td>
        </tr>
      </tbody>
      <Detail v-bind:title="title" />
    </table>
  </div>
  <router-view />
</template>

<script>
import Detail from "./Detail.vue";
export default {
  name: "List",
  data() {
    return {
      title: "test",
      listUser: [
        { id: "User01", userName: "Phong", birth: "12/12/1999", action: true },
        { id: "User02", userName: "Huy", birth: "12/12/1999", action: true },
        { id: "User03", userName: "Văn", birth: "12/12/1999", action: false },
        { id: "User04", userName: "Hàn", birth: "12/12/1999", action: true },
      ],
    };
  },
  components: {
    Detail,
  },
};
</script>

<style scoped>
</style>