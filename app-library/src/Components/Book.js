import React from "react"
import {Route,BrowserRouter as Router} from 'react-router-dom'
import { useParams } from 'react-router';
import Book01 from '../books/book/Book01.json'
import Book02 from '../books/book/Book02.json'
import Book03 from '../books/book/Book03.json'
import Chapter from './Chapter'
import Page from './Page'

const Book = () => {
    var chapters = null;
    const { id } = useParams();
    console.log(id)
    switch(id){
        case "1":
            if (Book01 ? Book01 : null){
                chapters = Book01.Chapters.map((data) =>{
                    var url = "/books/book/1/chapter/" + data.ChapterNum;
                    return(<li key={data.ChapterNum}><a href={url}>Chapter {data.ChapterNum}</a></li>)
                });
            }
            break;

        case "2":
            if (Book02 ? Book02 : null){
                chapters = Book02.Chapters.map((data) =>{
                    var url = "/books/book/2/chapter/" + data.ChapterNum;
                    return(<li key={data.ChapterNum}><a href={url}>Chapter {data.ChapterNum}</a></li>)
                });
            }
            break;
        
        case "3":
            if (Book03 ? Book03 : null){
                chapters = Book03.Chapters.map((data) =>{
                    var url = "/books/book/3/chapter/" + data.ChapterNum;
                    return(<li key={data.ChapterNum}><a href={url}>Chapter {data.ChapterNum}</a></li>)
                });
            }
            break;
            default:
                break;


    }
    return(
        <Router>
            <div>
                <br></br>
                {chapters}
            </div>

            <br/>
            <br/>
            <Route path="/books/book/:book/chapter/:chapter"><Chapter/></Route>  
        </Router>)
    
}
export default Book