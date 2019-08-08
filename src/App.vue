<template>
    <div id="app">
        <hello3></hello3>
        <hello2></hello2>
        <!--        <el-container style="height: 500px; border: 1px solid #eee">-->
        <!--            <el-aside width="200px" style="background-color: rgb(238, 241, 246)">-->
        <!--                <el-menu :default-openeds="['1', '3']">-->
        <!--                    <el-submenu index="1">-->
        <!--                        <template slot="title"><i class="el-icon-message"></i>导航一</template>-->
        <!--                        <el-menu-item-group>-->
        <!--                            <template slot="title">分组一</template>-->
        <!--                            <el-menu-item index="1-1">选项1</el-menu-item>-->
        <!--                            <el-menu-item index="1-2">选项2</el-menu-item>-->
        <!--                        </el-menu-item-group>-->
        <!--                        <el-menu-item-group title="分组2">-->
        <!--                            <el-menu-item index="1-3">选项3</el-menu-item>-->
        <!--                        </el-menu-item-group>-->
        <!--                        <el-submenu index="1-4">-->
        <!--                            <template slot="title">选项4</template>-->
        <!--                            <el-menu-item index="1-4-1">选项4-1</el-menu-item>-->
        <!--                        </el-submenu>-->
        <!--                    </el-submenu>-->
        <!--                    <el-submenu index="2">-->
        <!--                        <template slot="title"><i class="el-icon-menu"></i>导航二</template>-->
        <!--                        <el-menu-item-group>-->
        <!--                            <template slot="title">分组一</template>-->
        <!--                            <el-menu-item index="2-1">选项1</el-menu-item>-->
        <!--                            <el-menu-item index="2-2">选项2</el-menu-item>-->
        <!--                        </el-menu-item-group>-->
        <!--                        <el-menu-item-group title="分组2">-->
        <!--                            <el-menu-item index="2-3">选项3</el-menu-item>-->
        <!--                        </el-menu-item-group>-->
        <!--                        <el-submenu index="2-4">-->
        <!--                            <template slot="title">选项4</template>-->
        <!--                            <el-menu-item index="2-4-1">选项4-1</el-menu-item>-->
        <!--                        </el-submenu>-->
        <!--                    </el-submenu>-->
        <!--                    <el-submenu index="3">-->
        <!--                        <template slot="title"><i class="el-icon-setting"></i>导航三</template>-->
        <!--                        <el-menu-item-group>-->
        <!--                            <template slot="title">分组一</template>-->
        <!--                            <el-menu-item index="3-1">选项1</el-menu-item>-->
        <!--                            <el-menu-item index="3-2">选项2</el-menu-item>-->
        <!--                        </el-menu-item-group>-->
        <!--                        <el-menu-item-group title="分组2">-->
        <!--                            <el-menu-item index="3-3">选项3</el-menu-item>-->
        <!--                        </el-menu-item-group>-->
        <!--                        <el-submenu index="3-4">-->
        <!--                            <template slot="title">选项4</template>-->
        <!--                            <el-menu-item index="3-4-1">选项4-1</el-menu-item>-->
        <!--                        </el-submenu>-->
        <!--                    </el-submenu>-->
        <!--                </el-menu>-->
        <!--            </el-aside>-->

        <!--            <el-container>-->
        <!--                <el-header style="text-align: right; font-size: 12px">-->
        <!--                    <el-dropdown>-->
        <!--                        <i class="el-icon-setting" style="margin-right: 15px"></i>-->
        <!--                        <el-dropdown-menu slot="dropdown">-->
        <!--                            <el-dropdown-item>查看</el-dropdown-item>-->
        <!--                            <el-dropdown-item>新增</el-dropdown-item>-->
        <!--                            <el-dropdown-item>删除</el-dropdown-item>-->
        <!--                        </el-dropdown-menu>-->
        <!--                    </el-dropdown>-->
        <!--                    <span>王小虎</span>-->
        <!--                </el-header>-->

        <!--                <el-main>-->
        <!--                    <el-table :data="tableData">-->
        <!--                        <el-table-column prop="date" label="日期" width="140">-->
        <!--                        </el-table-column>-->
        <!--                        <el-table-column prop="name" label="姓名" width="120">-->
        <!--                        </el-table-column>-->
        <!--                        <el-table-column prop="address" label="地址">-->
        <!--                        </el-table-column>-->
        <!--                        <el-table-column>-->
        <!--                            <el-button type="info" @click="dialogFormVisible = true">查看详情</el-button>-->
        <!--                        </el-table-column>-->
        <!--                    </el-table>-->
        <!--                </el-main>-->
        <!--            </el-container>-->
        <!--            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">-->
        <!--                <el-form :model="form">-->
        <!--                    <el-form-item label="活动名称" :label-width="formLabelWidth">-->
        <!--                        <el-input v-model="form.name" autocomplete="off" :readonly=true size="medium"></el-input>-->
        <!--                    </el-form-item>-->
        <!--                    <el-form-item label="活动名称" :label-width="formLabelWidth">-->
        <!--                        <el-input v-model="form.name" autocomplete="off" :readonly=true size="medium"></el-input>-->
        <!--                    </el-form-item>-->
        <!--                </el-form>-->
        <!--                <div slot="footer" class="dialog-footer">-->
        <!--                    <el-button @click="dialogFormVisible = false">取 消</el-button>-->
        <!--                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
        <!--                </div>-->
        <!--            </el-dialog>-->
        <!--          <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->

        <!--          <el-dialog title="收货地址" :visible.sync="dialogFormVisible">-->
        <!--            <el-form :model="form">-->
        <!--              <el-form-item label="活动名称" :label-width="formLabelWidth">-->
        <!--                <el-input v-model="form.name" autocomplete="off"></el-input>-->
        <!--              </el-form-item>-->
        <!--              <el-form-item label="活动区域" :label-width="formLabelWidth">-->
        <!--                <el-select v-model="form.region" placeholder="请选择活动区域">-->
        <!--                  <el-option label="区域一" value="shanghai"></el-option>-->
        <!--                  <el-option label="区域二" value="beijing"></el-option>-->
        <!--                </el-select>-->
        <!--              </el-form-item>-->
        <!--            </el-form>-->
        <!--            <div slot="footer" class="dialog-footer">-->
        <!--              <el-button @click="dialogFormVisible = false">取 消</el-button>-->
        <!--              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
        <!--            </div>-->
        <!--          </el-dialog>-->
        <!--        </el-container>-->
        <!--            <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>-->

        <!--            <el-dialog title="收货地址" :visible.sync="dialogFormVisible">-->
        <!--                <el-form :model="form">-->
        <!--                    <el-form-item label="活动名称" :label-width="formLabelWidth">-->
        <!--                        <el-input v-model="form.name" autocomplete="off"></el-input>-->
        <!--                    </el-form-item>-->
        <!--                    <el-form-item label="活动区域" :label-width="formLabelWidth">-->
        <!--                        <el-select v-model="form.region" placeholder="请选择活动区域">-->
        <!--                            <el-option label="区域一" value="shanghai"></el-option>-->
        <!--                            <el-option label="区域二" value="beijing"></el-option>-->
        <!--                        </el-select>-->
        <!--                    </el-form-item>-->
        <!--                </el-form>-->
        <!--                <div slot="footer" class="dialog-footer">-->
        <!--                    <el-button @click="dialogFormVisible = false">取 消</el-button>-->
        <!--                    <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
        <!--                </div>-->
        <!--            </el-dialog>-->
    </div>

</template>

<script>

    import HelloWorld from './components/HelloWorld';
    import Hello3 from "@/components/Hello3";
    import Hello2 from "@/components/Hello2";

    export default {
        name: 'app',
        components: {
            HelloWorld,
            Hello3,
            Hello2
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
