import React from 'react'
import { Link } from 'react-router-dom';
import InputSearch from '../ui/InputSearch';

const menuOptions = [
  {
    section: "Social",
    options: [
      {
        icon: "fas fa-calendar-alt",
        title: "Eventos",
        description: "Organiza o busca eventos y otras actividades para hacer online y cerca de ti.",
        url: "/events"
      },
      {
        icon: "fas fa-user-friends",
        title: "Amigos",
        description: "Busca amigos o personas que quizá conozcas.",
        url: "/friends"
      },
      {
        icon: "fas fa-users",
        title: "Grupos",
        description: "Conéctate con personas que comparten tus mismos intereses.",
        url: "/groups"
      },
      {
        icon: "fas fa-newspaper",
        title: "Noticias",
        description: "Mira las publicaciones relevantes de personas y páginas que sigues.",
        url: "/news"
      },
      {
        icon: "fas fa-stream",
        title: "Feeds",
        description: "Mira las publicaciones más recientes de tus amigos, grupos, páginas y mucho más.",
        url: "/feeds"
      },
      {
        icon: "fas fa-file-alt",
        title: "Páginas",
        description: "Descubre negocios en Facebook y conéctate con ellos.",
        url: "/pages"
      },
    ]
  },
  {
    section: "Entretenimiento",
    options: [
      {
        icon: "fas fa-gamepad",
        title: "Videos de juegos",
        description: "Mira tus juegos y streamers favoritos y conéctate con ellos.",
        url: "/gaming"
      },
      {
        icon: "fas fa-play",
        title: "Jugar",
        description: "Juega a tus juegos favoritos.",
        url: "/play"
      },
      {
        icon: "fas fa-video",
        title: "Video",
        description: "Un destino de videos personalizado según tus intereses y conexiones.",
        url: "/videos"
      },
    ]
  },
  {
    section: "Compras",
    options: [
      {
        icon: "fas fa-shopping-cart",
        title: "Pedidos y pagos",
        description: "Una forma sencilla y segura de pagar en las apps que usas.",
        url: "/payments"
      },
      {
        icon: "fas fa-store",
        title: "Marketplace",
        description: "Compra y vende en tu comunidad.",
        url: "/marketplace"
      },
    ]
  },

  {
    section: "Personal",
    options: [{
      icon: "fas fa-ad",
      title: "Actividad publicitaria reciente",
      description: "Consulta todos los anuncios con los que interactuaste en Facebook.",
      url: "/ads"
    },
    {
      icon: "fas fa-archive",
      title: "Recursos",
      description: "Explora tus fotos, vídeos y publicaciones antiguas en Facebook.",
      url: "/resources"
    },
    {
      icon: "fas fa-bookmark",
      title: "Guardado",
      description: "Encuentra publicaciones, fotos y videos que guardaste para verlos más tarde.",
      url: "/saved"
    },]
  },
  {
    section: "Profesional",
    options: [
      {
        icon: "fas fa-chart-line",
        title: "Administrador de anuncios",
        description: "Crea y administra tus anuncios, y realiza un seguimiento de estos.",
        url: "/ads-manager"
      },
    ]
  },
  {
    section: "Recursos de la comunidad",
    options: [
      {
        icon: "fas fa-globe",
        title: "Clima: Centro de información",
        description: "Infórmate sobre el cambio climático y sus efectos.",
        url: "/climate-info"
      },
      {
        icon: "fas fa-exclamation-triangle",
        title: "Respuestas ante emergencias",
        description: "Entérate de las últimas novedades sobre situaciones de emergencia recientes en todo el mundo.",
        url: "/emergency"
      },
      {
        icon: "fas fa-hand-holding-heart",
        title: "Recaudaciones de fondos",
        description: "Dona y recauda dinero para organizaciones sin fines de lucro y causas personales.",
        url: "/fundraisers"
      },
    ]
  },
  {
    section: "Mas de Meta",
    options: [
      {
        icon: "fas fa-brain",
        title: "Meta AI",
        description: "Haz preguntas, intercambia ideas, crea cualquier imagen que puedas imaginar y mucho más.",
        url: "/meta-ai"
      },
      {
        icon: "fas fa-child",
        title: "Messenger Kids",
        description: "Permite a los niños enviar mensajes a sus mejores amigos y familiares.",
        url: "/messenger-kids"
      },
      {
        icon: "fab fa-whatsapp",
        title: "WhatsApp",
        description: "Enviar mensajes a las personas y llamarlas de forma privada en tu computadora.",
        url: "/whatsapp"
      }
    ]
  }
];

