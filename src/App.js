import './styles/css/mystyles.css';

import { DataProvider } from './components/Context';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filter';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Nav />
        <Header />
        <Filters />
      </DataProvider>
    </div>
  );
}

export default App;
