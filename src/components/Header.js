import { AiOutlineSearch } from 'react-icons/ai';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaUserSecret } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
export default function Header() {

    const headerHeight = 64;
    const headerRef = useRef();
    useEffect(() => {
        window.addEventListener('scroll', function (e) {
            let scrollY = this.scrollY;
            if (scrollY > headerHeight) {
                headerRef.current.classList.add('fixed');
            } else {
                headerRef.current.classList.remove('fixed');
            }
        });
    }, []);

    return (
        <div className="flex items-center  z-40 w-full justify-between h-16 px-8 bg-black bg-opacity-90 transition-all" ref={headerRef}>
            <div className="flex gap-x-8 items-center">
                <div className="text-3xl text-red-700 font-bold">
                    Cloneflix
                </div>
                <div className="flex gap-x-4">
                    <a href="#" className="text-white text-sm">Anasayfa</a>
                    <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Diziler</a>
                    <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Filmler</a>
                    <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Yeni ve Popüler</a>
                    <a href="#" className="text-gray-300 text-sm hover:text-white transition-colors">Listem</a>
                </div>
            </div>
            <div className="flex gap-x-4">
                <AiOutlineSearch className="text-white" size={25} />
                <IoIosNotificationsOutline className="text-white" size={25} />
                <FaUserSecret className="text-white" size={25} />
            </div>
        </div>
    )
}
