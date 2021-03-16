import React, { useEffect, useState } from "react"
import axios from 'axios';
import ReackMarkdown from "react-markdown"


const publicUrl = process.env.PUBLIC_URL;
const Page = ({ values }) => {
  const [pagesPath, setPagesPath] = useState(null);
  const [arrayMd, setArrayMd] = useState([]);
   const getMd = async(path) => {
        console.log('getMd', path)
        const result =await axios.get(`${publicUrl}${path}`)       
            let mdText = result.data
            return mdText;
      }
  useEffect(()=>{setPagesPath(values);},[])
  useEffect(() => { 
    if (pagesPath != null) {
    if (pagesPath.length > 0) { 
      let arrayTemp;
      for (var i = 0; i < pagesPath.length; i++) {
        console.log(pagesPath[i]);
        arrayTemp.push(getMd(pagesPath[i].pagePath));
        console.log('For')
      }
      setArrayMd(arrayTemp);
    }
  }
  }, [pagesPath]);
  console.log(arrayMd)
  
  
  return (<div>{console.log({arrayMd})}
    {arrayMd.map((item) => (<ReackMarkdown>{item}</ReackMarkdown>))}</div>)
}
//arrayMd.map(item => {})
export default Page