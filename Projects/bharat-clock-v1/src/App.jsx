
import './App.css'
import ClockHeading from './components/ClockHeading';
import ClockSlogan from './components/ClockSlogan';
import CurrTime from './components/CurrTime';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  return (
    <div>
    <ClockHeading></ClockHeading>
    <ClockSlogan></ClockSlogan>
    <CurrTime></CurrTime>
    </div>
  )
}

export default App;
