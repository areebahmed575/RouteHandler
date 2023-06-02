"use client"
import React from 'react'
import { useForm } from 'react-hook-form';

const form = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();  
      
      const onHandler = async (data:any) => {
        console.log(data);
        
        await fetch("/api/formHandler",{
          method:"POST",
          body:JSON.stringify(data)
        })


      };



      //console.log({ ...register("Email") });

      //console.log("Error:",errors )
    

    return (
        <div className='mx-10 my-10'>

            <form className='flex space-x-6' onSubmit={handleSubmit(onHandler)}>
                <div>
                <label>Email</label>
                <input type='Eamil' placeholder='Enter your Email' {...register("Email",{required: true})}/>
                
                </div>


                <div>
                <label>Password</label>
                <input type='Password' placeholder='Enter your Password' {...register("Password", {required: true,minLength: 6})} />
                {errors.Password && errors.Password.type === "required" && (
                 <p className="errorMsg">Password is required.</p>)}
                </div>
                <div>
                  <button className=' border p-3' type='submit'>Submit</button>
                </div>


            </form>

        </div>
    )
}

export default form
