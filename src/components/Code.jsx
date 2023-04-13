import Editor from "./Editor";
import {Box , styled} from '@mui/material';
import { useContext } from "react";
import { DataContext } from "../contexts/DataProvider";

const Container = styled(Box)`
 display:flex;
  background:black;
`
const Code = () =>{
  const {html , setHtml , css, setCss , js, setJs} =  useContext(DataContext);

    return (
        <Container>
          <Editor  
            heading = "HTML" 
            icons  = "/" 
            color = "#FF3C41" 
            language="xml"
            value  = {html} 
            onChange={setHtml}  

            />
          <Editor
            heading = "CSS"  
            icons  = "*"
            language="css"
           color = "#0EBEFF" 
           value = {css}
           onChange ={setCss}
            />
          <Editor   heading =  "JS" 
           icons  = "{ }" 
          language="javascript"
            color  = "#FCD000" 
            value = {js} 
            onChange={setJs}
            />
        </Container>        
        )
}
export default Code;
