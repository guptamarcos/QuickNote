import { Link } from "react-router-dom";
function Popup() {
  return (
    <main className="flex justify-center absolute h-[89vh] w-[100%] overflow-hidden z-99">
      <form className="max-h-max w-[35%] p-[1rem] bg-[#ffffff] rounded-xl">
        <div>
          <label className="flex w-[100%] justify-between">
            <span>TITLE</span>
            <span className="cursor-pointer text-2xl">&#215;</span>
          </label>
          <input
            placeholder="Go To Gym At 5"
            type="text"
            className="text-2xl w-[80%] font-medium px-[0.6rem] py-[0.4rem] text-gray-500 bg-sky-50 rounded-lg"
          ></input>
        </div>
        <div className="my-4">
          <label className="mb-2">CONTENT</label> <br />
          <textarea placeholder="Content" className="h-[12.5rem] w-[100%] bg-sky-50 rounded-xl p-[0.6rem]"></textarea>
        </div>
        <div>
          <label className="mb-2">TAGS</label> <br />
          <input
            placeholder="Add tags"
            type="text"
            className="p-[0.5rem] bg-sky-50 rounded-lg "
          ></input>
          <Link to="" className="px-[0.8rem] border-2 py-[0.5rem] bg-sky-50 rounded-xl ml-[0.4rem] text-lg text-blue-800 cursor-pointer">
            &#43;
          </Link>
        </div>
        <button className="text-lg w-[100%] py-[0.4rem] bg-sky-400 text-white mt-[1rem] rounded-sm cursor-pointer">
          Add
        </button>
      </form>
    </main>
  );
}

export default Popup;
