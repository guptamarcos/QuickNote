import { Link } from "react-router-dom";

function Signup() {
  return (
    <main className="mt-[11vh] h-max bg-[#F9FAFB] flex justify-center items-center relative">
      <form className="bg-[#FFFFFF] h-max border border-[#E5E7EB] rounded-xl p-[2rem] my-[4rem] shadow-sm">
        
        <h2 className="text-4xl text-center font-bold text-[#111827]">LogIn</h2>

        <div className="my-[1.5rem]">
          <label className="text-[#374151] text-2xl pl-1">Enter Username</label>
          <br />
          <input
            className="w-[25vw] py-[0.6rem] px-[0.7rem] bg-[#F3F4F6] text-[#111827] placeholder-[#9CA3AF] text-lg rounded-xl border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
            type="text"
            placeholder="Enter your username here .."
            required
          />
        </div>

        <div className="my-[1.5rem]">
          <label className="text-[#374151] text-2xl pl-1">Enter Password</label>
          <br />
          <input
            className="w-[25vw] py-[0.6rem] px-[0.7rem] bg-[#F3F4F6] text-[#111827] placeholder-[#9CA3AF] text-lg rounded-xl border border-[#D1D5DB] focus:outline-none focus:ring-2 focus:ring-[#4F46E5] focus:border-[#4F46E5]"
            type="password"
            placeholder="Enter your password here .."
            required
          />
        </div>

        <div className="text-center">
          <button className="bg-[#4F46E5] text-[#FFFFFF] px-[1.5rem] py-[0.6rem] rounded-lg hover:bg-[#4338CA] transition-colors">
            LogIn          </button>
        </div>

        <br />

        <p className="text-center text-[#6B7280]">
          Didn't have an account?{" "}
          <Link to="/quicknote/signup" className="font-medium text-[#4F46E5] hover:text-[#4338CA]">SignUp</Link>
        </p>

        <Link to="/quicknote/home" className="bg-amber-400 p-[0.4rem] rounded-lg absolute top-[1.5rem] left-[1rem]">⬅Back</Link>
      </form>
    </main>
  );
}

export default Signup;
