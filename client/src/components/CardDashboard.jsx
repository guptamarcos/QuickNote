import { Link } from "react-router-dom";

function CardDashBoard() {
  return (
    <div className="h-[15rem] bg-white border border-slate-200 hover:bg-slate-50 p-[1rem] rounded-xl hover:scale-102 duration-[0.2s]">
      <h4 className="flex justify-between">
        <span className="font-semibold text-lg">Practice mindfulness mediation</span>
        <i className="fa-solid fa-thumbtack text-gray-500 cursor-pointer"></i>
      </h4>
      <p className="py-[0.5rem]"><i>6th April 2024</i></p>
      <p className="max-h-[6.5rem] overflow-y-hidden leading-[1.55rem]">
        Mindfulness meditation is a practice of bringing deliberate attention to
        the present moment without judgment. It helps individuals become aware
        of their thoughts, emotions, and bodily sensations as they arise , By
        focusing on the breath or a single point of awareness, the mind
        gradually becomes calmer and more stable. Regular mindfulness practice
        reduces stress, anxiety, and emotional reactivity. It also improves
        concentration, clarity, and self-awareness. Over time, mindfulness
        meditation fosters emotional balance and a healthier relationship with
        one’s thoughts.
      </p>
      <div className="mt-3 flex justify-between items-center">
        <div className="flex">
          <h6>#Mindfulness</h6>
          <h6>&nbsp; #Meditation</h6>
        </div>
        <div className="flex gap-4">
          <Link to="#"><i className="fa-solid fa-pen text-gray-500 cursor-pointer"></i></Link>
          <Link to="#"><i className="fa-solid fa-trash text-gray-500 cursor-pointer"></i></Link>
        </div>
      </div>
    </div>
  );
}

export default CardDashBoard;
