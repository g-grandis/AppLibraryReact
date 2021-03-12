import React, {useEffect, useState} from "react"
import { render } from 'react-dom';
import ReactMd from 'react-md-file';
import marked from "marked";
import axios from 'axios';
import ReackMarkdown from "react-markdown"
import readmePath from '../books/book/pages/page01_01.md'


const publicUrl = process.env.PUBLIC_URL;
const Page = ({props}) => {
    const [pagesPath, setPagesPath] = useState([]);
    let test = null;
    const [test2,setTest2] = useState(null);
    useEffect(() =>{
        setPagesPath(props);
        
    },[props]);
    //"../books/book/pages/page01_01.md"
    let mdText = undefined;
    test = axios.get(`/books/book/pages/page01_01.md`)
    .then((result) => {
      mdText = result.data;
      setTest2({ mdText });
      }); 
          // fetch(readmePath)
          // .then(response => {
          //   return response.text()
          // })
          // .then(text => {
          //   setPagesPath({text})
          // })
    return (<div>{console.log({test2})}
    <p><ReackMarkdown source={pagesPath}/></p></div>)
}
export default Page