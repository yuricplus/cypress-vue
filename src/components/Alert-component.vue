<template>
  <div v-if="show" class="container">
    <span class="error-msg">{{ msg }}</span>
  </div>
</template>
<script>
export default {
  name: 'alert-component',
  props: {
    msg: {
      type: String,
      require: false
    },
    show: {
      type: Boolean,
      require: true
    }
  },
}
</script>
<style>
.container {
  max-width: 200px;
  width: 100%;
  background-color: #f69d9d;
  margin: auto;
  border-radius: 4px;
  padding: 5px;
}
.container .error-msg {
  color: #c23535;
  font-weight: bold;
}
</style>