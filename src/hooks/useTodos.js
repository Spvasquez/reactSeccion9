import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const init=()=>{
    return JSON.parse(localStorage.getItem('todos') ) ||[]
}
export const useTodos=(initialState=[])=>{
    const [todos, dispatch] = useReducer(todoReducer, initialState,init);
    useEffect(() => {
      localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    
    const handleNewTodo=(todo)=>{
      const action={
          type:'Add Todo',
          payload:todo
      }
      dispatch(action)
    }
    const handleDeleteTodo=(id)=>{
      dispatch({
          type:'Delete Todo',
          payload:id
      });
    }
    const handleToggleTodo=(id)=>{
      dispatch({
          type:'Toggle Todo',
          payload:id
      })
    }
    //const todosCount=todos.length;
    //const pendingTodosCount=todos.filter(todo=>!todo.done);
    return{
        todos,
        todosCount:todos.length,
        pendientes:todos.filter(todo=>!todo.done).length,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo
    }
}