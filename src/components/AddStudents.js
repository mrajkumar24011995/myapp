

import React from "react";
import {data} from "../Data/data"

export function StudentDetails () {

    const [studentsData, setStudents] = useState(data)
    const [id, setId] = useState("")
    const [name,setName] = useState("")
    const [batch, setBatch] = useState("")
    const [gender,setGender] = useState("")
    const [experience,setExperience] = useState("")

    //create a new data
    const addNewStudent = () => {
        const newStudent = {
            id,
            name,
            batch,
            gender,
            experiness: 2
        }
        setStudents([...studentsData, newStudent])
        setId("")
        setName("")
        setBatch("")
        setGender("")
        setExperience("")
    };

    //delete a new data
    const deleteStudentData = (studId) =>{
        const selectedStudents = studentsData.filter((stud)=> stud.id !== stud)
        setStudents(selectedStudents);

    }
    return(
        <div className="containers">
            <div className="input-section">

                <TextField 
                fullWidth label="Enter the Id"
                 onChange={(event)=>setId(event.target.value)}
                 value = {id}
                 Id="fullWidth"/>

                <TextField 
                fullWidth label="Enter the Name"
                onChange={(event)=>setName(event.target.value)}
                value = {name}
                 id="fullWidth"/>

                <TextField 
                fullWidth label="Enter the Batch"
                onChange={(event)=>setBatch(event.target.value)}
                value = {Batch}
                 id="fullWidth"/>

               <TextField 
                fullWidth label="Enter the Experience"
                onChange={(event)=>setExperience(event.target.value)}
                valu = {experience}
                 id="fullWidth"/>

                <Button className= "add-btn" color="success" variant="contained">Add Data</Button>
            </div>

        
        <div className="card-containers"></div>
            {StudentsData.map((stud, id)=>(

<Card sx={{ maxWidth:345}} key = {stud.id} className="card">

<CardContent>
    <Typography gutterBottom variant="h5" components="div">
      Name : {stud.name}
    </Typography>
    <Typography gutterBottom variant="body2" color="text.secondary">
        Batch : {stud.batch}
    </Typography>
    <Typography gutterBottom variant="body2" color="text.secondary">
        Gender : {stud.gender}
    </Typography>
    <Typography gutterBottom variant="body2" color="text.secondary">
        Experience : {stud.yearsOfExperience}
    </Typography> 
</CardContent>
<CardActions>
   <Button color="secondary">Edit</Button>
   <Button onClick={()=>deleteStudentData(stud.id)} color="error">Delete</Button>
</CardActions>
</Card>

            ))}
         
        </div>
    )
}