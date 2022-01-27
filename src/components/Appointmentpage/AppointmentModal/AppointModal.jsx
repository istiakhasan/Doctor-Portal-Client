import React from 'react'
import Modal from 'react-modal';
import {useForm} from "react-hook-form";
import {CartState} from '../../../Context/Context';

const customStyles = {

    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '40%'
    }
};
Modal.setAppElement('#root');

const AppointModal = ({modalIsOpen, closeModal, bookingdata}) => {
    const {register, handleSubmit, formState: {
            errors
        }} = useForm();
    const onSubmit = data => {
        data.service=bookingdata;
        data.date=selectedate;
        data.created=new Date()
        fetch('http://localhost:4000/addAppointment',{
            method:"POST",
            headers:{'Content-type': 'application/json; charset=UTF-8'},
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data){
                closeModal()
                alert("Book Successfully")
            }
        })
        
        console.log(data)
       
    };

    const {selectedate} = CartState()

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal">
                <h2
                    style={{
                        color: "rgb(51, 215, 214)"
                    }}
                    className='text-center'>{bookingdata}</h2>
                <p
                    style={{
                        color: "rgb(51, 215, 214)"
                    }}
                    className='text-center'>{selectedate.toDateString()}</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group mb-4">
                        <input
                            {...register("name", { required: true })}
                            style={{
                                height: "55px",
                                boxShadow: "none",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid black",
                                borderRadius: "0px"
                            }}
                            type="text"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Your Name..."/> {errors.name && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="form-group mb-4">
                        <input
                            {...register("phone", { required: true })}
                            style={{
                                height: "55px",
                                boxShadow: "none",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid black",
                                borderRadius: "0px"
                            }}
                            type="number"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Phone Number..."/> {errors.phone && <span className='text-danger'>This field is required</span>}
                    </div>
                    <div className="form-group mb-4">
                        <input
                            {...register("email", { required: true })}
                            style={{
                                height: "55px",
                                boxShadow: "none",
                                outline: "none",
                                border: "none",
                                borderBottom: "1px solid black",
                                borderRadius: "0px"
                            }}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter Your Email..."/> {errors.email && <span className='text-danger'>This field is required</span>}
                    </div>

                    <div
                        className='my-5'
                        style={{
                            display: "flex",
                            justifyContent: "space-between"
                        }}>
                        <select
                        {...register("gender", { required: true })}
                        className="form-select w-25" aria-label="Gender">
                            <option defaultValue value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Others">Others</option>

                        </select>
                        <div className="form-group">

                            <input
                                {...register("age", { required: true })}
                                className='form-control '
                                type="number"
                                placeholder='Your age'/> {errors.age && <span className='text-danger'>This field is required</span>}
                        </div>
                        <div className="form-group">

                            <input
                                {...register("weight", { required: true })}
                                className='form-control '
                                type="number"
                                placeholder='Weight'/> {errors.weight && <span className='text-danger'>This field is required</span>}
                        </div>

                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>

                </form>
            </Modal>

        </div>
    )
}

export default AppointModal
