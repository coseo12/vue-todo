import { provide, reactive, toRefs, readonly } from 'vue';

export const TodoSymbol = Symbol('TodoSymbol');

export default {
  setup() {
    const todo = reactive({
      todoList: [],
      addTodo: item => {
        todo.todoList.push(item);
      },
      deleteTodo: id => {
        todo.todoList = todo.todoList.filter(item => item.id !== id);
      },
    });
    provide(TodoSymbol, toRefs(readonly(todo)));
  },
  render() {
    return this.$slots.default();
  },
};
