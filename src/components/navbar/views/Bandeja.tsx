import React from 'react'

interface IBandejaProps {
    usersList: any[]
}
const Bandeja: React.FC<IBandejaProps> = ({ usersList }) => {
    return (
        <ul>
            {usersList.map((item) => {

                return (
                    <li className='flex items-center px-1 py-2 hover-effect-gray'>

                        <div className='h-14 w-14'>
                            <img src={item.img} alt="" className='object-cover object-center  rounded-full w-full h-full' />

                        </div>
                        <div className='pl-2'>
                            <p>{item.nombre}</p>
                            <p>{item.message.length > 10 ? item.message.slice(0, 10) + "…" : item.message} <span className='text-sm text-gray-400 '>{item.ultima_conexion}</span></p>
                        </div>
                    </li>
                )
            })}
        </ul>

)
}
export default Bandeja