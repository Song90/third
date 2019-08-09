<template>
    <div id="app">
        <Props v-bind:datas="posts"></Props>
        <Nav></Nav>
        <!--        <hello4></hello4>-->
        <!--        <hello3></hello3>-->
        <!--        <hello2></hello2>-->
    </div>

</template>

<script>

    import Props from "@/components/Props";
    import Nav from "@/components/Nav";

    export default {
        name: 'app',
        components: {
            Props,
            Nav
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
    /*.el-header {*/
    /*    background-color: #B3C0D1;*/
    /*    color: #333;*/
    /*    line-height: 60px;*/
    /*}*/

    /*.el-aside {*/
    /*    color: #333;*/
    /*}*/

    /*.el-row {*/
    /*    margin-bottom: 20px;*/

    /*&*/
    /*:last-child {*/
    /*    margin-bottom: 0;*/
    /*}*/

    /*}*/
    /*.el-col {*/
    /*    border-radius: 4px;*/
    /*}*/

    /*.bg-purple-dark {*/
    /*    background: #99a9bf;*/
    /*}*/

    /*.bg-purple {*/
    /*    background: #d3dce6;*/
    /*}*/

    /*.bg-purple-light {*/
    /*    background: #e5e9f2;*/
    /*}*/

    /*.grid-content {*/
    /*    border-radius: 4px;*/
    /*    min-height: 36px;*/
    /*}*/

    /*.row-bg {*/
    /*    padding: 10px 0;*/
    /*    background-color: #f9fafc;*/
    /*}*/
</style>
