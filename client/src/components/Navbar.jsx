import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="h-[11vh] w-screen top-0 fixed bg-[#E0E7FF] px-16 py-4  border-b-3 border-stone-300 z-40">
      <nav className="flex justify-between items-center">
        <h2 className="text-4xl text-[#1E1B4B] font-medium">QuickNote 📝</h2>
        <h4 className="text-2xl text-[#3730A3] font-medium">
          Capture Ideas Instantly
        </h4>
        <ul className="flex justify-between items-center gap-x-6">
          <li className="bg-[#4F46E5] text-[#FFFFFF] py-2 px-4 text-xl rounded-xl hover:bg-[#4338CA] hover:cursor-pointer">
            <Link to="/quicknote/signup">Get Started</Link>
          </li>
          <li className="bg-[#FFFFFF] text-[#1F2937] py-2 px-4 text-xl rounded-xl border border-[#E5E7EB] hover:bg-[#F9FAFB] hover:cursor-pointer">
             <Link to="/quicknote/login">LogIn</Link>
          </li>
        </ul>
        {/* <form>
          <input
            className="w-[15vw] py-[0.4rem] px-[0.6rem] bg-[#F3F4F6] text-[#111827] placeholder-[#9CA3AF] text-lg rounded-xl border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
            type="text"
            placeholder="Search Here.."
            required
          />
          <button className="ml-1">
            <i className="fa-solid fa-magnifying-glass py-[0.65rem] px-[0.65rem] bg-[#F3F4F6] text-[#9CA3AF] text-lg rounded-xl border border-[#D1D5DB] cursor-pointer"></i>
          </button>
        </form>
        <div className="flex gap-[0.5rem] items-center">
          <div className="bg-[#b5c2ee] py-[0.6rem] px-[0.8rem] rounded-[50%] text-xl flex justify-between items-center">
            TU
          </div>
          <div className=" p-[0.4rem] flex flex-col justify-center align-center ">
            <p>Username</p>
            <Link to="/quicknote/home" className="underline">
              Logout
            </Link>
          </div>
        </div> */}
      </nav>
    </header>
  );
}

export default Navbar;
