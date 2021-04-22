<template>
    <div>
        <h4>User Detail: {{ $route.params.id }}</h4>
        <h3>{{title}}</h3>
    </div>
    <router-link  class="btn btn-info" 
                :to="{ name: 'Edit', params: { id: $route.params.id } }">Edit</router-link>
</template>

<script>
    export default {
        name: 'Detail',
        props: {
            title: {
                type: String
            }
            
        }
           
        
    }
</script>

<style lang="scss" scoped>

</style>