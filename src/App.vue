<template>
    <div id="app">
        <Test1></Test1>
        <!--        <Props v-bind:datas="posts"></Props>-->
        <!--        <Nav></Nav>-->
        <!--        <hello4></hello4>-->
        <!--        <hello3></hello3>-->
        <!--        <hello2></hello2>-->
    </div>
</template>

<script>
    // import Props from "@/components/Props";
    // import Nav from "@/components/Nav";

    import Test1 from "./components/Test1";
    export default {
        name: 'app',
        components: {Test1},
        // computed: {
        //     username () {
        //         // 我们很快就会看到 `params` 是什么
        //         return this.$route.params.username
        //     }
        // },
        methods: {
            goBack () {
                window.history.length > 1
                    ? this.$router.go(-1)
                    : this.$router.push('/')
            }
        },
        data() {
            const item = {
                date: '2016-05-02',
                name: '王小虎',
                address: '上海市普陀区金沙江路 1518 弄',
                hobby: '健身,旅游'
            };
            return {
                tableData: Array(20).fill(item),
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '80px',
                input: '',
                input1: '',
                input2: '',
                input3: '',
                input4: '',
                posts: [
                    {id: 1, title: 'My journey with Vue'},
                    {id: 2, title: 'Blogging with Vue'},
                    {id: 3, title: 'Why Vue is so fun'}
                ]
            }
        }
    }
</script>

<style>
</style>
