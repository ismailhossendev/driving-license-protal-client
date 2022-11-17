import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { authContext } from '../../contexts/AuthContext';
import token from '../../utilites/token';

const SignUp = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const { createUser, withGoogle, updateUser } = useContext(authContext);
    const navigate = useNavigate();
    const signUp = data => {
        createUser(data.email, data.password)
            .then(result => {
                const upInfo = {
                    displayName: data.name
                }
                createData(data.name, data.email)
                token(result.user.email)
                updateUser(upInfo)
                    .then(() => {
                        navigate('/')
                    })

            }).catch(err => {
                toast.error(err.code)
            })
    }

    const handleGoogle = () => {
        withGoogle()
            .then(result => {
                token(result.user.email)
                createData(result.user.displayName, result.user.email)

            }).catch(err => {
                toast.error(err.code)
            });
    }

    const createData = (name, email) => {
        fetch('http://localhost:5000/users', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({ name, email })
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success('SignUp Success')
                }
            })
    }

    return (
        <div className='flex justify-center items-center lg:h-[80vh]'>
            <div className="flex flex-col max-w-md p-3 w-full rounded-md sm:p-10 backdrop-blur-sm  shadow shadow-slate-600" >
                <div className="mb-8 text-center" >
                    <h1 className="my-3 text-4xl font-bold">SignUp</h1>
                    <p className="text-sm ">Sign in to access your account</p>
                </div>
                <form onSubmit={handleSubmit(signUp)} className="space-y-8 ng-untouched ng-pristine ng-valid">
                    <div className="space-y-4" >
                        <div >
                            <label htmlFor="email" className="block mb-2 text-sm">Name</label>
                            <input type="text"
                                {...register('name', {
                                    required: 'Name is required'
                                })}
                                placeholder="Name" className="w-full px-3 py-2 border rounded-md border-primary   "
                            />
                            {errors.name && <small className='text-red-800'>{errors.name.message}</small>}
                        </div>
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
                            </div>
                            <input type="password"
                                {...register('password', {
                                    required: 'Password is required',
                                    minLength: { value: 6, message: 'Password min length 6' }
                                })}
                                placeholder="*****" className="w-full px-3 py-2 border rounded-md border-primary   "
                            />
                            {errors.password && <small className='text-red-800'>{errors.password.message}</small>}
                        </div>
                    </div>
                    <div className="space-y-2" >
                        <div >
                            <button type="submit" className="btn w-full btn-accent">SignUp</button>
                        </div>
                        <p className="px-6 text-sm text-center ">Already have an account ?
                            <Link to='/login' className="hover:underline ">Login</Link>.
                        </p>
                    </div>
                </form>
                <div className="divider">OR</div>
                <button onClick={handleGoogle} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
            </div>
        </div>
    );
};

export default SignUp;