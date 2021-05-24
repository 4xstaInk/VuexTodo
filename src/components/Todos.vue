<template>
  <div>
    <h1>Todos</h1>
    <div class="legend">
        <span>Double click to mark as complete</span>
        <span>
            <span class="incomplete-box"></span> = Incomplete
        </span>
        <span>
            <span class="complete-box"></span> = Complete
        </span>
    </div>
    <div class="todos">
      <div
       class="todo" 
       v-for="todo in allTodos" 
       :key="todo.id"
       @dblclick="onDbClick(todo)"
       :class="{'is-complete': todo.completed}"
       >
        {{ todo.title }} <span @click="deleteTodo(todo.id)" class="delete-button">Delete</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Todos",
  methods: {
    ...mapActions(["fetchTodos", "deleteTodo", "updateTodo"]),
    onDbClick(todo){
        const updTodo = {
            id: todo.id,
            title: todo.title,
            completed: !todo.completed
        };
        this.updateTodo(updTodo);
    }
  },
  computed: {
    ...mapGetters(["allTodos"])
  },
  created() {
    this.fetchTodos();
  }
};
</script>

<style scoped>
.todos {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
}
.todo {
  border: 1px solid #ccc;
  background: yellowgreen;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}
.delete-button {
font-size: 10px;
  position: absolute;
  bottom: 0px;
  right: 0px;
  padding: 2px;
  background: rgb(255, 73, 73);
  cursor: pointer;
  border: 2px solid grey;
  border-radius: 5px;
}
.legend{
    display: flex;
    justify-content: space-around;
    margin-bottom: 1rem;
}
.complete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #35495e;
}
.incomplete-box{
    display: inline-block;
    width: 10px;
    height: 10px;
    background: #41b883;
}
.is-complete{
    background: hotpink;
    color: indigo;
}
@media (max-width: 500px){
    .todos{
        grid-template-columns: 1fr;
    }
}
</style>
