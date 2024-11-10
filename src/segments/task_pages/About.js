import React from 'react'

function About() {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
        <div className='w-[60%] h-[70%] bg-sky-400 rounded-3xl'>

            <div className='w-full h-[25%] flex justify-center items-center'>
                <h1 className='text-4xl'>A weboldalról</h1>
            </div>
            <div className='w-full h-[25%] flex justify-center items-center'>
                <div className='w-max h-max'>
                    <p className='text-xl font-bold'>Készítették:</p>
                    <ul className='ml-3'>
                        <li>Kész Ármin</li>
                        <li>Varjas Árpád</li>
                        <li>Avarosi Barnabás</li>
                        <li>Androvics Dominik</li>
                    </ul>
                </div>
            </div>
            <div className='w-full h-[25%] flex justify-center items-center'>
                <div className='w-max h-[80%]'>
                    <p className='text-xl font-bold'>A weboldal a következő eszközökel készült:</p>
                    <ul className='ml-3'>
                        <li>React (<a className='underline text-blue-800' href='https://react.dev/'> https://react.dev/ </a>)</li>
                        <li>React Router Dom (<a className='underline text-blue-800' href='https://reactrouter.com/'> https://reactrouter.com/en/main </a>)</li>
                        <li>Tailwind CSS (<a className='underline text-blue-800' href='https://tailwindcss.com/'> https://tailwindcss.com/ </a>)</li>
                        <li>Node JS (<a className='underline text-blue-800' href='https://nodejs.org/'> https://nodejs.org/ </a>)</li>
                    </ul>
                </div>
            </div>  
            <div className='w-full h-[10%] flex justify-center items-center'>
                <p className='text-xl font-bold'>A web oldalt a GITHUB<a className='underline text-blue-800 text-[60%]' href='https://github.com/'> (https://github.com/)</a> hostolja</p>
            </div>
            <div className='w-full h-[10%] flex justify-center items-center'>
                <p><b>Forrás kód:</b><a href='https://github.com/keszarmin/P.Diddy' className='underline text-blue-800 hover:text-blue-200 duration-100'> https://github.com/keszarmin/P.Diddy</a></p>
            </div>

        </div>
    </div>
  )
}

export default About