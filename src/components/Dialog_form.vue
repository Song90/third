<template>
    <div>
        <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>

        <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
            <el-form label-position="right" inline class="demo-table-expand" label-width="80px" :model="form">
                <el-row v-for="(value,key,index) in form" :key="index">
                    <el-form-item :label=getLable(key,index)>
                        <el-input :value=value :readonly=true></el-input>
                    </el-form-item>
                </el-row>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "Dialog_form",
        methods:{
            onSubmit() {
                alert("submit");
            },
            getLable(key,index){
                window.console.log(index,key);
                if(key === "region"){
                    return "地区";
                }else if(key === 'name'){
                    return "名称";
                }else if(key === 'category'){
                    return '菜系';
                }
                return '其它';
            }
        },
        data(){
            return {
                dialogFormVisible: false,
                form: {
                    name: '小明',
                    region: '上海',
                    date1: '123',
                    date2: '234',
                    delivery: false,
                    type: ["h","y"],
                    resource: '',
                    desc: '哈哈',
                    file1:'哈哈',
                    fild2:'哈哈',
                    fild3:'哈哈',
                    fild4:'哈哈',
                    fild5:'哈哈',
                    fild6:'哈哈',
                    fild7:'哈哈',
                    fild8:'哈哈'
                },
                formLabelWidth: '120px'
            }
        }
    }
</script>

<style scoped>

</style>