const createOptions = [
  {
    icon: "fas fa-edit",
    title: "Publicación",
    url: "/create/post"
  },
  {
    icon: "fas fa-book",
    title: "Historia",
    url: "/create/story"
  },
  {
    icon: "fas fa-video",
    title: "Reel",
    url: "/create/reel"
  },
  {
    icon: "fas fa-bullhorn",
    title: "Acontecimiento importante",
    url: "/create/announcement"
  },
  {
    icon: "fas fa-file-alt",
    title: "Página",
    url: "/create/page"
  },
  {
    icon: "fas fa-bullseye",
    title: "Anuncio",
    url: "/create/ad"
  },
  {
    icon: "fas fa-users",
    title: "Grupo",
    url: "/create/group"
  },
  {
    icon: "fas fa-calendar-alt",
    title: "Evento",
    url: "/create/event"
  },
  {
    icon: "fas fa-shopping-cart",
    title: "Publicación de Marketplace",
    url: "/create/marketplace"
  }
];

const CardMenu: React.FC = () => {
  return (
    <div className='rounded-lg shadow-lg shadow-gray-300 border-b-2 border-l-2 border-r-2 border-gray-300 w-[38rem] overflow-auto pl-4 pr-4 h-screen  bg-gray-100'>

      <div className='h-12 w-full '>
        <div className=' h-12 fixed bg-gray-100 flex items-center   w-full '>
          <h3 className='text-2xl font-bold mb-2 '>Menú</h3>
        </div>
      </div>
      <div className='grid grid-cols-11 gap-4 '>
        <div className='col-span-7 bg-white rounded-md shadow-sm w-full p-2'>
       
       <div className='mt-4 ml-4 mr-4'>

          <InputSearch placeholder='Busca en el menu' ></InputSearch>
       </div>
          {menuOptions.map((item) => {

            return (<div className='p-4'>
              <h4 className='text-xl font-bold '>{item.section}</h4>
              <div>
                {item.options.map((option) => {
                  return (
                    <Link to={option.url} className='flex items-center mb-2 hover:bg-gray-100 hover:rounded-lg'>
                      <div className='w-20 bg-red-300 h-12 text-3xl flex justify-center items-center'>
                        <i className={option.icon}></i>
                      </div>
                      <div className='ml-4'>
                        <p className='font-semibold'>{option.title}</p>
                        <p className='text-sm'>{option.description}</p>
                      </div>
                    </Link>
                  )
                })}

              </div>
              <hr className='mt-5'/>
            </div>)
          })}
        </div>
        <div className='col-span-4   '>
          <div className='bg-white rounded-md shadow-sm fixed  w-full max-h-screen  p-2'>
              <h4>Crear</h4>
              {createOptions.map((item) => {
                return (
                  <div className='flex  items-center py-2 px-3 hover:bg-gray-100 hover:rounded-md'>
                    <div className='text-2xl'>
                      <i className={item.icon}></i>
                    </div>
                    <div className='ml-3'>
                       <h4 className='break-words w-40 whitespace-normal'>{item.title}</h4>
                    </div>
                  </div>
                )
              })}
          </div>

        </div>
      </div>
    </div>
  )
}

export default CardMenu