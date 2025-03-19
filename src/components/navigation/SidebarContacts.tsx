import React from 'react'
import AdsBanner from '../publish/AdsBanner'

interface IItemAds{
    title:string,
    link:string,
    url:string,
}
const SidebarContacts = () => {

  const itemsAds:IItemAds[] = [
    {
        title: "Renueva tu celu con el nuevo Galaxy",
        link:"miportal.entel.pe",
        url:"img.jpg"
    },
    {
        title: "Ser medico es tu futuro",
        link:"ip.ucontinental.edu.pe",
        url:"img.jpg"
    },
  ]

  return (
    <div className='w-full '>
        <h2 className='mb-2 ml-3 font-semibold text-lg'>Publicidad</h2>
        {itemsAds.map((item) =>{

            return (
                <AdsBanner link={item.link} title={item.title} url={item.url} ></AdsBanner>
            )
        })}
        <hr className='mx-3 my-2' />
    </div>
  )
}

export default SidebarContacts