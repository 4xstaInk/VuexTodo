import axios from 'axios';

const state = {
    todos: [
        {
            id:1,
            title: 'Todo One'
        },
        {
            id:2,
            title: 'Todo Two'
        },
        {
            id:3,
            title: 'Todo Three'
        },
        {
            id:4,
            title: 'Todo four'
        },
        {
            id:5,
            title: 'Todo five'
        }
        
    ]
};

const getters = {
    allTodos: state => state.todos
};

const actions = {
    async fetchTodos({ commit }){
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/todos'
        );
        commit('setTodos',response.data);
        console.log(response.data) 
    },
    async addTodo({ commit }, title){
        const response = await axios.post(
            'https://jsonplaceholder.typicode.com/todos', {title, completed: false});

        commit('newTodo',response.data);
    },
    async deleteTodo({ commit }, id){
        await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('removeTodo', id);
    },
    async filterTodos({ commit }, e){
        // get selected number 
        const limit = parseInt(
            e.target.options[e.target.options.selectedIndex].innerText
        );

       const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos/${limit}`
       )
       commit('setTodos', response.data);
    },
    async updateTodo({ commit }, updTodo){
        const response = await axios.put(
            `https://jsonplaceholder.typicode.com/todos/${updTodo.id}`,
            updTodo
        );
        commit('updateTodo', response.data);
    }

};

const mutations = {
  setTodos: (state, todos) => (state.todos = todos),

  newTodo: (state, todo) => state.todos.unshift(todo),

  removeTodo: (state, id) => (state.todos = state.addTodo.filter(todo => todo.id !== id)),

  updateTodo: (state, updTodo) => {
      const index = state.todos.findIndex(todo => todo.id === updTodo.id);
      if (index !== -1) {
          state.todos.splice(index, 1, updTodo);
      }
  }
};

export default {
    state,
    getters,
    actions,
    mutations
};