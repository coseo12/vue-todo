<template>
  <div class="todo-list-wrap">
    <ul>
      <li v-for="(item, idx) in todoList" :key="idx" class="todo-list">
        {{ '★' }}: {{ item.title }}
        <button class="delete" @click="deleteDodoList(item.id)">❌</button>
      </li>
    </ul>
  </div>
</template>

<script>
import { inject } from 'vue';
import { TodoSymbol } from '../provider/TodoProvider';

export default {
  name: 'List',
  setup() {
    const {
      todoList,
      deleteTodo: { value: deleteDodoList },
    } = inject(TodoSymbol);

    return {
      todoList,
      deleteDodoList,
    };
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
