<template>
  <div>
    <form @submit.prevent="addTodoList">
      <div class="input-wrap">
        <input class="add-input" type="text" ref="todoItem" />
        <button class="add-btn">ADD</button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref, inject } from 'vue';
import { TodoSymbol } from '../providers/TodoProvider';

export default {
  name: 'Input',
  setup() {
    const todoItem = ref(null);
    const { addTodo } = inject(TodoSymbol);

    const addTodoList = () => {
      const item = { id: new Date().getTime(), title: todoItem.value.value };
      todoItem.value.value = '';
      addTodo.value(item);
    };

    return {
      todoItem,
      addTodoList,
    };
  },
};
</script>

<style scoped>
.add-input {
  outline: none;
  width: 200px;
  border: 1px solid #2ecc71;
  padding: 10px;
  margin: 10px;
}
.add-btn {
  outline: none;
  background: #2ecc71;
  border: 0;
  color: #fff;
  font-weight: 600;
  font-size: 15px;
  padding: 9px 20px;
  cursor: pointer;
}
.input-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
