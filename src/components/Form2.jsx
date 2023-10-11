import React from "react";
import {useForm} from "react-hook-form";
import saveData from "./SaveData";



  function FormData2 () {
    const { register, handleSubmit } = useForm();
    return(<>
      <h1>Forms component Two</h1>
<form onSubmit={handleSubmit(data => saveData(data))}>
    
    <label>Name </label>
    <input name ="fName" type="data"  {...register('value_name')}></input> <br />
    <label>Surname </label>
    <input name ="lName" type="data" {...register('value_name')}></input><br />
    <label>Age </label>
    <input age ="Age" type="number" {...register('value_age')}></input>
    <input type="submit"/>
    </form>
    </>

)};




export default FormData2;