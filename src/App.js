import './styles/css/mystyles.css';
import './styles/css/extrastyling.css';

import { DataProvider } from './components/Context';
import Nav from './components/Nav/Nav';
import Header from './components/Header/Header';
import MainContainer from './components/MainContainer/MainContainer';

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Nav />
        <Header />
        <MainContainer />
      </DataProvider>
    </div>
  );
}

export default App;
