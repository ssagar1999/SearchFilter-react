
import './App.css';
import Counter from './Counter';
import Filter from './Filter';

function App() {
  return (
    <div className="App">
      
   yo

   <Counter />
   <Filter arr={['goku', 'gohan', 'vegeta', 'beerus']}/>
   <Filter arr={['tooth brush', 'tooth paste', 'shoes', 'shirt']}/>
    </div>
  );
}

export default App;
