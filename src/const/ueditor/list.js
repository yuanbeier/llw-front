export const listOptions = {
    dialogFullscreen:true,
    column: [
        {
            label: "id",
            prop: "id",
            span: 14,
            row: true,
            hide: true,
            editDisplay:false,
            addDisplay:false
        },
        {
            label: "标题",
            prop: "title",
            span: 14,
            row: true
        },
        {
            label: "副标题",
            prop: "subTitle",
            span: 14,
            row: true
        },
        {
            label: "创建人",
            prop: "createName",
            span: 14,
            row: true,
            editDisplay:false,
            addDisplay:false
        },
        {
            label: "文档类容",
            prop: "content",
            formslot:true,
            span: 14,
            hide: true
        },
        {
            label: "创建时间",
            prop: "createTime",
            type: "date",
            span: 14,
            editDisplay:false,
            addDisplay:false
        },
        {
            label: "排序号",
            prop: "orderId",
            span: 14,
            row: true
        },
    ]
}
