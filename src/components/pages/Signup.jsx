import React from 'react';
import { Form, useForm } from "react-hook-form"
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const { register, handleSubmit, watch,  formState: { errors } , control } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    toast.success('Successfully toasted!')
  }; 
  console.log(watch("firstName"));
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="max-w-lg w-full bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Sign Up</h2>

        <Form action="https://dummyjson.com/c/be32-c745-4836-abe1" method="post" // Send post request with the FormData
      // encType={'application/json'} you can also switch to json object
      onSubmit={() => {}} // function to be called before the request
      onSuccess={() => {
        toast.success('Registration Successful! This API is a mock for testing purposes and does not actually register users.')
        navigate("/login");
      }}
      onError={() => {
        alert("Submission has failed.")
      }}
      control={control}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">First Name</span>
            </label>
            <input type="text" placeholder="Enter your username" className="input input-bordered w-full"
             {...register("firstName", { required: true, maxLength: 20 })} 
             aria-invalid={errors.firstName ? "true" : "false"}
             />
            {errors?.firstName?.type === "required" && <p className='text-error'>This field is required</p>}
            {errors?.firstName?.type === "maxLength" && (
              <p role="alert" className='text-error'>First name cannot exceed 20 characters</p>
            )}
          </div>
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Last Name</span>
            </label>
            <input type="text" placeholder="Enter your username" className="input input-bordered w-full" {...register("lastName", { required: true, maxLength: 20, pattern: /^[A-Za-z]+$/i })} />
            {errors?.lastName?.type === "required" && <p className='text-error'>This field is required</p>}
            {errors?.lastName?.type === "maxLength" && (
              <p className='text-error'>First name cannot exceed 20 characters</p>
            )}
            {errors?.lastName?.type === "pattern" && (
              <p className='text-error'>Alphabetical characters only</p>
            )}
          </div>
          {/* Email Field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" placeholder="Enter your email" className="input input-bordered w-full" {...register("email", { required: true, maxLength: 20 })} />
            {errors?.email?.type === "required" && <p className='text-error'>This field is required</p>}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" placeholder="Enter your password" className="input input-bordered w-full" {...register("password", { required: true, maxLength: 20 })} />
            {errors?.password?.type === "required" && <p className='text-error'>This field is required</p>}
          </div>
          
          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="label">
              <span className="label-text">Confirm Password</span>
            </label>
            <input type="password" placeholder="Confirm your password" className="input input-bordered w-full" {...register("confirm_password", { required: true, maxLength: 20 })} />
            {errors?.confirm_password?.type === "required" && <p className='text-error'>This field is required</p>}
          </div>
          
          {/* Terms and Conditions */}
          <div className="flex items-center mb-6">
            <input type="checkbox" id="terms" className="checkbox checkbox-primary mr-2" {...register("tnc", { required: true, maxLength: 20 })} />
            <label htmlFor="terms" className="label cursor-pointer">
              <span className="label-text">I agree to the terms and conditions</span>
            </label>
            
          </div>
          {errors?.tnc?.type === "required" && <p className='text-error mb-2'>This field is required</p>}
          
          {/* Signup Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-full">Sign Up</button>
          </div>
        </Form>

        {/* Social Login Options */}
        <div className="mt-6 text-center hidden">
          <p className="text-gray-600">Or sign up with</p>
          <div className="flex justify-center gap-4 mt-4">
            <button className="btn btn-outline btn-primary">Google</button>
            <button className="btn btn-outline btn-blue-500">Facebook</button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Signup;
