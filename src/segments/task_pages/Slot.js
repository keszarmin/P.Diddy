import React, { useEffect, useState } from 'react';
import "./1_feladat.css"

const Slot = ({ value, spinning }) => {
    const [spinClass, setSpinClass] = useState('');

    useEffect(() => {
        if (spinning) {
            setSpinClass('spin');
            setTimeout(() => setSpinClass(''), 500); // Animáció időzítése
        }
    }, [spinning]);

    return (
        <div className={`slot ${spinClass} border-2 border-black rounded-2xl`}>
            <p className='text-[1000%]'>
                {value}    
            </p>
        </div>
    );
}

export default Slot;
