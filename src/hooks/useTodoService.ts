import Axios, { AxiosInstance, AxiosStatic } from "axios";
import { ref } from "vue";

export default function (config: TodoServiceConfig) {
  const axios = config.axios || Axios
  const todos = ref<Array<Todo>>([])

  const fetchTodos = () => axios.get<Array<Todo>>('/todos')
    .then(response => {
      const data = response.data
      todos.value = data
      return data
    })
  
  const addTodo = (todo: Todo) => axios.post<Todo>('/todos', todo)
    .then(response => {
      const data = response.data
      todos.value = todos.value.concat(data)
      return data
    })

  return {
    todos,
    fetchTodos,
    addTodo
  }
}

export interface TodoServiceConfig {
  axios?: AxiosStatic | AxiosInstance;
}

export interface Todo {
  id: number;
  title: string;
  body: string;
  userId: number;
}