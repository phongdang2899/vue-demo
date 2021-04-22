<template>
  <div class="row">
      <div class="col-4">
          <Condition/>
      </div>
  </div>
  <router-view />
</template>

<script>
import Condition from "../components/method/Condition"
export default {
  name: "Method",
  components: {
    Condition,
  },
};
</script>

<style lang="scss" scoped>
</style>