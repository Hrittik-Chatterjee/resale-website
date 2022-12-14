import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';

const Login = () => {

    const { register,formState:{errors}, handleSubmit } = useForm();
   

    const handleLogin =data =>{
        console.log(data)
    }
    return (
        <div className='hero min-h-screen'>
            <div  className="hero-content flex-col lg:flex-row-reverse bg-stone-300 rounded-xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">To start selling and buying products you have to first log in or sign up to desired watch website. We need some information about the individuals to operate trading process. Kindly please Log in if you already have and account or sign up if you are new to Desired Watch</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm bg-gray-300 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(handleLogin)}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email",{required:"Email is required"})} type="text" placeholder="Email" className="input input-bordered" />
                            {errors.email && <p className='text-red-700 text-sm mt-2 ml-2' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password",{required:"Password is required"})} type="text" placeholder="Password" className="input input-bordered" />
                            {errors.password && <p className='text-red-700 text-sm mt-2 ml-2' role="alert">{errors.password?.message}</p>}
                        </div>
                        <input className='btn bg-black' type="submit" />
                    </form>
                    <p className='mx-auto'>New to Desired Watch? <Link className='text-secondary' to={'/signup'}>Sign Up </Link></p>
                    <div className='divider m-4'>OR</div>
                    <button className='btn btn-outline m-4'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default Login;