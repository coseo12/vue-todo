import { provide, reactive, toRefs, readonly } from 'vue';

export const TodoSymbol = Symbol('TodoSymbol');

const useTodo = () => {
  const todo = reactive({
    todoList: [],
    addTodo: item => {
      todo.todoList.push(item);
    },
    deleteTodo: id => {
      todo.todoList = todo.todoList.filter(item => item.id !== id);
    },
  });
  return todo;
};

export default {
  setup() {
    const todo = useTodo();
    provide(TodoSymbol, toRefs(readonly(todo)));
  },
  render() {
    return this.$slots.default();
  },
};
