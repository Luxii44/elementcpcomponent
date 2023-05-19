export const sidebars={
    // '/api/': getApiSidebar(),
    '/components/': getComponentsSidebar(),
    '/guide/': getGuideSidebar()
}

function getApiSidebar() {
    return [
    {
        text: '功能',
        collapsible: true,
        items: [
        {
            text: '已实现',
            link: '/api/'
        },
        ]
    }
    ]
}

function getComponentsSidebar() {
    return [
    {
        text: '组件',
        items: [
        {
            text: 'WmUpload 上传',
            link: '/components/wmupload'
        },
        {
            text: 'Tabs 标签页',
            link: '/components/tabs'
        },
        {
            text: 'Modal 对话框',
            link: '/components/modal'
        },
        {
            text: 'Tag 标签',
            link: '/components/tag'
        },
        {
            text: 'Vue 引用组件',
            link: '/components/vue'
        },
        {
            text: 'Vue Script',
            link: '/components/vue-script'
        }
        ]
    }
    ]
}

function getGuideSidebar() {
    return [
    {
        text: '指南',
        items: [
        {
            text: '安装',
            link: '/guide/installation'
        },
        {
            text: '快速上手',
            link: '/guide/quickstart'
        }
        ]
    }
    ]
}

// function getSidebar() {
//     return [
//         {
//             text:"Form",
//             collapsable: false,
//             children: [
//             {
//                 text:'Upload',
//                 children: [
//                     { text: '基础', link: '/examples/upload' },
//                     { text: '进阶', link: '/interview/HTML/advanced' },
//                 ],
//                 sidebarDepth:3
//             }
//             ]
//         },
//         {
//             text:'CSS',
//             children:[
//                 { text: '基础', link: '/CSS/' },
//                 { text: '进阶', link: '/CSS/advanced' },
//             ]
//         },
//         {
//         text:'Javascript',
//         children:[
//             { text: '基础', link: '/Javascript/' },
//             { text: '进阶', link: '/Javascript/advanced' },
//         ]
//         },
//         {
//         text:'Vue',
//         children:[
//             { text: '基础', link: '/Vue/' },
//             { text: '进阶', link: '/Vue/advanced' },
//         ]
//         },
//         {
//         text:'浏览器',
//         children:[
//             { text: '基础', link: '/Vue/' },
//             { text: '进阶', link: '/Vue/advanced' },
//         ]
//         },
//         {
//         text:'网络',
//         children:[
//             { text: '基础', link: '/Network/' },
//             { text: '进阶', link: '/Network/advanced' },
//         ]
//         },
//         {
//         text:'安全',
//         children:[
//             { text: '基础', link: '/Security/' },
//             { text: '进阶', link: '/Security/advanced' },
//         ]
//         },
//         {
//         text:'面经',
//         children:[
//             { text: '基础', link: '/Experience/' },
//             { text: '进阶', link: '/Experience/advanced' },
//         ]
//         },
//     ]
// }
