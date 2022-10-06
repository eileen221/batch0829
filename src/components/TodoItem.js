import { useDispatch } from 'react-redux';
import { modTodo, delTodo } from '../actions/index';

import './styles/todo-item.css';

// user dispatch an action => reducer receive the action and change the prev state by type and payload(optional) => updated state

const TodoItem = ({ content, isCompleted, index }) => {
  //1. trigger double click event
  //2. setTodos change state accordingly
  //3. updated todos will be passed into TodoItem

  const dispatch = useDispatch();
  return (
    <li className='todo-item'>
      <span
        onDoubleClick={() => modTodo(dispatch)(index)}
        className={isCompleted ? 'task-done' : 'task-imcompleted'}
      >
        {content}
      </span>
      <button className='btn-normal' onClick={() => delTodo(dispatch)(index)}>
        Delete
      </button>
    </li>
  );
};

export default TodoItem;
