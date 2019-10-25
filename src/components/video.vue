<template>
  <div class="hello">
    {{ msg }}
    <button @click="onClick">click me2</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    onClick() {
      this.$emit('toParent', '2222')
    }
  }
}
</script>

