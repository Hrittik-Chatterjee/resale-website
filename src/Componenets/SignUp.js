import React,{useContext} from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import { AuthContext } from './Context/AuthProvider';

const SignUp = () => {

    const { register,formState:{errors}, handleSubmit } = useForm();
    const {createUser, signInWithGoogle} = useContext(AuthContext)
    const handleSignUp =(data) =>{
        console.log(data)
        createUser(data.email, data.password)
        .then(result=>{
            const user =result.user
            console.log(user)
        })
        .catch(error => console.log(error))
    }
    
    const handleGoogleSignIn=()=>{
        console.log('clicked')
        
    
        signInWithGoogle()
      .then((result) => {
        
        const user = result.user;
        console.log(user)
        alert('Successfully Sign in')
        // ...
      }).catch((error) => {
        // Handle Errors here.
        
        const errorMessage = error.message;
        console.log(errorMessage)
       
      });
      }
    
    return (
        <div className='hero min-h-screen'>
            <div className="hero-content flex-col lg:flex-row-reverse bg-stone-300 rounded-xl">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Sign Up Now!</h1>
                    <p className="py-6">To start selling and buying products you have to first log in or sign up to desired watch website. We need some information about the individuals to operate trading process. Kindly please Sign up or if you already have an account go to the Log In page</p>
                </div>

                <div className="card flex-shrink-0 w-full max-w-sm bg-gray-300 shadow-2xl">
                    <form className="card-body" onSubmit={handleSubmit(handleSignUp)}>

                        <div >
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input {...register("name")} type="text" placeholder="name" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input {...register("email", { required: "Email is required" })} type="text" placeholder="Email" className="input input-bordered" />
                            {errors.email && <p className='text-red-700 text-sm mt-2 ml-2' role="alert">{errors.email?.message}</p>}
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input {...register("password", { required: "Password is required" })} type="text" placeholder="Password" className="input input-bordered" />
                            {errors.password && <p className='text-red-700 text-sm mt-2 ml-2' role="alert">{errors.password?.message}</p>}
                        </div>
                        <input className='btn bg-black' type="submit" />
                    </form>
                    <p className='mx-auto'>Already have an account? <Link className='text-secondary' to={'/login'}>Log in </Link></p>
                    <div className='divider m-4'>OR</div>
                    <button onClick={handleGoogleSignIn} className='btn btn-outline m-4'>Continue With Google</button>
                </div>
            </div>
        </div>
    );
};

export default SignUp;