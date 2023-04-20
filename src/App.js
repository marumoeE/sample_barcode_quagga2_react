import Sacn from './components/pages/Scan';
import {CssVarsProvider} from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';

function App() {
  return (
    <>
      <CssVarsProvider>
        <CssBaseline/>
        <Sacn/>
      </CssVarsProvider>
    </>
  );
}

export default App;
