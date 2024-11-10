import React,{useEffect, useState} from 'react'
import { useParams,useNavigate } from 'react-router-dom'
import BBYOIL from "../../assest/NOBGBABYOIL.png"
import DDY from "../../assest/P.Diddy-full-body.png"

function WrongCH_2({SetData}) {

    const {value} = useParams();
    const navigate = useNavigate();
    const [Style, setStyle] = useState([])

    useEffect(() => {
      SetData(["block","block"])
      
      switch (value) {
        case "BBYOIL":
            setStyle(["block","Aj, Aj, ez nem talált!","none"])
            break;
        case "PDIDDY":
            setStyle(["none","P.Diddy volt az ajtó mögött!"])
            break;
      }

    }, [])
    

    return (
    <div className='w-screen h-screen flex justify-center items-center '>
        
        <div className=' absolute -z-20 top-0 left-[40%] rotate-12'>
            <img src={BBYOIL}/>
        </div>
        <div className=' absolute -z-10 top-[4%] left-[30%] -rotate-12'>
            <img src={BBYOIL}/>
        </div>
        <div style={{display:Style[0]}} className=' absolute -z-10 right-[15%] top-0 rotate-45'>
            <img src={BBYOIL}/>
        </div>
        <div style={{display:Style[0]}} className=' absolute -z-10 left-[15%] top-[10%] -rotate-45'>
            <img src={BBYOIL}/>
        </div>
              

        <div className='w-[40%] h-[60%] bg-red-300 rounded-3xl z-[1]'>
            <div className='w-full h-[70%] flex justify-center items-center'>
                <h1 className='text-[240%] z-[2]'>{Style[1]}</h1>
                <img style={{display:Style[2]}} className='absolute z-[1] top-[20%] ml-[20%]' width={"20%"} src={DDY} />
            </div>
            <div className='w-full h-[30%] flex justify-center items-center'>
            <button onClick={() => navigate("/feladat_3/")} className='w-[30%] z-[2] h-[35%] text-xl hover:text-2xl hover:w-[40%] duration-100 bg-green-400 hover:border-green-400 rounded-full border-2 border-white'>Tovább</button>
            </div>
        </div>
    </div>
  )
}

export default WrongCH_2