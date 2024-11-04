import IICON from "../assest/IIcon.jpeg"
import "./start.css"
import RARROW from "../assest/Right_Arrow-removebg-preview.png"
import { useState } from "react"
import { Link } from "react-router-dom"

function Start({SetData}) {
    const [IsHidden, setIsHidden] = useState("none");
    const [IsBlurd, setIsBlurd] = useState(["blur(10px)",""])

    return (
      <div className=" bg-white w-[80%] h-screen flex justify-center items-center relative">
        <div className="w-[60%] h-[80%] text-center " style={{filter:IsBlurd[0]}}>
          <div className="w-full h-[20%] grid place-items-center">
            <div className="w-max h-min">
              <h1 className="text-6xl">Játék működése/szabályai</h1>
            </div>
          </div>
          <div className="w-full h-[40%] grid place-content-center">
            <ul className="w-full h-[90%] flex flex-col gap-10 items-start text-xl">
              <li>A jobb oldalon lévő üres karikák jelzik az adott feladatokat
                <sup className="text-lg  text-blue-500"> 
                  <button >
                    <img onMouseLeave={() => setIsHidden("none")} onMouseEnter={() => setIsHidden("block")} width="15" alt=""  src={IICON} />
                  </button>
                </sup>
              </li>
              <li>Ha egy feladatot teljesítesz abban egy pipa jelenik meg
                <sup className="text-lg  text-blue-500"> 
                  <button >
                    <img onMouseLeave={() => SetData(["none"])} onMouseEnter={() => SetData(["block"])} width="15" alt=""  src={IICON} />
                  </button>
                </sup>
              </li>
              <li>Mind a 3 feladatot teljesítened kell hogy kijuss a partyból</li>
            </ul>
          </div>
          <div className="h-[40%] w-full flex justify-center items-center">
                <Link to={"/Feladat_1"} className="absolute z-10 text-xl hover:text-2xl duration-100 mt-10">Folytatás</Link>    
                <div className="orb_">
                </div>
          </div>
        </div>

        {
        // arrows
        }
        
        <div id="arrows" style={{display: IsHidden}} className="absolute h-screen w-[20%] right-[-5%]">
          <div className="h-1/3 flex justify-center items-center">
              <img className="w-[30%]" src={RARROW} alt="" />
          </div>
          <div className="h-1/3 flex justify-center items-center">
              <img className="w-[30%]" src={RARROW} alt="" />
          </div>
          <div className="h-1/3 flex justify-center items-center">
              <img className="w-[30%]" src={RARROW} alt="" />
          </div>
        </div>
        
        <div className="blur-none absolute bg-white h-[30%] w-[40%] border-2 rounded-2xl shadow-2xl border-white" style={{display:IsBlurd[1]}}>
          <div className="h-1/2 flex justify-center items-center">
            <button className="border-2 bg-sky-500 rounded-2xl w-[60%] h-[40%] border-sky-700 hover:border-sky-500 hover:bg-sky-700 hover:text-white hover:text-lg duration-100" onClick={() => setIsBlurd(["none","none"])} >Elolvasom a játék szabályait</button>
          </div>
          <div className="h-1/2 flex justify-center items-center">
            <Link className="border-2 bg-green-500 rounded-2xl w-[70%] h-[50%] border-green-700 hover:border-green-500 hover:bg-green-700 hover:text-white hover:text-lg duration-100 flex justify-center items-center" to="/Feladat_1">Folytatom a játékot a szabályok elolvasása nélkül</Link>
          </div>
        </div>
      
      </div>
    );
}
  
export default Start;