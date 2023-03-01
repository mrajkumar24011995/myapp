import React,{ Component, useState } from "react";
import Students from "./Students";

const AddStudents = () =>{
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [education, setEducation] = useState("")
    const [gender, setGender] = useState("")

    const updateName = (e) => {
        setName(e.target.value)
    }
    const updateAge = (e) => {
        setAge(e.target.value)
    }
    const updateEducation = (e) => {
        setEducation(e.target.value)
    }
    const updateGender = (e) => {
        setGender(e.target.value)
    }
    return(
        <form onSubmit={}>
            <input type="text" name="name" onChange={updateName}/>
            <input type="text" name="age" onChange={updateAge}/>
            <input type="text" name="education" onChange={updateEducation}/>
            <input type="text" name="gender" onChange={updateGender}/>
            <button>
                onSubmit
            </button>

        </form>
    )

    }
export default AddStudents