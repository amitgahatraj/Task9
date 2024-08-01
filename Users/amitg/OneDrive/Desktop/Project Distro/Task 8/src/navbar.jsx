function Navbar() {
  return (
    <nav className="bg-black shadow-md ">
      <div className="max-w-7xl mx-0 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a href="https://www.ufc.com/" className="text-xl font-bold">
                <img
                  src="../src/assets/ufclogo.png"
                  className="h-16 w-16 align-top rounded-full"
                />
              </a>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-20">
            <a href="https://www.ufc.com/events" className="text-white">
              Events
            </a>
            <a href="https://www.ufc.com/rankings" className="text-white ">
              Rankings
            </a>
            <a href="https://www.ufc.com/athletes" className="text-white ">
              Athletes
            </a>
            <a href="https://www.ufc.com/trending/all" className="text-white">
              News
            </a>
            <a href="https://www.ufc.com/tuf" className="text-white ">
              TUF 32
            </a>
            <a href="https://www.ufc.com/newsletter" className="text-white ">
              Connect
            </a>
            <a href="https://www.ufc.com/watch" className="text-white ">
              Watch
            </a>
            <a
              href="https://ufcstore.com/en/?_s=bm-ufccom-Main-Navigation"
              className="text-white "
            >
              Shop
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
