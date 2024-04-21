import React from 'react';

export default function MovieSubHeading(props) {
    return (
        <div className='pt-3'>
            <h1 className='bg-red-600 text-white px-3 py-1 rounded-lg cursor-pointer'>{props.heading}</h1>
        </div>
    )
}