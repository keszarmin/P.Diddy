import React, {useState} from 'react'
import "./1_feladat.css"


function Feladata_1() {
    
  return (
    <div className='flex justify-center items-center h-screen bg-white w-[80%]'>
        <div className="w-full h-screen m-auto">
            <div className="block text-center" >
                <p className="text-4xl">
                    Bent vagytok a partyban. 
                </p>
            </div>
            <div className="block" >
                <p className="text-4xl">
                    Melletetek olyan dolgok történek amik kiakasztanak titeket... 
                </p>
            </div>
            <div className="block" >
                <p className="text-4xl">
                    Úgy döntötök elhagyátok a bulit.
                </p>
            </div>
            <div className="block" >
                <p className="text-4xl">
                    De ez nem ilyen egyszerű.
                </p>
            </div>
            <div className="block">
                <p className="text-4xl">
                    Elöször keresnetek kell tárgyakat amelyek majd segítenek a kijutásban.
                </p>
            </div>
            <div className='w-full h-full bg-red-50'>
                <div className='w-full h-[20%] flex justify-center items-center'>
                    <h1 className='text-[240%]'>Válasz az alábbi tárgyak közül</h1>
                </div>
                <div className='w-full h-[80%]'>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Feladata_1;