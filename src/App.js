import './App.css';
import { Provider } from 'react-redux';
import configureStore from './redux/store/configureStore';

const store = configureStore();

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <h1>Citas</h1>
      </Provider>
    </div>
  );
}

export default App;
