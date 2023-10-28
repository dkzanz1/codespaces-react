//This page is using react-hook-form
import React from "react";
import {useForm} from "react-hook-form";
import saveData from "./SaveData";



  function FormData2 () {
    const { register, handleSubmit } = useForm();
    return(<>
    <h1>Forms component Two</h1>
            <form onSubmit={handleSubmit(data => saveData(data))}>
                <label>Name </label>
                <input id="fname" name ="Name" type="data" autocomplete{...register('value_name')}></input> <br />
                <label>Surname </label>
                <input id="lname" name ="Name" type="data"  autocomplete {...register('value_name')}></input><br />
                <label>Age </label>
                <input id="age" age ="Age" type="number" autocomplete {...register('value_age')}></input><br />
                <input type="submit"  />
            </form>
          </>

)};




export default FormData2;