import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
const Books = () => {
  const [books,setBooks] = useState([])

  useEffect(() => {
    const fecthAllBooks = async ()=>{
      try{
        const res = await axios.get("http://localhost:8801/books")
        setBooks(res.data);

      }catch(err){
        console.log(err)
      }
    };
    fecthAllBooks();
  },[]);

  return (
    <div >
      <h1> The Book Store </h1>
      <div className="books">
        {books.map((book)=>(
          <div className="book" key={book.id}>
            <img src={book.cover} alt=''/>
            <h2>{book.title}</h2>
            <h3>{book.desc}</h3>
            <button className="update">
              <Link
                to={`/update/`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Update
              </Link>
            </button>
          </div>
        ))}
      </div>
      <button className='addHome'>
        <Link to='/add' style={{color: "inherit", textDecoration: "none"}}>
          Add a Product
        </Link>

      </button>
    </div>
  )
}

export default Books;