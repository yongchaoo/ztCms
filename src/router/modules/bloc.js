/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const blocRouter = {
    path: '/bloc',
    component: Layout,
    redirect: '/bloc/index',
    name: 'Bloc',
    meta: {
            title: 'Bloc',
            icon: 'table'
    },
    children: [
    {
        path: 'index',
        component: () => import('@/views/bloc/index'),
        name: 'BlocManage',
        meta: { title: 'BlocManage' }
    },
    {
        path: 'subBrand',
        component: () => import('@/views/bloc/brand'),
        name: 'subBrand',
        meta: { title: 'subBrand' }
    }
    // {
    //   path: 'add',
    //   component: () => import('@/views/bloc/add'),
    //   name: 'addBloc',
    //   meta: { title: 'addBloc' }
    // },
    // {
    //     path: 'edit',
    //     component: () => import('@/views/bloc/add'),
    //     name: 'editBloc',
    //     meta: { title: 'editBloc' }
    // }
    ]
}
export default blocRouter
