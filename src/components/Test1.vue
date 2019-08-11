<template>
    <div>
        <el-container style="height: 100%; border: 1px solid #eee">
            <el-aside width="200px">
                <el-row class="tac">
                    <el-col>
                        <h5>测试系统</h5>
                        <el-menu
                                class="el-menu-vertical-demo"
                                @open="handleOpen"
                                @close="handleClose">
                            <el-submenu index="1">
                                <template slot="title">
                                    <i class="el-icon-menu"></i>
                                    <span>管理员管理</span>
                                </template>
                                <el-menu-item index="1-1" :click="list_upBranch_manager">
                                    <router-link to="/upBranch_manager">分公司管理员</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-2">
                                    <router-link to="/channel_manager">渠道方管理员</router-link>
                                </el-menu-item>
                                <el-menu-item index="1-3">
                                    <router-link to="/enterprise_manager">开发商管理员</router-link>
                                </el-menu-item>
                            </el-submenu>
                            <el-menu-item index="2">
                                <i class="el-icon-menu"></i>
                                <span slot="title">导航二</span>
                            </el-menu-item>
                            <el-menu-item index="3" disabled>
                                <i class="el-icon-document"></i>
                                <span slot="title">导航三</span>
                            </el-menu-item>
                            <el-menu-item index="4">
                                <i class="el-icon-setting"></i>
                                <span slot="title">导航四</span>
                            </el-menu-item>
                        </el-menu>
                    </el-col>
                </el-row>
            </el-aside>
            <el-main>
                <router-view></router-view>
            </el-main>
        </el-container>
    </div>
</template>

<script>
    export default {
        name: "Test1",
        methods: {
            handleOpen(key, keyPath) {
                window.console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                window.console.log(key, keyPath);
            },
            list_upBranch_manager() {

            }, list_channel_manager() {

            }, list_enterprise_manager() {

            }
        }
    }
</script>

<style scoped>

</style>