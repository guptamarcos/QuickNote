import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { ShowPopupContext } from "../context/showPopup";

function Popup() {
  const { setShowPopup } = useContext(ShowPopupContext);

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start">
      
      <form className="mt-[7.5%] w-[35%] p-4 bg-white rounded-xl">
        <div>
          <label className="flex w-full justify-between">
            <span>TITLE</span>
            <span className="cursor-pointer text-2xl" onClick={() => setShowPopup(false)}>
              &#215;
            </span>
          </label>

          <input placeholder="Go To Gym At 5" type="text" className="text-2xl w-[80%] font-medium px-[0.6rem] py-[0.4rem] text-gray-500 bg-sky-50 rounded-lg"/>
        </div>

        <div className="my-4">
          <label className="mb-2">CONTENT</label>
          <textarea placeholder="Content" className="h-40 w-full bg-sky-50 rounded-xl p-[0.6rem]"/>
        </div>

        <div>
          <label className="mb-2">TAGS</label>
          <br />
          <input placeholder="Add tags" type="text" className="p-2 bg-sky-50 rounded-lg"/>
          <Link to="" className="px-[0.8rem] border-2 py-2 bg-sky-50 rounded-xl ml-[0.4rem] text-lg text-blue-800">
            &#43;
          </Link>
        </div>

        <button className="text-lg w-full py-[0.4rem] bg-sky-400 text-white mt-4 rounded-sm">
          Add
        </button>
      </form>
    </div>
  );
}

export default Popup;
