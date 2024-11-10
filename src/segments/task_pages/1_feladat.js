import React, {useState} from 'react'
import "./1_feladat.css"
import BABYOILPNG from "../../assest/NOBGBABYOIL.png"
import PHONEPNG from "../../assest/NOBGPHONE.png"
import KEYPNG from "../../assest/NOBGGOLDENKEY.png"
import { useNavigate } from 'react-router-dom'

function Feladata_1({SetData}) {
    
    const navigate = useNavigate();

  return (
    <div className='flex justify-center items-center h-screen bg-white w-[80%]'>
        <div className="w-full h-screen m-auto">
            <div className="block text-center" >
                <p className="text-4xl">
                    Bent vagytok a partyban. 
                </p>
            </div>
            <div className="block text-center" >
                <p className="text-4xl">
                    Melletetek olyan dolgok történek amik kiakasztanak titeket... 
                </p>
            </div>
            <div className="block text-center" >
                <p className="text-4xl">
                    Úgy döntötök elhagyátok a bulit.
                </p>
            </div>
            <div className="block text-center" >
                <p className="text-4xl">
                    De ez nem ilyen egyszerű.
                </p>
            </div>
            <div className="block text-center">
                <p className="text-4xl">
                    Elöször keresnetek kell tárgyakat amelyek majd segítenek a kijutásban. (P.Diddy nem szereti a technologiát...)
                </p>
            </div>
            <div className='w-full h-full'>
                <div className='w-full h-[30%]'>
                    <div className='w-full h-1/2 flex justify-center items-center'>
                        <h1 className='text-[260%]'>Ezeket a tárgyakat látod körülötted csak egyet tudsz magadal vinni</h1>
                    </div>
                    <div className='w-full h-1/2 flex justify-center items-center'>
                        <p className='text-2xl'>Válassz egyet!</p>
                    </div>
                </div>
                <div className='w-full h-[70%] flex justify-evenly items-center'>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => { 
                            SetData(["block"])
                            navigate("/feladat_2")
                        }
                            } className='w-max h-max flex justify-center items-center'>                        
                            <img className='w-[80%] hover:w-[100%] duration-100' src={KEYPNG} ></img>
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => navigate("/wrongCH/babyoil")} className='w-max h-max flex justify-center items-center'>                        
                            <img className='w-[80%] hover:w-[100%] duration-100' src={BABYOILPNG} ></img>
                        </button>
                    </div>
                    <div className='flex justify-center items-center'>
                        <button onClick={() => navigate(`/wrongCh/phone`)} className='w-max h-max flex justify-center items-center'>                        
                            <img className='w-[80%] hover:w-[100%] duration-100' src={PHONEPNG} ></img>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feladata_1;