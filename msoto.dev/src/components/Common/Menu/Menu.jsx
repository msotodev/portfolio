function Menu() {
    return (
        <nav className='flex flex-col justify-center items-center w-[150px]'>
            <ul>
                <li className='cursor-pointer hover:bg-[#FFFFFF20]'>
                    <a href="#Projects">
                        <img className="p-[5px] sm:p-[10px]" src="https://img.icons8.com/?size=35&id=rt7E3Z37UZuZ&format=png&color=EBEBEB" alt="" />
                    </a>
                </li>
                <li className='cursor-pointer hover:bg-[#FFFFFF20]'>
                    <a href="#TechnicalSkills">
                        <img className="p-[5px] sm:p-[10px]" src="https://img.icons8.com/?size=35&id=100041&format=png&color=EBEBEB" alt="" />
                    </a>
                </li>
                <li className='cursor-pointer hover:bg-[#FFFFFF20]'>
                    <a href="#ContactMe">
                        <img className="p-[5px] sm:p-[10px]" src="https://img.icons8.com/?size=35&id=7819&format=png&color=EBEBEB" alt="" />
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;