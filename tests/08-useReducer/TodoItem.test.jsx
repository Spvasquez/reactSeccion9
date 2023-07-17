import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <Todoitem/>', () => { 
    const todo={
        id:1,
        description:'Gema de la mente',
        done:false
    }
    const onDeleteTodoMock=jest.fn();
    const onToggleTodoMock=jest.fn();
    beforeEach(()=> jest.clearAllMocks());
    
    test('Debe mostrar el todo pendiente', () => { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const liElement=screen.getByRole('listitem');
        expect(liElement.className).toBe('list-group-item d-flex justify-content-between')
        const spanElement=screen.getByLabelText('span')
        expect(spanElement.className).not.toContain('text-decoration-line-through')
        expect(spanElement.textContent).toEqual(todo.description)
     });


    test('Debe mostrar el todo completado', () => { 
        todo.done=true;
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const spanElement=screen.getByLabelText('span')
        expect(spanElement.className).toContain('text-decoration-line-through')
        expect(spanElement.textContent).toEqual(todo.description)

     });
     
    test('Debe llamar el ToggleTodo al hacer doble click', () => { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const spanElement=screen.getByLabelText('span')
        fireEvent.doubleClick(spanElement);
        expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
     });

    test('Debe llamar el deleteTodo al hacer click', () => { 
        render(
            <TodoItem 
                todo={todo} 
                onToggleTodo={onToggleTodoMock} 
                onDeleteTodo={onDeleteTodoMock} 
            />
        );
        const buttonElement=screen.getByLabelText('btnBorrar')
        fireEvent.click(buttonElement);
        expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
     });
 })