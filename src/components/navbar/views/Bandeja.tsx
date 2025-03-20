import React, { useState } from 'react'

const itemsOptions = [
    {
        "icon": "fas fa-envelope-open",
        "text": "Marcar como no leído"
    },
    {
        "icon": "fas fa-laptop",
        "text": "Probar Messenger para computadoras"
    },
    {
        "icon": "fas fa-bell-slash",
        "text": "Silenciar notificaciones"
    },
    {
        "icon": "fas fa-user",
        "text": "Ver perfil"
    },
    {
        "icon": "fas fa-phone",
        "text": "Llamada de audio"
    },
    {
        "icon": "fas fa-video",
        "text": "Videochat"
    },
    {
        "icon": "fas fa-ban",
        "text": "Bloquear"
    },
    {
        "icon": "fas fa-archive",
        "text": "Archivar chat"
    },
    {
        "icon": " fas fa-trash",
        "text": "Eliminar chat"
    }
]

interface IBandejaProps {
    usersList: any[]
}
const Bandeja: React.FC<IBandejaProps> = ({ usersList }) => {
    const [activeOptions, setActiveOptions] = useState<string | null>(null)


    const handleActiveOption = (id: string) => {
        setActiveOptions((prevId) => (prevId === id ? null : id));
    };
    return (
        <ul>
            {usersList.map((item) => {
                return (
                    <li key={item.id} className='flex items-center px-1 py-2 hover-effect-gray relative  group'>

                        <div className='h-14 w-14'>
                            <img src={item.img} alt="" className='object-cover object-center  rounded-full w-full h-full' />

                        </div>
                        <div className='pl-2'>
                            <p>{item.nombre}</p>
                            <p>{item.message.length > 10 ? item.message.slice(0, 10) + "…" : item.message} <span className='text-sm text-gray-400 '>{item.ultima_conexion} lll</span></p>
                        </div>
                        <div className='absolute right-6 w-8 h-8 rounded-full flex items-center justify-center '>
                            <button className=' h-full w-full rounded-full hover-effect-gray
                        opacity-0 bg-white shadow-md group-hover:opacity-100 transition-opacity duration-600' onClick={() => {
                                    handleActiveOption(item.id)
                                }}>
                                <i className="fas fa-ellipsis-h"></i>
                            </button>
                            {activeOptions == item.id && (
                                <>

                                    {/* <div className="absolute top-0 left-4 translate-y-8 w-4 h-4 bg- clip-triangle shadow-[0px_-4px_10px_rgba(0,0,0,0.1),0px_4px_10px_rgba(0,0,0,0.1)]"></div> */}
                                    <div className='absolute  z-50 top-11 -right-5 bg-white w-[19rem] min-hfull pl-3 pr-2 py-2 opacity-100 shadow-[0px_-4px_10px_rgba(0,0,0,0.1),0px_4px_10px_rgba(0,0,0,0.1)] shadow-gray-400 '>
                                        <ul>
                                            {itemsOptions.map((item) => {
                                                return (
                                                    <li className='p-1 flex items-center hover-effect-gray'>
                                                        <span className='h-full pl-1'><i className={item.icon}></i></span>
                                                        <p className='pl-2 text-sm whitespace-nowrap'>{item.text}</p>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </div>
                                </>

                            )}
                        </div>

                    </li>



                )
            })}
        </ul>

    )
}
export default Bandeja