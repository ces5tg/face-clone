import React from 'react'

interface IAdsBannerProps {
    url:string , 
    title:string , 
    link:string
}
const AdsBanner: React.FC<IAdsBannerProps> = ({ url, title, link })=> {
    return (
        <div className='flex flex-1 justify-between items-center p-2 h-full hover:bg-gray-100 hover:rounded-md'>
            <div className='w-20 bg-gray-600 h-16 rounded-md'>
                <img src={url} alt="" className='object-cover '/> jajj
            </div>
            <div className=' w-full pl-2'>
                <h3>{title}</h3>
                <p className='text-sm'>{link}</p>
            </div>
        </div>
    );
};

export default AdsBanner

