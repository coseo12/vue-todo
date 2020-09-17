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
export default {
  name: 'Input',
  data() {
    return {
      todoItem: '',
    };
  },
  methods: {
    setTodoItem(event) {
      this.todoItem = event.target.value;
    },
    addTodo() {
      const item = { id: new Date().getTime(), title: this.todoItem };
      this.$emit('add', item);
    },
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
