import React from 'react'

const itemsFriendsOptions = [
    {
        "text": "Inicio",
        "icon": "fa-solid fa-home",
        "url": "/home",
        "icon_redirect": ""
    },
    {
        "text": "Solicitudes de amistad",
        "icon": "fa-solid fa-user-plus",
        "url": "/friend-requests",
        "icon_redirect": "fa-solid fa-chevron-right"
    },
    {
        "text": "Sugerencias",
        "icon": "fa-solid fa-user-group",
        "url": "/suggestions",
        "icon_redirect": "fa-solid fa-chevron-right"
    },
    {
        "text": "Todos los amigos",
        "icon": "fa-solid fa-users",
        "url": "/all-friends",
        "icon_redirect": "fa-solid fa-chevron-right"
    },
    {
        "text": "Cumpleaños",
        "icon": "fa-solid fa-gift",
        "url": "/birthdays",
        "icon_redirect": ""
    },
    {
        "text": "Listas personalizadas",
        "icon": "fa-solid fa-list",
        "url": "/custom-lists",
        "icon_redirect": "fa-solid fa-chevron-right"
    }
]

const SidebarFriends: React.FC = () => {
    return (

        <div className="bg-white w-full h-screen">
            <div className='flex justify-between py-2 pl-3 pr-4 items-center'>
                <div><h3 className='text-xl font-bold'>Amigos   </h3></div>
                <div>
                    <span className='bg-gray-200 p-1 rounded-full'><i className="fa-solid fa-gear"></i></span>
                </div>
            </div>
            <div className='px-1 text-sm'>
                {itemsFriendsOptions.map((item) => {
                    return (
                        <div className='flex justify-between items-center px-2 hover:bg-gray-100 hover:rounded-md py-1 active:bg-gray-200 '>
                            <div className="flex items-center">
                                <span className="w-8 h-8 flex justify-center items-center rounded-full bg-gray-200">
                                    <i className={item.icon}></i>
                                </span>
                                <h4 className="ml-2">{item.text}</h4>
                            </div>
                            <div>
                                <span className="w-8 h-8 flex justify-center items-center ">
                                    <i className={item.icon_redirect}></i>
                                </span>
                            </div>

                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default SidebarFriends