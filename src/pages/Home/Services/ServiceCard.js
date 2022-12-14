import React from 'react';

const ServiceCard = ({service}) => {
    const{_id,service_id, title, img, price, description, facility} = service
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img className='h-full' src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl font-semibold text-orange-600'>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;