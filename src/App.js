import './App.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';
import Citas from './pages/CitasPage'

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Citas/>
      </Provider>
    </div>
  );
}

export default App;
