import React, { useState } from 'react'
import InputSearch from '../ui/InputSearch'
import Bandeja from './views/Bandeja'
import Comunidad from './views/Comunidad'

const usersList = [
    {
        "nombre": "Leo Coaquira",
        "img": "/users/perfil1.png",
        "message": "Desarrollador apasionado por la tecnología y la innovación.",
        "ultima_conexion": "2 días"
    },
    {
        "nombre": "Ana Pérez",
        "img": "/users/perfil2.png",
        "message": "Amante del diseño gráfico y la fotografía.",
        "ultima_conexion": "1 semana"
    },
    {
        "nombre": "Carlos Gómez",
        "img": "/users/perfil1.png",
        "message": "Ingeniero de software con experiencia en IA.",
        "ultima_conexion": "3 semanas"
    },
    {
        "nombre": "María López",
        "img": "/users/perfil2.png",
        "message": "Apasionada por la educación y el aprendizaje continuo.",
        "ultima_conexion": "5 días"
    },
    {
        "nombre": "José Rodríguez",
        "img": "/users/perfil1.png",
        "message": "Desarrollador backend con experiencia en bases de datos.",
        "ultima_conexion": "2 semanas"
    },
    {
        "nombre": "Luis Fernández",
        "img": "/users/perfil2.png",
        "message": "Emprendedor en el mundo de las startups tecnológicas.",
        "ultima_conexion": "4 días"
    },
    {
        "nombre": "Elena Rojas",
        "img": "/users/perfil1.png",
        "message": "Diseñadora UX/UI enfocada en accesibilidad.",
        "ultima_conexion": "1 mes"
    },
    {
        "nombre": "Miguel Sánchez",
        "img": "/users/perfil2.png",
        "message": "Analista de datos con experiencia en machine learning.",
        "ultima_conexion": "3 días"
    },
    {
        "nombre": "Andrea Torres",
        "img": "/users/perfil1.png",
        "message": "Especialista en ciberseguridad y hacking ético.",
        "ultima_conexion": "2 meses"
    },
    {
        "nombre": "Daniel Castillo",
        "img": "/users/perfil1.png",
        "message": "Desarrollador móvil con experiencia en Flutter.",
        "ultima_conexion": "6 semanas"
    }
]

const comunityList = 
    [
        {
          "nombre": "Pregunta del día",
          "descripcion": "Práctica de inglés para personas que han...",
          "img": "/users/perfil1.png",
          "miembros": 1523
        },
        {
          "nombre": "Desarrolladores JS",
          "descripcion": "Comunidad para compartir conocimiento sobre JavaScript.",
          "img": "/users/perfil1.png",
          "miembros": 4820
        },
        {
          "nombre": "Música y Cultura",
          "descripcion": "Discute sobre tus artistas y géneros favoritos.",
          "img": "/users/perfil1.png",
          "miembros": 2301
        },
        {
          "nombre": "Fitness y Salud",
          "descripcion": "Rutinas, dietas y consejos para una vida saludable.",
          "img": "/users/perfil1.png",
          "miembros": 3570
        },
        {
          "nombre": "Gamers Perú",
          "descripcion": "Noticias y torneos de videojuegos en Perú.",
          "img": "/users/perfil1.png",
          "miembros": 1987
        }
      ]
      

const CardChats: React.FC = () => {
    const [activeTab, setActiveTab] = useState<"bandeja" | "comunidades">("bandeja")
    return (
        <div className='rounded-lg shadow-lg shadow-slate-500 border-b-2 border-l-2 border-r-2 border-gray-300 w-[23rem] overflow-auto  h-[calc(100vh-5rem)] bg-white flex flex-col'>
            <div className='flex justify-between ml-4 mr-4  mt-2'>
                <h3 className='text-xl font-bold'>
                    Chats
                </h3>
                <div className='text-gray-400 '>
                    <span className='px-2'><i className="fas fa-ellipsis-h"></i></span>
                    <span className='px-2'><i className="fas fa-clone"></i></span>
                    <span className='px-2'><i className="fas fa-pen"></i></span>

                </div>
            </div>
            <div className='mt-2 mb-3 mx-3'>
                <InputSearch placeholder=' Buscar en Messenger'></InputSearch>
            </div>
            <div className='flex text-sm mx-3 '>
                <button className='whitespace-nowrap py-1 bg-blue-100 text-blue-600 font-extrabold px-2 rounded-full active:bg-blue-200 active:text-blue-700 active:scale-95 transition-transform duration-200' onClick={()=> setActiveTab("bandeja")}>Bandeja de entrada</button>
                <button className='ml-2 whitespace-nowrap py-1 bg-gray-100 text-black-600 font-extrabold px-2 rounded-full active:bg-gray-200 active:text-black-700 active:scale-95 transition-transform duration-200' onClick={() =>{
                    setActiveTab("comunidades")
                }}>Comunidades</button>

            </div>
            <div className='h-full overflow-auto mx-4 mt-2'>
                
                { activeTab == "bandeja" ? (
                    <Bandeja usersList={usersList}
                    ></Bandeja>
                ) :(
                    <ul>
                        <Comunidad comunityList={comunityList}></Comunidad>
                    </ul>
                )}
            </div>
            <div className='bg-white mt-auto  flex items-center py-2 border-t-2 border-gray-300'>
                <a href="" className='text-blue-600 font-extrabold w-full text-center '>Ver todo el Messenger</a>
            </div>
        </div>
    )
}

export default CardChats