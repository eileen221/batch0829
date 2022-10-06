import TodoHeader from './components/TodoHeader';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

import './App.css';

// const sampleData = [
//   {
//     content: 'some todos',
//     isCompleted: false,
//   },
//   {
//     content: 'some todos',
//     isCompleted: true,
//   },
// ];

function App() {
  return (
    <div className='App'>
      <TodoHeader headerTextContent='Todo' />
      <hr />
      <TodoInput />
      <TodoList />
    </div>
  );
}

export default App;
