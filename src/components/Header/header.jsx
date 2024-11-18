

const Header = () => {
  return (
    <div>
        <nav className="flex justify-around   align-middle  w-full bg-[hsl(0,0%,26%)]" style={{
          height:'108px'
        }}>
            <div className="-left-[50px] top-6 relative">
                <img src='/kokkari-logo.png' alt="" className="w-[290px] h-[80px] "/>
            </div>
            <ul className="flex gap-7 text-[26px]  text-white top-11 relative pb-[30px]" style={{fontFamily:'cinzel'}}>
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Cusines</li>
                <li className="cursor-pointer">Menus</li>
                <li className="cursor-pointer">Cook book</li>
                <li className="cursor-pointer">Reservations</li>
                <li className="cursor-pointer">Private Dining</li>
                <li className="cursor-pointer">Contact us</li>
                <li className="cursor-pointer">Blogs</li>
            </ul>
        </nav>
    </div>
  )
}

export default Header