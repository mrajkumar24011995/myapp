import { render } from 'reacr-dom';
import React, { createContext, useState } from "react";

export const StudentsContext = createContext()

export const StudentsProvider = (props) => {
    const [students,StudentsList] = useState([
       { 
        id: "1",
       name: "Ajith",
       age: "39",
       education:"master",
       gender:"male",
    },
    {
        id: "2",
        name: "vijay",
        age: "38",
        education:"master",
        gender:"male",
    },
    {
        id: "3",
        name: "suriya",
        age: "37",
        education:"master",
        gender:"male",
    },
    ]);
    return(
    <StudentsContext.Provider
    value={[students,setStudents]}>
      
     {props.children}
        </StudentsContext.Provider>
    );
}
