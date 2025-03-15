// Project - Accordion / FAQ

import React, { useState } from 'react'

const questions = [
  {
    id: 1,
    title: "Is this a good product?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 2,
    title: "How much does it cost?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 3,
    title: "When can I get it?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  },
  {
    id: 4,
    title: "When I  make it ?",
    info: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui facere in labore maxime, assumenda iure sed tenetur alias omnis eveniet similique laborum, neque porro unde ducimus officiis animi vitae! Quidem."
  }
];

function Accordian({ title, info }) {
  const [open, setOpen] = useState(false);

  return (
    <div className='w-full bg-white border-2 border-neutral-700 p-4 mb-2 rounded-md'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>{title}</h1>
        <button
          className='bg-blue-500 text-white px-3 py-1 border-2 border-blue-700 rounded-md'
          onClick={() => setOpen(!open)}
        >
          {open ? '-' : '+'}
        </button>
      </div>
      {open && <p className='mt-2 text-gray-700'>{info}</p>}
    </div>
  );
}


function App() {

  return (
    <div className={`bg-neutral-800 min-h-screen text-black text-xl font-extrabold p-12  `}>
      <div className='bg-neutral-500 h-full flex flex-col  items-center p-4 gap-2'>
        <h1 className='text-4xl'>FAQ</h1>
        {questions.map((question) => (
          <Accordian
            key = {question.id}
            title = {question.title}
            info = {question.info}
          />
        ))}
      </div>
    </div>
  )
}

export default App