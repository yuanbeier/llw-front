export const listOptions = {
    dialogFullscreen:true,
    column: [
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
            prop: "name",
            span: 14,
            row: true
        },
        {
            label: "文档类容",
            prop: "content",
            formslot:true,
            span: 14,
            row: true
        },
        {
            label: "创建时间",
            prop: "createTime",
            type: "date",
            span: 14,
            row: true
        }
    ]
}
