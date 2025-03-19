import React from 'react'

interface ICardPostProps {
    url: string,
    title: string,
    time: string,
    following: boolean
    text: string,
    reactions: number,
    emojis: string[]
}
const CardPost: React.FC<ICardPostProps> = ({ url, title, time, following, text, reactions, emojis }) => {
    return (
        <div className='rounded-md border-2  shadow-sm shadow-gray-200 bg-white mb-4'>
            <div className='flex flex-1 justify-between p-2 items-center'>
                <div className='h-12 w-12 bg-gray-300 rounded-md'>
                    <img src={url} className="w-full h-full object-cover  object-center" />
                </div>
                <div className='w-full ml-2'>
                    <h4 className='font-bold flex'>{title} {following ? (<span className="ml-2 text-blue-600 font-sans">seguir</span>) : (<span className='ml-2 font-sans text-sm text-gray-400'>siguiendo</span>)}</h4>
                    <p className='text-sm font-semibold text-gray-700'>{time}</p>
                </div>
                <div className='w-12 text-center '><i className='fas fa-ellipsis-h'></i> </div>
                <div className='w-12 text-center'><i className='fas fa-times'></i> </div>
            </div>
            <div>
                {text}
            </div>
            <div className='h-96 bg-gray-300 w-full'>
                <img src={url} className="w-full h-full object-cover  " />
            </div>

            {/* reacciones */}
            <div className='flex flex-1 justify-between px-3 py-2'>
                <div className='flex'>
                    {emojis.map(item => (
                        <button > <i className={item}></i> </button>
                    ))}
                    <p className='ml-2'>{reactions}</p>
                </div>
                <div className='flex text-md'>
                    <div className='whitespace-nowrap mr-5'><p>20 comentarios</p></div>
                    <div className='whitespace-nowrap'><p>20 veces compartido</p> </div>
                </div>
            </div>
            <hr className='mx-3' />
            <div className='flex justify-between items-center p-3'>
                <div className='w-full flex justify-center items-center '> <i className="mr-3 fa-regular fa-thumbs-up"></i><p>Me gusta</p></div>
                <div className='w-full flex justify-center items-center '> <i className="mr-3 fa-regular fa-comment"></i><p>Comentar</p></div>
                <div className='w-full flex justify-center items-center '> <i className="mr-3 fa-regular fa-paper-plane"></i> <p>Enviar</p></div>
                <div className='w-full flex justify-center items-center '> <i className="mr-3 fa-regular fa-share-from-square"></i> <p>Compartir</p></div>
            </div>

        </div>
    )
}

export default CardPost