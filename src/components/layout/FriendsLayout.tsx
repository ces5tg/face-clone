import React from 'react'
import Navbar from '../navigation/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../navigation/Footer'
import SidebarFriends from '../navigation/sidebarFriends/SidebarFriends'

const FriendsLayout: React.FC = () => {
    return (
        <div className='flex flex-col h-screen'>
            <Navbar />
            <div className='mr-2 ml-2 flex flex-1 mt-[4rem] bg-gray-50'>
                <div className="w-full flex">
                    <div className="min-w-80 mr-2">
                        <SidebarFriends />
                    </div>

                    <div className="w-full mt-4">
                        <main className="w-full">
                            <Outlet />
                        </main>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    )
}

export default FriendsLayout