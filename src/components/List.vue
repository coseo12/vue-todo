<template>
  <div class="todo-list-wrap">
    <ul>
      <li v-for="(item, idx) in getTodoList" :key="idx" class="todo-list">
        {{ '★' }}: {{ item.title }}
        <button class="delete" @click="deleteTodo(item.id)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'List',
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      todoList: [],
    };
  },
  computed: {
    getTodoList(state) {
      return state.todoList;
    },
  },
  watch: {
    item: function(value) {
      this.todoList.push(value);
    },
  },
  methods: {
    deleteTodo(id) {
      this.todoList = this.todoList.filter(a => a.id !== id);
    },
  },
};
</script>

<style scoped>
ul,
li {
  list-style: none;
}
.todo-list-wrap {
  display: flex;
  align-self: flex-start;
  margin: 0 60px;
}
.todo-list {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0;
  color: #2ecc71;
}
.delete {
  margin: 0 10px;
  outline: none;
  border: 0;
  border: 1px solid #2ecc71;
  background: #fff;
  cursor: pointer;
}
</style>
