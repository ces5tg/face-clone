import React from 'react'

interface IComunidadProps {
    comunityList: any[]
}
const Comunidad: React.FC<IComunidadProps> = ({ comunityList }) => {
    return (
        <div>
            <h4 className='text-lg font-bold'>Tus chats</h4>
            <p className='text-lg font-bold'>Chats a los que deberías unirte</p>
            <ul>
                {comunityList.map((item) => {

                    return (
                        <li className='flex items-center px-1 py-2 hover-effect-gray'>

                            <div className='h-14 w-14'>
                                <img src={item.img} alt="" className='object-cover object-center  rounded-full w-full h-full' />

                            </div>
                            <div className='pl-2'>
                                <p>{item.nombre}</p>
                                <p>{item.descripcion.length > 20 ? item.descripcion.slice(0, 10) + "…" : item.descripcion} </p>
                                <p className='text-sm text-gray-600 '> mienbros : 
                                    <span className='text-sm text-gray-400 '>{item.miembros}</span>

                                </p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>

    )
}
export default Comunidad