import Vue from 'vue'
import Router from 'vue-router'
import DemoTest from '@/components/DemoTest/Index'
import HelloWorld from '@/components/HelloWorld'
import UseComponent from '@/components/UseComponent'
import DataManage from '@/components/DataManage/Index'
import ComponentChat from '@/components/ComponentChat/Index'
import ClassStyle from '@/components/ClassStyle/Index'
import Lifecycle from '@/components/Lifecycle'
import EventHandle from '@/components/EventHandle'
import ConditionRender from '@/components/ConditionRender'
import ListRender from '@/components/ListRender'
import ComputedAttr from '@/components/ComputedAttr'
import Watcher from '@/components/Watcher'
import Ref from '@/components/Ref/ParentDemo'
import VModelValue from '@/components/VModelValue'
import SlotContent from '@/components/SlotContent/Index'
import LogicReuse from '@/components/LogicReuse/Index'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/DemoTest',
      name: 'DemoTest',
      component: DemoTest
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/UseComponent',
      name: 'UseComponent',
      component: UseComponent
    },
    {
      path: '/DataManage',
      name: 'DataManage',
      component: DataManage
    },
    {
      path: '/ComponentChat',
      name: 'ComponentChat',
      component: ComponentChat
    },
    {
      path: '/ClassStyle',
      name: 'ClassStyle',
      component: ClassStyle
    },
    {
      path: '/Lifecycle',
      name: 'Lifecycle',
      component: Lifecycle
    },
    {
      path: '/EventHandle',
      name: 'EventHandle',
      component: EventHandle
    },
    {
      path: '/ConditionRender',
      name: 'ConditionRender',
      component: ConditionRender
    },
    {
      path: '/ListRender',
      name: 'ListRender',
      component: ListRender
    },
    {
      path: '/ComputedAttr',
      name: 'ComputedAttr',
      component: ComputedAttr
    },
    {
      path: '/Watcher',
      name: 'Watcher',
      component: Watcher
    },
    {
      path: '/Ref',
      name: 'Ref',
      component: Ref
    },
    {
      path: '/VModelValue',
      name: 'VModelValue',
      component: VModelValue
    },
    {
      path: '/SlotContent',
      name: 'SlotContent',
      component: SlotContent
    },
    {
      path: '/LogicReuse',
      name: 'LogicReuse',
      component: LogicReuse
    }
  ]
})
