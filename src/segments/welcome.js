import { Link } from "react-router-dom";
import './welcome.css'

function welcome() {


    return (
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[80%] h-screen m-auto">
            <div className="block" >
                <p className="text-4xl">
                    Képzeld el hogy Las Vegasban vagy és elmentek a barátaidal szerencsejátékozni de elbukjátok mindeneteket. 
                </p>
            </div>
            <div className="block" >
                <p className="text-4xl">
                Viszont pont van elég pénzetek egy P. Diddy koncertre. 
                </p>
            </div>
            <div className="block" >
                <p className="text-4xl">
                    Elmentek sőt első sorban vagytok és P. Diddy felhív titeket a színpadra.
                </p>
            </div>
            <div className="block" >
                <p className="text-4xl">
                Elérkeztek a koncert végére bementek P. Diddy-vel a backstageba.
                </p>
            </div>
            <div className="block">
                <p className="text-4xl">
                Meg invitál titeket egy partyba...
                </p>
            </div>
            <div className="h-[100vh] w-full flex justify-center items-center">
                
                <Link to={"/start"} className="absolute z-10 text-2xl hover:text-4xl duration-100 mt-10">Folytatás</Link>    
                <div className="orb">
                </div>
                
            </div>
        </div>
     </div>
    );
  }
  
  export default welcome;