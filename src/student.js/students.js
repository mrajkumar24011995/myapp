import React, { useState } from "react";

const Students = ({name,age,id,education,gender}) => {

    return (
        <div>
        <h1>{name}</h1>
        <h3>{age}</h3>
        <h3>{id}</h3>
        <h3>{education}</h3>
        <h3>{gender}</h3>
        </div>
    );
};

export default Students;