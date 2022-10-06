import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions/index';

const TodoInput = () => {
  const [todoInput, setTodoInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    //edge case: input is empty string or some white spaces
    if (!todoInput.trim()) {
      setTodoInput('');
      return;
    }

    addTodo(dispatch)(todoInput);
    setTodoInput('');
  };

  return (
    <div>
      <input
        type='text'
        value={todoInput}
        onChange={(event) => setTodoInput(event.target.value)}
      />
      <button onClick={handleAddTodo} className='btn-normal'>
        Add Todo
      </button>
    </div>
  );
};

export default TodoInput;
