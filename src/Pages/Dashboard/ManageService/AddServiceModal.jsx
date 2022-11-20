import React, { useState } from 'react';
import { FileUploader } from 'react-drag-drop-files';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';


const fileTypes = ["JPEG", "PNG", "GIF"];

const AddServiceModal = ({ setModalOpen, reLoad, setReload }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);


    };

    const handleAddService = data => {
        if (!file) {
            return toast.error('please add a image')
        }
        const formData = new FormData()
        formData.append('image', file);
        const url = `https://api.imgbb.com/1/upload?key=5899351f798cd6d70876c4ba48683336`
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(result => {
                const image = result.data.display_url;
                data.image = image;
                data.slots = data.slots.split(",")
                console.log(JSON.stringify(data));

                fetch('http://localhost:5000/services', {
                    method: 'POST',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`,
                        "content-type": 'application/json'
                    },
                    body: JSON.stringify(data)
                })
                    .then(res => res.json())
                    .then(serviceData => {
                        if (serviceData.success) {
                            toast.success(serviceData.messages)
                            setModalOpen(false)
                            setReload(!reLoad)
                        }
                        else {
                            toast.error(serviceData.messages)
                        }
                    })
            })

    }


    return (
        <div>
            <input type="checkbox" id="add-service-modal" className="modal-toggle" />
            <div className="modal">
                <div className="p-5">
                    <form onSubmit={handleSubmit(handleAddService)} className="modal-box relative space-y-3">
                        <label htmlFor="add-service-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                        <h3 className="text-lg font-semibold">Add Service Details</h3>
                        <input placeholder='Service Name' {...register('name')} type="text" className='input w-full input-bordered border-primary' />
                        <input placeholder='Price'  {...register('price')} type="number" className='input w-full input-bordered border-primary' />
                        <textarea placeholder='Enter Slots time ex: 08.00 AM - 08.30 AM,08.30 AM - 09.00 AM' {...register('slots')} type="text" className='textarea textarea-bordered w-full border-primary'></textarea>
                        <div className="pb-2 w-full overflow-hidden">
                            <label className='text-gray-500'>Service Image</label>
                            <FileUploader
                                handleChange={handleChange}
                                name="file"
                                types={fileTypes}
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-10">
                            <label htmlFor="add-service-modal" className="btn btn-error">Cancel</label>
                            <button type="submit" className='btn btn-warning '>SUBMIT</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddServiceModal;