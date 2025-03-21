import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const SidebarMain = () => {

  const sidebarItems = [
    {
      "icon": "fas fa-user",
      "text": "Cesar Pacho",
      "path": "/profile"
    },
    {
      "icon": "fas fa-user-friends",
      "text": "Amigos",
      "path": "/friends"
    },
    {
      "icon": "fas fa-clock",
      "text": "Recuerdos",
      "path": "/memories"
    },
    {
      "icon": "fas fa-bookmark",
      "text": "Guardado",
      "path": "/saved"
    },
    {
      "icon": "fas fa-users",
      "text": "Grupos",
      "path": "/groups"
    },
    {
      "icon": "fas fa-video",
      "text": "Video",
      "path": "/watch"
    },
    {
      "icon": "fas fa-store",
      "text": "Marketplace",
      "path": "/marketplace"
    },
    {
      "icon": "fas fa-newspaper",
      "text": "Feeds",
      "path": "/feeds"
    },
    {
      "icon": "fas fa-calendar-alt",
      "text": "Eventos",
      "path": "/events"
    },
    {
      "icon": "fas fa-chart-bar",
      "text": "Administrador de anuncios",
      "path": "/ads-manager"
    },
    {
      "icon": "fas fa-bullhorn",
      "text": "Actividad publicitaria reciente",
      "path": "/recent-ads"
    },
    {
      "icon": "fas fa-cloud-sun",
      "text": "Clima: Centro de información",
      "path": "/weather"
    },
    {
      "icon": "fas fa-gift",
      "text": "Cumpleaños",
      "path": "/birthdays"
    },
    {
      "icon": "fas fa-gamepad",
      "text": "Jugar",
      "path": "/gaming"
    },
    {
      "icon": "fas fa-comment-dots",
      "text": "Messenger",
      "path": "/messenger"
    },
    {
      "icon": "fas fa-child",
      "text": "Messenger Kids",
      "path": "/messenger-kids"
    },
    {
      "icon": "fas fa-flag",
      "text": "Páginas",
      "path": "/pages"
    },
    {
      "icon": "fas fa-money-bill-wave",
      "text": "Pedidos y pagos",
      "path": "/payments"
    },
    {
      "icon": "fas fa-hand-holding-heart",
      "text": "Recaudaciones de fondos",
      "path": "/fundraisers"
    },
    {
      "icon": "fas fa-video",
      "text": "Reels",
      "path": "/reels"
    },
    {
      "icon": "fas fa-exclamation-triangle",
      "text": "Respuesta ante emergencias",
      "path": "/crisis-response"
    },
    {
      "icon": "fas fa-gamepad",
      "text": "Videos de juegos",
      "path": "/gaming/videos"
    }
  ]


  const [countItems, setCountItems] = useState<number>(10)
  return (
    <div className='w-full  p-2'>
      <div className='h-full'>
        {sidebarItems.map((item, index) => {
          return (
            <>
              {index < countItems ? (
                <>
                  <Link key={item.text} to={item.path} className="flex items-center p-2 hover:bg-slate-100 hover:rounded-md">
                    <span className="flex justify-center items-center bg-slate-50 h-10 w-10 text-2xl rounded-full text-black "><i className={item.icon} ></i></span>
                    <div className='pl-2'>
                      {item.text} 
                    </div>
                  </Link>

                </>
              ) : (
                <></>
              )}
            </>
          )
        })}

        {countItems <= 10 ? (
          <div className="flex items-center p-2 hover:bg-slate-100 hover:rounded-md" onClick={() => setCountItems(sidebarItems.length)}>
            <span className="flex justify-center items-center bg-slate-50 h-10 w-10 text-2xl rounded-full text-black "><i className="fas fa-chevron-down"></i></span>
            <div className='pl-2'>
              Ver mas
            </div>
          </div>
        ) : (
          <div className="flex items-center p-2 hover:bg-slate-100 hover:rounded-md" onClick={() => setCountItems(10)}>
            <span className="flex justify-center items-center bg-slate-50 h-10 w-10 text-2xl rounded-full text-black "><i className="fas fa-chevron-up"></i></span>
            <div className='pl-2'>
              Ver menos
            </div>
          </div>
        )}
        <hr  className='m-2'/>
        <p className='font-bold text-gray-500 pl-2'>Tus accesos directos</p>
      </div>
    </div>
  )
}

export default SidebarMain