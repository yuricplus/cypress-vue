<template>
  <div>
    <h1> To Do App</h1>
    <div>
      <input type="text" v-model="inputValue">
      <button @click="addTodo()" class="btn-add">Add</button>
    </div>
    <AlertComponent :show="showError" :msg="error" />
    <section>
      <div v-for="item in cards" :key="item?.id">
        <Card-component
            :name="item?.name"
            :id="item?.id"
            @remove="remove"
        ></Card-component>
      </div>
    </section>
  </div>
</template>

<script>
import CardComponent from "@/components/Card-component";
import AlertComponent from "@/components/Alert-component";

export default {
  name: 'App',
  components: {
    CardComponent,
    AlertComponent
  },
  data() {
    return {
      cards: [],
      inputValue: '',
      error: '',
      showError: false
    }
  },
  methods: {
    addTodo(){
      if(this.inputValue === '') {
        this.showError = true
        this.setMessageError('Please, set text');
        return setTimeout(() => this.clearError(), 2000);
      }
      const argument = {
        name: this.inputValue,
        id: Math.random()
      }
      const cardList = this.cards
      cardList.push(argument);
      this.cards = cardList;
      this.clearInput()
    },

    remove(id){
      const list = this.cards.filter(item => item.id !== id);
      this.cards = list;
    },

    clearInput(){
      this.inputValue = '';
    },

    setMessageError(text) {
      this.error = text;
    },

    clearError() {
      this.setMessageError('');
      this.showError = false
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

input {
  padding: 5px;
  margin: 10px;
  border: 1px solid #eaeaea;
  border-radius: 4px;
}

button {
  padding: 5px;
  background-color: #eaeaea;
  border: 2px solid #eaeaea;
  font-weight: bold;
  border-radius: 4px;
}
</style>
