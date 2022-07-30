<template>
  <div class="card">
    <div class="card-header">
      <span>{{name}}</span>
      <button @click="removeCard(id)" class="btn-remove">x</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'card-component',
    props: {
      name: {
        type: String,
        require: true
      },
      id: {
        type: Number,
        require: false
      }
    },
    data(){
      return {}
    },
    methods: {
      removeCard(id){
        this.$emit('remove', id);
      }
    }
  }
</script>
<style>
  .card {
    border: 1px solid #EAEAEA;
    max-width: 100%;
    width: 300px;
    margin: 10px auto;
    height: 40px;
    font-size: 22px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }

  .card-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .card-header button {
    background-color: transparent;
    border: none;
    font-weight: bolder;
    font-size: 22px;
    color: red;
    cursor: pointer;
  }
</style>
