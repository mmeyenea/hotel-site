const Footer = () => {
  return (
    <>
        <div className="flex h-[90px] justify-around items-center  gap-[40px] align-middle  w-full bg-[hsl(0,0%,26%)] ">
            <div>
                <p className="text-center flex items-center justify-center pl-[600px]">KOKKARI    |     EVVIA</p>
                <p className="w-[500px] text-center text-[20px]">
                KOKKARI ESTIATORIO
                200 Jackson Street (at Front St.)
                San Francisco, CA 94111
                p: <span>415.981.0983</span>
                </p>
            </div>
            <div>
                <p className="text-blue-600">
                © 2015-2024 Kokkari
                </p>
            </div>
        </div>
    </>
  )
}

export default Footer