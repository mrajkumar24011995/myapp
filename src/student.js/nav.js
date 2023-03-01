import React, { useState, useContext } from "react";
import { StudentsContext } from "./StudentsContext";

const Nav = () => {
    const [students,setStudents] = useContext(StudentsContext)
    return (
        <nav>
            <h2>StudentsData</h2>
            <h2>No of Students{students.length}</h2>
        </nav>
    );
};

export default Nav;