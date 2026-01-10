import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="h-[11vh] w-[100vw] top-0 fixed bg-[#E0E7FF] px-16 py-4  border-b-3 border-stone-300 z-[99]">
      <nav className="flex justify-between items-center">
        <h2 className="text-4xl text-[#1E1B4B] font-medium">QuickNote 📝</h2>
        <h4 className="text-2xl text-[#3730A3] font-medium">
          Capture ideas instantly
        </h4>
        <ul className="flex justify-between items-center gap-x-6">
          <li className="bg-[#4F46E5] text-[#FFFFFF] py-2 px-4 text-xl rounded-xl hover:bg-[#4338CA] hover:cursor-pointer">
            <Link to="/quicknote/signup">Get Started</Link>
          </li>
          <li className="bg-[#FFFFFF] text-[#1F2937] py-2 px-4 text-xl rounded-xl border border-[#E5E7EB] hover:bg-[#F9FAFB] hover:cursor-pointer">
             <Link to="/quicknote/login">LogIn</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
