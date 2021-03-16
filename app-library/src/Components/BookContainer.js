import React, {useState} from "react"
import { Route, BrowserRouter as Router,Link } from 'react-router-dom'
import Book from './Book'
import BooksJson from "../../public/books/BooksJson.json"
import Card from "react-bootstrap/Card"
import CardGroup from "react-bootstrap/CardGroup"
import Button from "react-bootstrap/Button"
import Page from './Page'

const BookContainer = () => {
    let books = null;
    const [bookSelected, setBookSelected] = useState(null);
    const Select = (id) =>{
        setBookSelected(id);
    }
    if (BooksJson && BooksJson.books) {
        books = BooksJson.books.map((data) => {
            let id = data.idBook
            let url = "/books/book/" + id;
            return (


                <Card>
                    <Card.Img variant="top" src="" />
                    <Card.Body>
                        <Card.Title>{data.Title}</Card.Title>
                        <Card.Text>
                            <p>{data.Author}</p>

                            <br></br>
                            <Link to={url} onClick={() =>{Select(data.idBook)}}> Read </Link>

                        </Card.Text>
                    </Card.Body>

                </Card>


            );
        });
    };


    return (
        <Router>
            <br></br>
            {!bookSelected && (<CardGroup>
                {books}
            </CardGroup>)
            }
            <Route path="/books/book/:id"><Book/></Route>  
            
        </Router>)
    
}

export default BookContainer