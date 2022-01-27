import React from 'react'

const Paitent = ({patient,index}) => {
    console.log(patient)
    return (
        <tr>
            <td><strong>{index+1}</strong></td>
            <td><strong>{patient.gender}</strong></td>
            <td><strong>{patient.age}</strong></td>
            <td><strong>{patient.weight}</strong></td>
            <td><strong>{patient.phone}</strong></td>
            <td><strong>{patient.email}</strong></td>
        </tr>
    )
}

export default Paitent
