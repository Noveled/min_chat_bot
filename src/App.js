import './App.css';
import Header from './components/Header';
import Chat from './components/Chat';

function App() {
  return (
    <div className="h-fit flex-col justify-between mx-4 my-3">
      <Header />
      <Chat />
    </div>
  );
}

export default App;
