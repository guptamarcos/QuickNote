import { useContext,useEffect,useState } from "react";
import { CardDashBoard , Popup, EditPopup} from "./Index.jsx";
import { ShowPopupContext } from "../context/ShowPopup.jsx";
import { EditPopupContext } from "../context/EditPopupContext.jsx"
import axios from "axios";
import { toast } from "react-toastify";

function DashBoard() {
  const { showPopup, setShowPopup } = useContext(ShowPopupContext);
  const { showEditPopup } = useContext(EditPopupContext);

  const [tasks , setTasks] = useState([]);

  const fetchTasks = async () =>{
    try{
      let res = await axios.get("http://localhost:4000/api/tasks",{withCredentials: true});
      setTasks(res.data.allTasks);
    }catch(err){
      console.log(err);
    }
  }

  useEffect(()=>{
    fetchTasks();
  },[]);
   

  async function onDelete(taskId){
    try{
      let res = await axios.delete(`http://localhost:4000/api/tasks/${taskId}`, {withCredentials: true});
      setTasks((prev)=> prev.filter((task)=> task._id !==taskId));

      if(res.status === 200){
        toast.success("Task is deleted successfully!!");
      }
    }catch(err){
        toast.error("Something went wrong!!");
      console.log(err);
    }
  }

  return (
    <main className="mt-[11vh] min-h-[80vh] bg-amber-50 grid grid-cols-3 grid-rows-auto gap-5 py-12 px-28">
      {!tasks.length && <h1 className="text-4xl text-center mt-12">Please add the tasks!!!</h1>}

      {tasks.length>0 && tasks.map((task)=>(
        <CardDashBoard key={task._id} task={task} onDelete={onDelete} fetchTasks={fetchTasks}/>
      ))}

      <button type="button" onClick={() => setShowPopup(true)}
        className="p-[1rem] rounded-2xl text-lg text-amber-50 cursor-pointer bg-sky-500 flex justify-center items-center fixed bottom-18 right-9 z-99"
      >
      Add Task
      </button>
      {showPopup && <Popup fetchTasks={fetchTasks}/>}
      {showEditPopup && <EditPopup fetchTasks={fetchTasks}/>}
    </main>
  );
}

export default DashBoard;
