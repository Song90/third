<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="right" inline class="demo-table-expand" label-width="80px">
                    <el-row v-for="(value,key,index) in props.row" :key="index">
                        <el-form-item :label=getLable(key,index)>
                            <el-input :value=value :readonly=true></el-input>
                        </el-form-item>
                    </el-row>
                </el-form>
            </template>
        </el-table-column>
        <el-table-column
                label="商品 ID"
                prop="id">
        </el-table-column>
        <el-table-column
                label="商品名称"
                prop="name">
        </el-table-column>
        <el-table-column
                label="描述"
                prop="desc">
        </el-table-column>
    </el-table>
</template>
<script>
    export default {
        name: "Hello3",
        methods:{
            onSubmit() {
                alert("submit");
            },
            getLable(key,index){
                window.console.log(index,key)
                if(key === "id"){
                    return "编号";
                }else if(key === 'name'){
                    return "名称";
                }else if(key === 'category'){
                    return '菜系';
                }
                return '其它';
            }
        },
        data() {
            return {
                tableData: [{
                    id: '12987122',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987123',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987125',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }, {
                    id: '12987126',
                    name: '好滋好味鸡蛋仔',
                    category: '江浙小吃、小吃零食',
                    desc: '荷兰优质淡奶，奶香浓而不腻',
                    address: '上海市普陀区真北路',
                    shop: '王小虎夫妻店',
                    shopId: '10333'
                }]
            }
        }
    }
</script>

<style scoped>
    /*.demo-table-expand {*/
    /*    font-size: 0;*/
    /*}*/

    .demo-table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .demo-table-expand .el-form-item {
        margin-right: 0;
        /*margin-bottom: 0;*/
        width: 50%;
    }
</style>