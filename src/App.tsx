import './App.css';
import BasicLayout from './components/layouts/BasicLayout';
import Login from './components/pages/Login/Login';

function App() {
  return (
    <div className="relative w-full flex flex-col justify-start App">
      <BasicLayout Element={Login} />
    </div>
  );
}

export default App;
