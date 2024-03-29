import { Provider } from 'react-redux';
import './App.css';
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import ItemContainer from './components/ItemContainer';
import NewCakeContainer from './components/NewCakeContainer.js';
import UserContainer from './components/UserContainer';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
        <HooksCakeContainer/>
        <IceCreamContainer/>
        <NewCakeContainer/>
        <ItemContainer cake/>
        <ItemContainer/>
        <UserContainer/>
      </div>
    </Provider>
  );
}

export default App;
