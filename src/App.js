import './App.css';
import StudentsList from './StudentsList'
import Nav from './Nav'
import {StudentsProvider} from'./StudentsContext'
import AddStudents from './student.js/AddStudents';


function App() {
 
  return (
    <StudentsProvider>
    <div className="App">
      <Nav/>
      <StudentsList/>
      <AddStudents/>
       </div>
       </StudentsProvider>
   
  );
}

export default App;