<template>
  <div>
    <h4>默认插槽</h4>
    <DefaultSlot />
    <DefaultSlot>默认插槽</DefaultSlot>
    <h4>具名插槽</h4>
    <NamedSlot>
      <template v-slot:header>
        <div>This is header content.</div>
      </template>
      <template>
        <div>This is main content.</div>
      </template>
      <template #footer>
        <div>This is footer content.</div>
      </template>
    </NamedSlot>
    <h4>作用域插槽</h4>
    <ScopeSlot>
      <template v-slot:default="slotProps">
        <div>{{ slotProps.person.name }} - {{ slotProps.person.age }} years old</div>
      </template>
      <template v-slot:age="slotProps">
        <div>{{ slotProps.person.age }} years old</div>
      </template>
    </ScopeSlot>
  </div>
</template>
<script>
import DefaultSlot from './DefaultSlot'
import NamedSlot from './NamedSlot'
import ScopeSlot from './ScopeSlot'
export default {
  name: 'SlotContent',
  components: { DefaultSlot, NamedSlot, ScopeSlot },
  data () {
    return {
    }
  }
}
</script>
