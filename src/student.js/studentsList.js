import React, { useContext, useState } from 'react';
import Students from './Students'
import { StudentsContext } from './StudentsContext';

const StudentsList = () => {
   const [Students,setStudents] = useContext(StudentsContext)
  
    return(
        <div>
    {students.map(movie =>(
        <Students name={students.name}
        age={students.age}
        id={students.id}
        education={students.education}
        gender={students.gender}
        key={students.id}
        />
    ))}
        </div>
    );
};

export default StudentsList;