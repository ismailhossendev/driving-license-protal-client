import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

const ContactUs = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()

    const handleContact = data => {
        fetch('http://localhost:5000/messages', {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                if (result.success) {
                    toast.success(result.message)
                } else {
                    toast.error(result.message)
                }
            })
    }

    return (
        <section className="my-10 rounded-md  text-gray-100  bg-[url(https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center ">
            <div className="h-full lg:p-10  w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
                <form onSubmit={handleSubmit(handleContact)} className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid bg-[#59453D] shadow-slate-500">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div bis_skin_checked="1">
                        <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                        <input {...register("name", {
                            required: 'Please enter your name'
                        })} id="name" type="text" placeholder="Your name" className="block w-full p-2 rounded text-black focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"
                        />
                        {errors.name && <p className='text-warning'>{errors.name.message}</p>}
                    </div>
                    <div bis_skin_checked="1">
                        <label htmlFor="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" {...register("email", {
                            required: 'Please enter your email'
                        })} type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"
                        />
                        {errors.email && <p className='text-warning'>{errors.email.message}</p>}
                    </div>
                    <div bis_skin_checked="1">
                        <label htmlFor="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" {...register("message", {
                            required: 'Please enter message'
                        })} type="text" placeholder="Message..." className="block w-full p-2 rounded text-black autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"></textarea>
                        {errors.message && <p className='text-warning'>{errors.message.message}</p>}
                    </div>
                    <div bis_skin_checked="1">
                        <button type="submit" className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-900">Send</button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default ContactUs;