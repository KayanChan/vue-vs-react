import HelloWorld from '../components/HelloWorld'
import UseComponent from '../components/UseComponent'
import DataManage from '../components/DataManage/Index'
import ComponentChat from '../components/ComponentChat/Index'
import DemoTest from '../components/DemoTest/Index'
import ClassStyle from '../components/ClassStyle/Index'
import Lifecycle from '../components/Lifecycle/Index'
import EventHandle from '../components/EventHandle'
import ConditionRender from '../components/ConditionRender'
import ListRender from '../components/ListRender'
const routes = [
    {
        name: 'DemoTest',
        path: '/DemoTest',
        component: DemoTest
    },
    {
        name: 'HelloWorld',
        path: '/HelloWorld',
        component: HelloWorld
    },
    {
        name: 'UseComponent',
        path: '/UseComponent',
        component: UseComponent
    },
    {
        name: 'DataManage',
        path: '/DataManage',
        component: DataManage
    },
    {
        name: 'ComponentChat',
        path: '/ComponentChat',
        component: ComponentChat
    },
    {
        name: 'ClassStyle',
        path: '/ClassStyle',
        component: ClassStyle
    },
    {
        name: 'Lifecycle',
        path: '/Lifecycle',
        component: Lifecycle
    },
    {
        name: 'EventHandle',
        path: '/EventHandle',
        component: EventHandle
    },
    {
        name: 'ConditionRender',
        path: '/ConditionRender',
        component: ConditionRender
    },
    {
        name: 'ListRender',
        path: '/ListRender',
        component: ListRender
    }
]
export default routes