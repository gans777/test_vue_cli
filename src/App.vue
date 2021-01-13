<template>
  <div id="app">
    <TodoList :todos="todos" @delete-todo="deleteToDo" />
    
  </div>
</template>

<script>
import  TodoList from './components/TodoList.vue'

export default {
  name: 'app',
  data() {
    return {
      todos: ['ложить камень', 'вырубить наклонную ливневку во дворе', ' ливневка на улице(хотя бы примерить и основание наметить)','подмести']
    }
  },
  components: {
    TodoList
  },
  methods: {
    deleteToDo(index){
      this.todos.splice(index,1);
    }
  }
}

</script>

<style>

</style>
