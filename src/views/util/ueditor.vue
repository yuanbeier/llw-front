<template>
    <basic-container>
        <h3>号码列表</h3>
        <avue-crud :option="option"
                   :page="page"
                   @row-save="handleAdd"
                   @row-update="handleUpdate"
                   @row-del="handleDel"
                   :table-loading="tableLoading"
                   @refresh-change="hadnleQuery"
                   v-model="article"
                   :data="data">
            <template slot-scope="scope" slot="contentForm">
                <avue-ueditor v-model="article.content" :options="options"></avue-ueditor>

            </template>
        </avue-crud>
    </basic-container>
</template>

<script>
    import { listOptions } from '@/const/ueditor/list'
    import {list,del,add,update} from '@/api/crud/index'
    export default {
        data() {
            return {
                tableLoading:false,
                article:{},
                queryParam:{
                },
                options: {
                    //普通图片上传
                    action: "https://avuejs.com/imgupload",
                    customConfig: {},//wangEditor编辑的配置
                    props: {
                        res: "data",
                        url: "url"
                    }
                },
                page: {},
                data: [],
                option:listOptions
            };
        },
        created() {
            this.hadnleQuery()
        },
        methods:{
            handleAdd(row,done,loading){
                add(row).then(()=>{
                    this.hadnleQuery();
                    done()
                }).catch(()=>{
                    loading = false;
                })
            },
            hadnleQuery(){
                this.tableLoading = true
                list(this.queryParam).then( response => {
                    this.tableLoading = false
                    console.log(response)
                    this.data = response.data
                })
            },
            handleUpdate(row,index,done,loading){
                console.log("handleUpdate:row:="+JSON.stringify(row))
                update(index,row).then(()=>{
                    this.hadnleQuery();
                    done()
                }).catch(()=>{
                    loading = false;
                })
            },
            handleDel(row,index){
                del(row["id"]).then(()=>{
                    this.hadnleQuery();
                }).catch(()=>{
                })
            },
        }
    };
</script>

<style>
</style>
