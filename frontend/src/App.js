
import List from './components/List'
import Todo from './components/Todo'

import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


function App() {

  return (
    <div className="App">
      <div className="grid">
        <div className="col">
          <List />
        </div>

        <div className="col">
          <Todo />
        </div>
      </div>
    </div>
  );
}

export default App;
