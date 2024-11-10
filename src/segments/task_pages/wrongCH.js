import React, {useState, useEffect} from 'react'
import { useParams, useNavigate, replace, Link } from 'react-router-dom'
import BBYOIL from "../../assest/NOBGBABYOIL.png"
import ANGRYPDIDDY from "../../assest/NOBGANGRYP.DIDDY.png"
import PHONEPNG from "../../assest/NOBGPHONE.png"

function WrongCH() {

    const navigate = useNavigate();
    const { value } = useParams();
    const [RenderText, setRenderText] = useState([])

    useEffect(() => {

      switch (value) {
        case "phone":
            setRenderText(["Roszat választottál","Az a telefon amelyet választottál az egyik meghívott emberé volt észre vette hogy elvette ezért megölt de nem is tudtál volna vele kijutni mert P.Diddy nem szereti a technologiát nem tudtad volna használni a kijutáshoz",PHONEPNG,"20%"])
          break;
  
        case "babyoil":
            setRenderText(["P.Diddy észre vette hogy elvetétek a Baba olaját","Nem kellet volna elvenned P.Diddy baby oilját nagy becsben tartja őket...",BBYOIL,"30%"])
          break;
      }

      if (value === undefined || value === null) navigate("/",{replace:true})
      
    }, [value])

    console.log(value)

  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className='w-[60%] h-[80%] bg-sky-200 rounded-3xl'>
        <div className='w-full h-[30%] flex justify-center items-center'>
          <div className='w-max h-max'>
            <h1 className='text-[260%]'>{RenderText[0]}</h1>
          </div>
        </div>
        <div className='w-full h-[70%]'>
          <div className='w-full h-[60%] flex justify-center items-center'>
            <div className='w-[50%] text-xl h-max text-center'>
              <p>{RenderText[1]}</p>
            </div>
            <img src={RenderText[2]} width={RenderText[3]} className='-z-10 absolute top-0 right-20 rotate-45' />
            <img src={ANGRYPDIDDY} width={"13%"} className='-z-10 absolute top-10 left-[12%] -rotate-[30deg]' />
          </div>
          <div className='w-full h-[40%] flex justify-center items-center'>
            <button onClick={() => navigate("/")} className='w-[30%] h-[25%] text-xl hover:text-2xl hover:w-[40%] duration-100 bg-green-400 hover:border-green-400 rounded-full border-2 border-white'>Ujrakezdés</button>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default WrongCH