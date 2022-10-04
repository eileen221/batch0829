import { useState } from 'react';

const TodoInput = ({ setTodos }) => {
  const [todoInput, setTodoInput] = useState('');
  const addTodo = () => {
    //edge case: input is empty string or some white spaces
    if (!todoInput.trim()) {
      setTodoInput('');
      return;
    }

    const newTodo = {
      content: todoInput,
      isCompleted: false,
    };

    setTodos((prev) => {
      return [...prev, newTodo];
    });
    setTodoInput('');
  };

  return (
    <div>
      <input
        type='text'
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button onClick={addTodo} className='btn-normal'>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
