import React from 'react'
import {Card, CardBody} from 'reactstrap'
import {Link} from 'react-router-dom'
// https://remixicon.com/
import './activities-card.css'

const ActivitiesCard = ({activities}) => {

    const {id, title, desc, city, people, photo} = activities

    return (
        <>

    <div className='activities__card'>
        <Card>
            <div className='activities__img'>
                <img src={photo} alt='activities-img' />
            </div>

            <CardBody className='activities__body'>
                <h5 className='activities__title'>
                    <Link to={`/activities/${id}`}>{title}</Link>
                </h5>

                <div className='activities__content'>
                    <div className='activities__info d-flex justify-content-between'>
                        <h5>{city}</h5>
                        <h5>{people} participant</h5>
                    </div>
                    <button className='btn primary__btn'>
                        <Link to={`/activities/${id}`}>More Details</Link>
                    </button>
                </div>
            </CardBody>
        </Card>
    </div>
    </>
  )

  
// return (
//     <div className='activities__card'>
//       <Card>
//         <div className={`activities__img custom-flex`}> {/* Sử dụng lớp CSS động cho thẻ đầu tiên */}
//           <div style={{ marginRight: '10px' }}>
//             <img src={photo} alt='activities-img' />
//             {hot && <span>Hot</span>}
//           </div>
//           <div style={{ flex: '1' }}>
//             <CardBody>
//               <h5 className='activities__title'>
//                 <Link to={`/activities/${id}`}>{title}</Link>
//               </h5>
//               <div className='activities__content mt-3'>
//                 <p className='activities__desc'>{desc}</p>
//                 <button className='btn booking__btn'>
//                   <Link to={`/activities/${id}`}>More Detail</Link>
//                 </button>
//               </div>
//             </CardBody>
//           </div>
//         </div>
//       </Card>
//       {/* Các thẻ sau sẽ sử dụng lớp CSS động khác */}
//       <Card>
//         <div className={`activities__img custom-flex-other`}>
//           {/* Nội dung của thẻ sau */}
//         </div>
//       </Card>
//       {/* ...Thêm các thẻ sau khác... */}
//     </div>
//   )
  
}

export default ActivitiesCard

