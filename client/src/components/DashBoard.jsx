import { useContext,useEffect,useState } from "react";
import CardDashBoard from "./CardDashboard";
import Popup from "./Popup";
import EditPopup from "./EditPopup.jsx";
import { ShowPopupContext } from "../context/ShowPopup.jsx";
import { EditPopupContext } from "../context/EditPopupContext.jsx"
import axios from "axios";

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
    }catch(err){
      console.log(err);
    }
  }

  return (
    <main className="mt-[11vh] min-h-[80vh] bg-amber-50 grid grid-cols-3 grid-rows-auto gap-5 py-12 px-28">
      {!tasks.length && <h1 className="text-4xl text-center mt-12">Please add the tasks!!!</h1>}

      {tasks.length>0 && tasks.map((task)=>(
        <CardDashBoard key={task._id} task={task} onDelete={onDelete}/>
      ))}

      <button type="button" onClick={() => setShowPopup(true)}
        className="h-14 w-16 rounded-2xl text-5xl text-amber-50 bg-sky-500 text-center fixed bottom-6 right-6 z-99"
      >
        &#43;
      </button>
      {showPopup && <Popup fetchTasks={fetchTasks}/>}
      {showEditPopup && <EditPopup fetchTasks={fetchTasks}/>}
    </main>
  );
}

export default DashBoard;
