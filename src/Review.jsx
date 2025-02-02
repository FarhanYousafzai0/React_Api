import moment from 'moment';
import React from 'react'
import { FaRegCircleUser } from "react-icons/fa6";

const Review = (
    {date,rating,comment,reviewerName,reviewerEmail,showReview,setShowReview}) => {
    
  return (
    <>

    <div className='flex transition-all justify-between items-center shadow p-4 mt-3'>

<div className='flex items-center gap-3'>
<FaRegCircleUser size={25} />

<div className='flex flex-col gap-2 text-[0.5rem]'>
    {reviewerName}
    {comment}
</div>
</div>





<p className="text-sm text-gray-500 text-[0.5rem]">
   {moment(date).format("L")}
</p>


    </div>
      </>
  )
}

export default Review
