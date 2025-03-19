import React from 'react'
import FriendsLayout from '../../components/layout/FriendsLayout'

const Friends: React.FC = () => {

  const itemsFriends = [
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    }, {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    },
    {
      name: "alfredo veracruz",
      url: "/users/perfil1.png"
    }

  ]

  return (
    <div className=' w-full'>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 2xl:grid-cols-12 gap-4">

        {itemsFriends.map((item) => {

          return (
            <div className='col-span-1 border-2 border-slate-200 rounded-md shadow-sm overflow-hidden'>
              <div>
                <img src={item.url} alt={item.url} className='w-full object-center object-cover' />
              </div>
              <div className='w-full '>
                <p className='p-2 capitalize'>{item.name}</p>
                <div className=' text-sm flex'>
                  <span className='px-2'><i className="fa-regular fa-circle"></i></span> <p className='text-gray-400'> 2 amigos en comun</p>
                </div>
                <div className='pl-2 pr-2 pb-2 '>
                  <button className=" font-bold flex whitespace-nowrap w-full items-center justify-center text-blue-500 px-4 py-2">
                    Agregar a amigos
                  </button>

                  <button className="font-bold flex w-full items-center justify-center hover:bg-gray-100 px-4 py-2">
                    Eliminar
                  </button>
                </div>

              </div>
            </div>
          )
        })}
      </div>

    </div>
  )
}

export default Friends