<template>
  <div id="app">
    <div class="container">
      <AddTodo />
      <FilterTodos />
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from '../components/Todos';
import AddTodo from '../components/AddTodo';
import FilterTodos from '../components/FilterTodos';
export default {
   components: {
    Todos,
    AddTodo,
    FilterTodos
  },
  
  name: 'Home',
  data () {
    return {

    }
}
}
</script>

<style scoped>
.container{
  background: rgb(152, 196, 255);
  max-width:1100px;
  margin: auto;
  overflow:auto;
  padding: 0 2rem;
}
</style>
