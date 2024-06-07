import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

export function Books() {
    const [books,setBooks] = useState([]);

    useEffect(()=>{
        const fetch = async () => {
            try{
                const res = await axios.get("http://localhost:8800/books");
                setBooks(res.data)
            }catch(err) {
                console.log(err);
            }
        };
        fetch();
    },[])

    return (
        <div>
            <h1>Karo Book Shop</h1>
            <div className='books'>
                {books.map(book =>(
                    <div className='book' key={book.id}>
                        {book.cover && <img src={book.cover} alt=''/>}
                        <h2>{book.title}</h2>
                        <p>{book.desc}</p>
                        <span>${book.price}</span>
                        <button className='delete'>Delete</button>
                        <button className='update'>Update</button>
                    </div>
                ))}
            </div>
            <Link to="/add">
                <button>
                    Add new book
                </button>
            </Link>
        </div>
    )
}
