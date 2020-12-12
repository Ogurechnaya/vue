<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <ol>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ol>
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import useAxios from "@/plugins/axios/hook";
import useTodoService from "@/hooks/useTodoService";

export default defineComponent({
  name: "Home",
  setup() {
    const axios = useAxios();
    const { todos, fetchTodos } = useTodoService({ axios });

    onBeforeMount(async () => {
      await fetchTodos();
    });

    return {
      todos,
    };
  },
});
</script>
