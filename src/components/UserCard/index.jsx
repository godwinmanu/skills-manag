import React from 'react'
import { Link } from 'react-router-dom';
import "./index.scss";

const UserCard = ({workerData}) => {
  return (
    <Link to="/worker-infos" className='UserCard'>
        <img src={workerData.image} alt="" />
        <div>
          <p>{workerData.fullname}</p>
          <p>{workerData.job}</p>
          <p>{workerData.location}</p>
        </div>
    </Link>
  )
}

export default UserCard