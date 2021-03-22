import React, { useEffect, useState } from "react"
import axios from 'axios';
import ReackMarkdown from "react-markdown"


const publicUrl = process.env.PUBLIC_URL;
const Page = ({ values }) => {
  const [pagesPath, setPagesPath] = useState(null);
  const [arrayMd, setArrayMd] = useState([]);
   const getMd = async(path) => {
        const result =await axios.get(`${publicUrl}${path}`);       
        console.log({result});
        return result.data;
      }
  useEffect(()=>{setPagesPath(values);},[])
  useEffect(() => { 
    if (pagesPath != null) {
    if (pagesPath.length > 0) { 
      let arrayTemp = [];
      for (var i = 0; i < pagesPath.length; i++) {
        //arrayTemp.push(getMd(pagesPath[i].pagePath));
        getMd(pagesPath[i].pagePath)
          .then(function(result) {
            console.log('init ',result); // "initResolve"
            arrayTemp.push(result);
          });
      }
      console.log({arrayTemp})
      setArrayMd(arrayTemp);
      
    }
  }
  }, [pagesPath]);
  console.log('before return',arrayMd)
  arrayMd.map((item) => (<ReackMarkdown>{item}</ReackMarkdown>))
  return (<div>{console.log('return', arrayMd)}
    {arrayMd[0]}</div>)
}
//arrayMd.map(item => {})
export default Page