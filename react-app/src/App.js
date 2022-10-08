import './App.css';
import { store } from './actions/store';
import {Provider} from 'react-redux'
import Dcandidates from './components/DCandidates';
import {Container} from '@material-ui/core'

function App() {
  return (
<Provider store={store}>
    <Container maxWidth="lg"><Dcandidates/></Container>
</Provider> 


  );
}

export default App;
