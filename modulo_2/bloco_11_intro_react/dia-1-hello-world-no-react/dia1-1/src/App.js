import './App.css';

const Task = (value) => {
  const tasks = ['Exame','Contadora','Curtida insta ropi','Estudar'];
  return (
    <ul>
      {tasks.map((task)=> <li>{task}</li>)}
    </ul>
  );
}

function App() {
  return (
    <Task />
  );
}

export default App;
