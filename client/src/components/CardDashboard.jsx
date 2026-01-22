import { useContext,useState } from "react";
import { EditPopupContext } from "../context/EditPopupContext";
import axios from "axios";

function CardDashBoard({task,onDelete}) {
  const {setEditTaskData, setShowEditPopup} = useContext(EditPopupContext);
  const [isPinned, setIsPinned] = useState(task.isPinned || false);

  async function handleDelete(){
    onDelete(task._id);
  }

  function handleEdit(){
    setShowEditPopup(true);
    setEditTaskData(()=>({
      ...task
    }));
  }
  
  async function handlePinned(evt){
    try{
      await axios.patch(`http://localhost:4000/api/tasks/${task._id}/isPinned`,{isPinned: !isPinned}, {withCredentials: true});
      setIsPinned((prev)=>!prev);
    }catch(err){
      console.log(err);
    }
    console.log(evt.target);
  }

  return (
    <div className="h-60 flex flex-col bg-white border border-slate-200 hover:bg-slate-50 p-4 rounded-xl hover:scale-102 duration-200">
      <h4 className="flex justify-between">
        <span className="font-semibold text-lg">
          {task.title}
        </span>
        <i onClick={handlePinned} className= { `fa-solid fa-thumbtack cursor-pointer ${isPinned? "text-black": "text-gray-500"} `}></i>
      </h4>
      <p className="py-2">
        <i>{new Date(task.createdAt).toLocaleString()}</i>
      </p>
      <p className="max-h-26 overflow-y-hidden leading-[1.55rem]">
        {task.content}
      </p>
      <div className="mt-auto flex justify-between items-center">
        <div className="flex">
          {task.tags.map((tag,index)=>{
            return <h6 key={index}>#{tag} &nbsp;</h6>
          })}
        </div>
        <div className="flex gap-4 ">
          <button type="button" onClick={handleEdit}>
            <i className="fa-solid fa-pen text-gray-500 cursor-pointer"></i>
          </button>
          <button type="button" onClick={handleDelete} >
            <i className="fa-solid fa-trash text-gray-500 cursor-pointer"></i>
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardDashBoard;
