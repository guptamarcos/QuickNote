import { useContext, useEffect, useState } from "react";
import { ShowPopupContext } from "../context/ShowPopup";
import axios from "axios";
import { toast } from "react-toastify";

function Popup({fetchTasks}) {
  const { setShowPopup } = useContext(ShowPopupContext);
  const [tagInput, setTagInput] = useState("");
  const [inputInfo, setInputInfo] = useState({
    title: "", content: "", tags: [],
  });

  // Disable background scroll
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  
  async function handleSubmit(evt){
    evt.preventDefault();
    try{
      const res = await axios.post("http://localhost:4000/api/tasks", inputInfo, {withCredentials: true});
      setShowPopup(false);
      fetchTasks();
      if(res.status === 200){
        toast.success("Task Edited successfully!!");
      }
    }catch(err){
      toast.error("Something went wrong!!!");
      console.log(err);
    }
  }
  
  function inputVal(evt){
    const {name,value} = evt.target;
    setInputInfo((prev)=>({
      ...prev,
      [name]: value
    }))
  };

  function addTag(){
    // TO AVOID EMPTY TAGS
    if(!tagInput.trim()) return;

    setInputInfo((prev)=>({
      ...prev,
      tags: [...prev.tags,tagInput.trim()]
    }));
    setTagInput("");
  }

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex justify-center items-start">
      <form onSubmit={handleSubmit} className="mt-[7.5%] w-[35%] p-4 bg-white rounded-xl">
        <div>
          <label className="flex w-full justify-between">
            <span>TITLE</span>
            <span className="cursor-pointer text-2xl" onClick={() => setShowPopup(false)}>
              &#215;
            </span>
          </label>

          <input
            placeholder="Go To Gym At 5" type="text" name="title" onChange={inputVal}
            className="text-2xl w-[80%] font-medium px-[0.6rem] py-[0.4rem] text-gray-500 bg-sky-50 rounded-lg"
          />
        </div>

        <div className="my-4">
          <label className="mb-2">CONTENT</label>
          <textarea
            placeholder="Content" name="content" onChange={inputVal}
            className="h-40 w-full bg-sky-50 rounded-xl p-[0.6rem]"
          />
        </div>

        <div>
          <label className="mb-2">TAGS</label>
          <br />
          <input placeholder="Add tags" value={tagInput} type="text" name="tags" onChange={(e)=>setTagInput(e.target.value)} className="p-2 bg-sky-50 rounded-lg"/>
          <div className="flex gap-2 mt-2 flex-wrap">
            {inputInfo.tags.length>0 && inputInfo.tags.map((val,idx)=>(
            <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
              #{val}
            </span>
          ))} 
          </div>
          <button type="button" onClick={addTag} className="px-[0.8rem] cursor-pointer border-2 py-2 bg-sky-50 rounded-xl ml-[0.4rem] text-lg text-blue-800">
            &#43;
          </button>
        </div>

        <button className="text-lg w-full py-[0.4rem] bg-sky-400 cursor-pointer text-white mt-4 rounded-sm">
          Add
        </button>
      </form>
    </div>
  );
}

export default Popup;
