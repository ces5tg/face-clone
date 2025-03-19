import React from 'react'
import Navbar from '../navigation/Navbar'
import SidebarMain from '../navigation/SidebarMain'
import { Outlet } from 'react-router-dom'
import Footer from '../navigation/Footer'
import SidebarContacts from '../navigation/SidebarContacts'

const MainLayout: React.FC = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='xl:mx-auto md:mr-4 md:ml-6 mr-1 ml-2 xl:container flex flex-1 mt-[4rem] bg-gray-50'>
                <div className="grid grid-cols-1 md:grid-cols-7 lg:grid-cols-9 gap-10 w-full">
                    <div className="hidden lg:block lg:col-span-2">
                        <SidebarMain />
                    </div>

                    <div className="col-span-1 md:col-span-5  mt-4">
                        <main className="w-full">
                            <Outlet />
                        </main>
                    </div>

                    <div className="hidden md:col-span-2 md:block mt-4 w-full ">
                        <SidebarContacts />
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default MainLayout