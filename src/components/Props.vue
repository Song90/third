<template>
    <div>
        <li v-for="data in datas" :key="data.id">{{data.id}}</li>
    </div>
</template>

<script>
    export default {
        name: "Props",
        props: {
            title: String,
            datas: Array
        }
    }
</script>

<style scoped>

</style>