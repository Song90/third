<template>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column type="expand">
            <template slot-scope="props">
                <el-form label-position="right" inline class="demo-table-expand" label-width="80px">
                    <el-row v-for="(item,index) in props.row" :key="index">
                        <el-form-item :label=getLable(index)>
                            <el-input :value=item :readonly=true></el-input>
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
        name: "Channel"
    }
</script>

<style scoped>

</style>