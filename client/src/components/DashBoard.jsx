import CardDashBoard from "./CardDashboard";
import Popup from "./Popup";
import { Link } from "react-router-dom";
import {ShowPopupContext,} from "../context/showPopup.jsx";
import { useContext } from "react";

function DashBoard() {
  const {showPopup, setShowPopup} = useContext(ShowPopupContext);
  return (
    <main className="mt-[11vh] min-h-[80vh] bg-amber-50 grid grid-cols-3 grid-rows-auto gap-5 py-12 px-28">
      <CardDashBoard />
      <CardDashBoard />
      <CardDashBoard />
      <CardDashBoard />
      <CardDashBoard />
      <CardDashBoard />
      <CardDashBoard />
      <CardDashBoard />
      <Link to="#" onClick={()=>setShowPopup(true)} className="h-14 w-16 rounded-2xl text-5xl text-amber-50 bg-sky-500 text-center fixed bottom-6 right-6 z-99">
        &#43;
      </Link>
      {showPopup && <Popup/>}
    </main>
  );
}

export default DashBoard;
