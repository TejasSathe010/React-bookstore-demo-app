import React from 'react';

const Book = ({title, author, img}) => {
  return (
    <div className='flex items-center justify-center flex-col rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700"'>
        <img src={img} />
        <h2 className='mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 text-center'>{title}</h2>
        <p className='mb-4 text-base text-neutral-600 dark:text-neutral-200 text-center'>{author}</p>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Button</button>
    </div>
  )
}

export default Book;