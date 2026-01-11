import CardDashBoard from "./CardDashboard";
import Popup from "./Popup";
import { Link } from "react-router-dom";

function DashBoard(){
    return ( 
      <main className="mt-[11vh] min-h-[80vh] bg-amber-50 grid grid-cols-3 grid-rows-auto gap-[1.25rem] py-[3rem] px-[7rem] relative">
        <CardDashBoard/>
        <CardDashBoard/>
        <CardDashBoard/>
        <CardDashBoard/>
        <Link to="#" className="h-[3.5rem] w-[4rem] rounded-2xl text-5xl text-amber-50 bg-sky-500 text-center fixed bottom-6 right-6 z-99" > &#43;</Link>
        {/* <Popup/> */}
      </main>
    )
}

export default DashBoard;