import React, { useState } from "react";
//This example is taken from angela you video 
//on udemy using state mrather than react-hook-form
//to get me back on track
function FormData3() {
    const [ fullName, setFullName ]  = useState({
    fName: "",
    lName: "",
});
function handleChange(event) {
    const { value, name } = event.target;
  

    setFullName(prevValue => {

        if (name === "fName") {
            return {
                fName: value,
                lName: prevValue.lName 
            };
            } else if (name === "lName"){
                return {
                    fName: prevValue.fName,
                    lName: value,
                }
        }
    });
}

return (
    <div className="container">
        <h1>
            Hello {fullName.fName} {fullName.lName}
        </h1>
        {/* <p>{email}</p> */}
        <form >
            <input name ="fName"
             onChange={handleChange}
              placeholder="First Name"
               value={fullName.fName}
            /><br />

            <input name ="lName"
            onChange={handleChange}
             placeholder="Last Name" 
             value={fullName.lName}
            /><br />
            {/* <input name ="email" placeholder="Email" value="email"/><br /> */}
            <button type ="submit">Submit</button>
        </form>
    </div>
)}


export default FormData3;