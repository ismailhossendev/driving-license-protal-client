import React from 'react';

const ContactUs = () => {
    return (
        <section className="my-10 rounded-md  text-gray-100  bg-[url(https://images.pexels.com/photos/207456/pexels-photo-207456.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)] bg-cover bg-center ">
            <div className="h-full lg:p-10  w-full bg-gray-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-100">
                <form className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow ng-untouched ng-pristine ng-valid bg-[#59453D] shadow-slate-500">
                    <h2 className="w-full text-3xl font-bold leading-tight">Contact us</h2>
                    <div bis_skin_checked="1">
                        <label for="name" className="block mb-1 ml-1">Name</label>
                        <input id="name" type="text" placeholder="Your name" required="" className="block w-full p-2 rounded text-black focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100" />
                    </div>
                    <div bis_skin_checked="1">
                        <label for="email" className="block mb-1 ml-1">Email</label>
                        <input id="email" type="email" placeholder="Your email" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100" />
                    </div>
                    <div bis_skin_checked="1">
                        <label for="message" className="block mb-1 ml-1">Message</label>
                        <textarea id="message" type="text" placeholder="Message..." className="block w-full p-2 rounded text-black autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-100"></textarea>
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