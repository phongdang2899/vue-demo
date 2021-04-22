<template>
  <div></div>
  <List></List>
  <router-view />
</template>

<script>
import List from "../components/user/List"
export default {
  name: "User",
  components: {
    List,
  },
};
</script>

<style lang="scss" scoped>
</style>