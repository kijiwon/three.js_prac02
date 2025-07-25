const Navbar = () => {
  return (
    <header className=" fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-5 mx-auto px-5">
          <a
            href="/"
            className="text-3xl text-white font-bold hover:text-white transition-colors"
          >
            home
          </a>
          <button>
            <img src={"assets/menu.svg"} alt="toggle" className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
