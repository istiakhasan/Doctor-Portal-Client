import React,{useState} from 'react'
import AppointModal from '../AppointmentModal/AppointModal';

const AppointBook = ({apdt}) => {
    const [modalIsOpen, setIsOpen] = useState(false)
    

    function openModal() {
      setIsOpen(true);
    }
  
    
  
    function closeModal() {
      setIsOpen(false);
    }

    return (
        <div key={apdt.id} className="col-md-4 mt-5">
        <div  style={{  boxShadow:"0 4px 4px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.5)"}} className="card text-center pb-5 ">
            <div className="card-body cardbodywraper pt-5">
                <h3 style={{color:"#33D7D6"}} className="card-title">{apdt.subject}</h3>
                <p className="card-text"><strong><small>{apdt.visitingHour}</small></strong></p>
                <p><small>{apdt.totalSpace} Space Available</small></p>
            </div>
            <button onClick={openModal}  className='w-50 m-auto ' style={{background:"#33D7D6",border:"none",padding:"4px",color:"white",fontWeight:"bold"}}>BOOK APPOINTMENT</button>
          <AppointModal bookingdata={apdt.subject} modalIsOpen={modalIsOpen} openModal={openModal} closeModal={closeModal} />
       
        </div>
</div>
    )
}

export default AppointBook
