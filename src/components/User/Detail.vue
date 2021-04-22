<template>
    <div>
        <h4>User Detail: {{ $route.params.id }}</h4>
    </div>
    <router-link  class="btn btn-info" 
                :to="{ name: 'Edit', params: { id: $route.params.id } }">Edit</router-link>
</template>

<script>
    export default {
        name: 'Detail'
    }
</script>

<style lang="scss" scoped>

</style>