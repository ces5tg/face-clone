import React, { useState } from 'react'

const CreatePost: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    return (

        <>
            <div className='p-2 bg-white border-2 shadow-gray-200 rounded-xl shadow-sm shadow-gray-200'>
                <div className='flex flex-1 '>
                    <div className="">
                        <span className="flex justify-center items-center bg-slate-100 h-12 w-12 text-2xl rounded-full text-black "><i className="fas fa-user-circle" ></i></span>
                    </div>
                    <div onClick={() => setIsOpen(true)} className=' flex items-center w-full bg-gray-100 rounded-full ml-2 pl-4 text-xl'  ><p>¿Que estas pensando , Cesar?</p></div>
                </div>
                <hr className='mx-4  mt-4 mb-2 flex flex-1' />
                <div className='flex justify-between items-center mb-1 mx-3 font-semibold'>
                    <div className='flex justify-center w-full hover:bg-gray-100 hover:rounded-md py-2 px-5'> <i className='fas fa-video text-red-500 text-2xl'></i> <p className='pl-3 '>Video en vivo</p> </div>
                    <div className='flex justify-center w-full hover:bg-gray-100 hover:rounded-md py-2 px-5'> <i className='fa-regular fa-image text-green-400 text-2xl'></i> <p className='pl-3 '>Foto/video</p> </div>
                    <div className='flex justify-center w-full hover:bg-gray-100 hover:rounded-md py-2 px-5'> <i className='fa-regular fa-smile text-orange-400 text-2xl'></i> <p className='pl-3 '>Sentimiento/actividad</p> </div>
                </div>

            </div>
            {/* Modal */}
            {isOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white w-[500px] p-4 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center border-b pb-2">
                            <h2 className="text-lg font-bold">Crear publicación</h2>
                            <button onClick={() => setIsOpen(false)}>
                                <i className="fas fa-times text-gray-500"></i>
                            </button>
                        </div>
                        <div className="mt-4">
                            <textarea className="w-full h-32 border p-2 rounded-lg" placeholder="¿Qué estás pensando, Cesar?"></textarea>
                        </div>
                        <div className="mt-4">
                            <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Publicar</button>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}

export default CreatePost