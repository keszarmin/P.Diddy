import { Outlet } from "react-router-dom";
import TICK from "../assest/NOBG_TICK.png"

function Map({Data}) {
    return (
    <>
      <nav className="fixed bg-white right-0 w-[20%] h-screen border-l-2 border-gray-600 flex justify-center items-center">
        <div className="w-[60%] h-full">
            <div className="w-full h-1/3 flex justify-center items-center">
                <div className="m-auto w-[80%] border-2 h-[60%] rounded-full flex justify-center items-center">
                    <img className="hidden" style={{display:Data[0]}} src={TICK} />
                </div>
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
                <div className="m-auto w-[80%] border-2 h-[60%] rounded-full flex justify-center items-center">
                    <img className="hidden" style={{display:Data[1]}} src={TICK} />
                </div>
            </div>
            <div className="w-full h-1/3 flex justify-center items-center">
                <div className="m-auto w-[80%] border-2 h-[60%] rounded-full flex justify-center items-center">
                    <img className="hidden" style={{display:Data[2]}} src={TICK} />
                </div>
            </div>
        </div> 
      </nav>
    <Outlet />
    </>     
    );
}
  
export default Map;