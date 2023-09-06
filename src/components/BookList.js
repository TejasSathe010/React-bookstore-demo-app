import React from 'react';
import Book from './Book';

const BookList = () => {

    const books = [
        {
            title: 'Holly',
            author: 'Stephen King',
            img: 'https://m.media-amazon.com/images/I/417kSOgt4aL._SX325_BO1,204,203,200_.jpg',
            id: 1
        },{
            title: 'Things We Left Behind',
            author: 'Lucy Score ',
            img: 'https://m.media-amazon.com/images/I/41d4KgoiJhL._SX311_BO1,204,203,200_.jpg',
            id: 2
        },
        {
            title: 'Amazing Grace Adams: A Novel',
            author: 'Fran Littlewood',
            img: 'https://m.media-amazon.com/images/I/51VzlSJ24VL._SX327_BO1,204,203,200_.jpg',
            id: 3
        },
        {
            title: 'Iron Flame (The Empyrean, 2)',
            author: 'Rebecca Yarros ',
            img: 'https://m.media-amazon.com/images/I/51xSijRxXqL._SX307_BO1,204,203,200_.jpg',
            id: 4
        },
    ];

  return (
        <section className='grid grid-cols-4 gap-4 place-items-center content-center'>
            {
                books.map((book) => {
                    return <Book key={book.id} {...book}/>
                })
            }
        </section>
  );
}

export default BookList;