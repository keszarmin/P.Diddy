import React, {useState} from 'react'
import KEYPNG from "../../assest/NOBGGOLDENKEY.png"
import BLACKDOOR from "../../assest/NOBGBLACKDOOR.png"
import BROWNDOOR from "../../assest/NOBGBROWNDOOR.png";
import WOODDOOR from "../../assest/NOBGWOODDOOR.png"
import {useNavigate } from 'react-router-dom';

const DropOBJ = ({OnDrahStart}) => {
    return (
        <>
            <div className='w-[15%] flex items-center justify-center'>
                <img className='bounce' src={KEYPNG} draggable={true} />
            </div>
        </>
    )
}

const DropArea = ({OnDrop,OnDragOver}) => {
    return (
        <>
        <div className='w-full h-[20%]'>
            <div className='w-full h-[80%] flex justify-center items-center'>
                <h1 className='text-[290%]'>Húzd a kulcsot a megfelelő ajtóhoz</h1>
            </div>
            <div className='w-full h-[20%] flex justify-center items-center'>
                <p className='text-[170%]'>Minden ajtó felé oda van irva mi van möggöte</p>
            </div>
        </div>
        
        <div className='w-full h-[80%] flex justify-center items-center'>
            <DropOBJ />
            <div className='w-[85%] flex justify-evenly items-center'>
                <div className='w-max h-max flex justify-center items-center'>
                    <div className='w-max h-max text-center'>
                        <p>42 61 62 61 20 6F 6C 61 6A</p>
                        <img id='1' src={BLACKDOOR} onDrop={OnDrop} onDragOver={OnDragOver} />
                    </div>
                </div>  
                <div className='w-max h-max flex justify-center items-center'>
                    <div className='w-max h-max text-center'>
                        <p>6B 69 6A E1 72 61 74</p>
                        <img id='2' src={BROWNDOOR} onDrop={OnDrop} onDragOver={OnDragOver}/>
                    </div>
                </div>  
                <div className='w-max h-max flex justify-center items-center'>
                    <div className='w-max h-max text-center'>
                        <p>50 2E 44 69 64 64 79</p>
                        <img id='correct' src={WOODDOOR} onDrop={OnDrop} onDragOver={OnDragOver}    />
                    </div>
                </div>  
            </div>
        </div>
        </>
    )
}




function Feladat_3({setData}) {
   
    const [IsBlured, setIsBlured] = useState(["none","none"])
    const navigate = useNavigate();

    const handleDrop = (event) => {
        event.preventDefault();
        const target = event.target.id;
        if (target == "correct") {
           setData(["block","block","block"]) 
           setIsBlured(["block","blur(10px)"])
        } else console.warn("n");
    }

    const handleDragStop = (event) => {
        event.preventDefault();
    }
    
  return (
        <>

            <div style={{display:IsBlured[0]}} className='fixed top-[10%] left-[10%] justify-center items-center w-[60%] h-[80%] bg-sky-200 rounded-3xl z-10'>
                <div className='w-full h-[40%]'>
                    <div className='w-full h-[80%] flex justify-center items-center'>
                        <h1 className='text-[360%] h-max w-max'>Kijutottatok!</h1>
                    </div>
                    <div className='w-full h-[20%] flex justify-center items-center'>
                        <p className='text-2xl'>Sikeresen teljesítettétek a P.Diddy szabadúló szobát</p>
                    </div>
                </div>
                <div className='w-full h-[60%] flex justify-center items-center'>
                    <button onClick={() => navigate("/About")} className='w-[30%] h-[15%] text-xl hover:text-2xl hover:w-[40%] duration-100 bg-green-400 hover:border-green-400 rounded-full border-2 border-white'>Tovább</button>
 
                </div>
            </div>

            <div className='w-[80%] flex justify-center items-center' style={{filter:IsBlured[1]}}>
                <div className='w-full m-auto'>
                    <div className="block text-center h-screen" >
                        <p className="text-4xl">
                            Most hogy megvagytok P.Diddy-vel és nem sejt semmit. 
                        </p>
                    </div>
                    <div className="block text-center h-screen" >
                        <p className="text-4xl">
                            Ki kell találnotok melyik ajtóhoz lesz a jó a kulcs amelyet szereztetek
                        </p>
                    </div>
                </div>
            </div>       
        
            <div className='w-[80%] h-screen' style={{filter:IsBlured[1]}}>

                <DropArea OnDrop={handleDrop} OnDragOver={handleDragStop} />
            </div>
        
        </>
  )
}

export default Feladat_3