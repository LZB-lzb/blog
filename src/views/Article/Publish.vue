<template>
    <div>
        <el-table :data="pubtable.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column type="selection" width="55">
            </el-table-column>
            <el-table-column label="标题" prop="title">
            </el-table-column>
            <el-table-column label="最近编辑时间" prop="date">
            </el-table-column>
            <el-table-column label="作者" prop="name">
            </el-table-column>
            <el-table-column align="right">
                <template slot="header" slot-scope="scope">
                    <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
                </template>
                <template slot-scope="scope">
                    <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
        <div id="down">
            <el-button size="mini" type="danger">删除全部
            </el-button>
            <el-pagination background layout="prev, pager, next" :total="10">
            </el-pagination>
        </div>
    </div>

</template>

<script>
    import { mapState } from "vuex";
    export default {
        computed: {
            ...mapState({
                tableData:state => state.article.tableData,
            }),
            pubtable(){
                return this.tableData.filter(item=>item.pub)
            }
        },
        data() {
            return {
                search: ''
            }
        },
        methods: {
            handleEdit(index, row) {
                // console.log(index, row);
                this.$store.commit('geteditdata',row)
                this.$router.push('/edit')
            },
            handleDelete(index, row) {
                console.log(index, row);
                if(confirm('确定把该博客放进回收站？（保留三十天）'))
                this.$store.commit('torubbish',row)
            }
        },
    }
</script>

<style scoped lang="less">
    #down {
        margin: 1%;
        display: flex;
        justify-content: space-between;
    }
</style>