import React from 'react'
import Image from 'next/image'
function Header() {
    return (
        <header className='w-[95%] mx-auto bg-white py-4 px-6 rounded-bl-4xl rounded-br-4xl'>
            <div className='flex items-center justify-between'>
                <div className='logoContainer'>
                    <p className=' text-2xl font-bold'>logo</p>
                </div>
                <div>
                    <div className="flex items-center border border-gray-200 rounded-full px-4 py-1 bg-gray-200 focus-within:ring-2 focus-within:ring-blue-100">
                        <input type="text" placeholder="Search..." className="bg-transparent outline-none flex-grow text-gray-600 placeholder-gray-400" />
                        <button className="text-white bg-purple-600 rounded-full p-2 hover:bg-purple-700 cursor-pointer">
                            <Image src="/search2.png" width={20} height={20} alt='logo' />
                        </button>
                    </div>

                </div>
            </div>

        </header>
    )
}

export default Header