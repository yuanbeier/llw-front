<template>
    <basic-container>
        <h3>号码列表</h3>
        <avue-crud :option="option"
                   :page="page"
                   :data="data">
            <template slot-scope="scope" slot="contentForm">
                <avue-ueditor v-model="scope.value" :options="options"></avue-ueditor>

            </template>
        </avue-crud>
    </basic-container>
</template>

<script>
    import { listOptions } from '@/const/ueditor/list'
    export default {
        data() {
            return {
                article:{},
                options: {
                    //普通图片上传
                    action: "https://avuejs.com/imgupload",
                    customConfig: {},//wangEditor编辑的配置
                    props: {
                        res: "data",
                        url: "url"
                    }
                },
                page: {
                    total: 122
                },
                data: [
                    {
                        title: "title2",
                        subTitle: "subtitle2",
                        name: "123",
                        content: "你好",
                        createTime: "2019-01-01",
                    },
                    {
                        title: "title3",
                        subTitle: "subtitle2",
                        name: "123",
                        content: "你好",
                        createTime: "2019-01-01",
                    },

                    {
                        title: "title4",
                        subTitle: "subtitle2",
                        name: "123",
                        content: "你好",
                        createTime: "2019-01-01",
                    },
                    {
                        title: "title6",
                        subTitle: "subtitle2",
                        name: "123",
                        content: "你好",
                        createTime: "2019-01-01",
                    }
                ],
                option:listOptions
            };
        }
    };
</script>

<style>
</style>
