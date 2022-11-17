import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import token from '../../utilites/token';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { loginUser, withGoogle, } = useContext(authContext);


    const location = useLocation();
    const navigate = useNavigate();
    const from = location?.state?.from?.pathname || '/'


    const login = data => {
        loginUser(data.email, data.password)
            .then(result => {
                toast.success('Login Success');
                token(result.user.email)
                navigate(from, { replace: true });
            }).catch(err => {
                toast.error(err.code)
            })

    }
    const handleGoogle = () => {
        withGoogle()
            .then(result => {
                toast.success('Login Successfully with google')
                token(result.user.email)
                navigate(from, { replace: true });
            }).catch(err => {
                toast.error(err.code)
            });
    }

    return (
        <div className='flex justify-center items-center lg:h-[65vh]'>
            <div className="flex flex-col max-w-md p-3 w-full rounded-md sm:p-10 backdrop-blur-sm  shadow shadow-slate-600" >
                <div className="mb-8 text-center" >
                    <h1 className="my-3 text-4xl font-bold">Sign in</h1>
                    <p className="text-sm ">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit(login)} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4" >
                        <div >
                            <label htmlFor="email" className="block mb-2 text-sm">Email address</label>
                            <input type="email"
                                {...register('email', {
                                    required: 'Email is required'
                                })}
                                placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-primary   "
                            />
                            {errors.email && <small className='text-red-800'>{errors.email.message}</small>}
                        </div>
                        <div >
                            <div className="flex justify-between mb-2" >
                                <label htmlFor="password" className="text-sm">Password</label>
                                <Link className="text-xs hover:underline ">Forgot password?</Link>
                            </div>
                            <input type="password"
                                {...register('password', {
                                    required: "Password is required",
                                    minLength: { value: 6, message: 'Password minimum length 6.' }
                                })}
                                placeholder="*****" className="w-full px-3 py-2 border rounded-md border-primary   "
                            />
                            {errors.password && <small className='text-red-800'>{errors.password.message}</small>}
                        </div>
                    </div>
                    <div className="space-y-2" >
                        <div >
                            <button type="submit" className="btn w-full btn-accent">Sign in</button>
                        </div>
                        <p className="px-6 text-sm text-center ">Don't have an account yet?
                            <Link to='/signup' className="hover:underline ">Sign up</Link>.
                        </p>
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default Login;