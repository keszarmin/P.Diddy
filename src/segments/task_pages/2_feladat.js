import React, { useState, useEffect } from 'react';
import Slot from './Slot';
import "./1_feladat.css"
import { Link } from 'react-router-dom';

const Machine = ({SetData}) => {
    const [slots, setSlots] = useState(["🍒", "🍋", "🍊"]);
    const [spinning, setSpinning] = useState([false, false, false]);
    const [spinCount, setSpinCount] = useState(0);
    const [IsBlured, setIsBlured] = useState(["none","none"])

    const spin = () => {
        const items = ["🍒", "🍋", "🍊", "🍉", "🍇"];
        
        setSpinning([true, true, true]);
        setTimeout(() => {
            if (spinCount < 2) {
                setSlots([
                    items[Math.floor(Math.random() * items.length)],
                    items[Math.floor(Math.random() * items.length)],
                    items[Math.floor(Math.random() * items.length)]
                ]);
            } else {
                setSlots(["🍒", "🍒", "🍒"]);
            }
            setSpinning([false, false, false]);
            setSpinCount(spinCount + 1);
        }, 500);
    }

    useEffect(() => {
        if (slots[0] && slots[1] === slots[2]) {
            setIsBlured(["blur(20px)","block"])
            SetData(["Block","Block"])
        }
    
      
    }, [slots])
    
    return (
        <>
            <div className='w-[80%] flex justify-center items-center'>
                <div className='w-full m-auto'>
                    <div className="block text-center h-screen" >
                        <p className="text-4xl">
                            Most hogy meg van a kulcs irányt vesztek az ajtó felé. 
                        </p>
                    </div>
                    <div className="block text-center h-screen" >
                        <p className="text-4xl">
                            Míg kifelé tartotok P.Diddy megállít titeket. 
                        </p>
                    </div>
                    <div className="block text-center h-screen" >
                        <p className="text-4xl">
                            Normálisan kell viselkednetek hogy ne sejtse meg a szökést.
                        </p>
                    </div>
                    <div className="block text-center h-screen" >
                        <p className="text-4xl">
                            Ezért meghívjátok őt egyet slot machinenezni.
                        </p>
                    </div>
                    <div className="block text-center h-screen">
                        <p className="text-4xl">
                            De azt mondja addig jatszotok amíg nem nyertek!
                        </p>
                    </div>
                </div>
            </div>

            <div style={{display:IsBlured[1]}} className='fixed rounded-2xl -translate-x-1/2 -translate-y-1/2  left-[40%] top-[50%] border-2 bg-white border-black w-[40%] h-[70%] z-10'>
                <div className='w-full h-[40%] flex justify-center items-center'>
                    <div className='w-max h-max'>
                        <h1 className='jackpot'>Nyertetek!</h1>
                    </div>
                </div>
                <div className='w-full h-[60%] flex justify-center items-center'>
                    <button className='w-[40%] h-[20%] rounded-full duration-100 hover:bg-blue-600 hover:w-[45%] bg-blue-400 hover:text-4xl text-2xl'>
                        <Link to={"/Feladat_3"}>Tovább</Link>
                    </button>
                </div>
            </div>

            <div className="machine w-[80%] h-screen relative" style={{filter:IsBlured[0]}}>
                <div className='w-full h-[70%] flex justify-center items-center'>

                    <div className="slots flex w-[60%] h-full justify-evenly items-center">
                        <Slot value={slots[0]} spinning={spinning[0]} />
                        <Slot value={slots[1]} spinning={spinning[1]} />
                        <Slot value={slots[2]} spinning={spinning[2]} />
                    </div>
                </div>
                <div className='w-[full] h-[30%] flex justify-center items-center'>
                    <button onMouseDown={(e) => e.target.style.transform = 'scale(0.95)'} onMouseUp={(e) => e.target.style.transform = 'scale(1.1)'} className='btn-led hover:w-[35%] duration-150' onClick={spin}>Spin</button>
                </div>
            </div>
        </>
    );
}

export default Machine;
