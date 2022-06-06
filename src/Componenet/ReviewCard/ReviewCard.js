import React from 'react';
import './ReviewCard.css'

const ReviewCard = props => {
    const { user_name, rating, img, cons, pros } = props.review
    return (
        <div className='card text-left grid grid-cols-1 md:grid-cols-5 gap-4  border-x-8 my-20 mx-44'>
            <div className='px-8 py-5'>
                <img className='rounded-full w-20px' src={img} alt='' />
            </div>
            <div className='gun-info md:col-span-4 px-4'>
                <h1 className=' text-2xl text-cyan-900 font-bold'>{user_name}</h1>
                <p><span className=' text-lg  text-violet-900 font-bold'>Pros :</span> {pros}</p>
                <p><span className=' text-lg  text-rose-900 font-bold'>Cons :</span> {cons}</p>
                <p><span className=' text-lg  text-cyan-900 font-bold'>Rating :</span> {rating}</p>
            </div>

        </div>
    );
};

export default ReviewCard;