<template>
  <div class="todo-wrap">
    <Header />
    <Input @add="addTodo" />
    <List :item="item" />
  </div>
</template>

<script>
import Header from './components/Header';
import Input from './components/Input';
import List from './components/List';

export default {
  name: 'App',
  components: { Header, Input, List },
  data() {
    return {
      item: '',
    };
  },
  methods: {
    addTodo(item) {
      this.item = item;
    },
  },
};
</script>

<style>
* {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
body {
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo-wrap {
  width: 500px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}
</style>
