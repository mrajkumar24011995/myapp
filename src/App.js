import './App.css';
import Base from './Base/Base';
import { StudentDetails } from './Components/students';

function App() {
  return (
    <div className="App">
      <Base
      title = "Batch Details"
      description = "All students details"
      >
     <StudentDetails/>

      </Base>

    </div>
  );
}

export default App;
