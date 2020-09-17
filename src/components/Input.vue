<template>
  <div>
    <form @submit.prevent="addTodo">
      <div class="input-wrap">
        <input
          class="add-input"
          type="text"
          :value="todoItem"
          @change="setTodoItem"
        />
        <button class="add-btn">
          ADD
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'Input',
  setup(props, { emit }) {
    const todoItem = ref('');

    function setTodoItem(event) {
      todoItem.value = event.target.value;
    }

    function addTodo() {
      const item = { id: new Date().getTime(), title: todoItem.value };
      todoItem.value = '';
      emit('add', item);
    }

    return {
      todoItem,
      addTodo,
      setTodoItem,
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
