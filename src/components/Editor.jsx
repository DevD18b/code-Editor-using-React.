import { useState } from 'react';
import { Box, styled } from '@mui/material';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEdtior } from 'react-codemirror2'
import CloseIcon from '@mui/icons-material/Close';



import '../App.css';

const Container = styled(Box)`
      
      flex-grow :1;
      flex-basic : 0;
      display:flex;
      flex-direction : column;
      padding : 0 8px 8px;


`


const Heading = styled(Box)`
       background: #1a1b21;
       display: flex;
       padding: 9px 12px;
      
`
const Header = styled(Box)`
     display: flex;
     background:#1a1b21;
     color:#AAAEBC;
     justify-content : space-between;
     font-weight : 700;


`


const Editor = ({ heading, icons,language, color, value, onChange }) => {

    const [open, setOpen] = useState(true);

    const handleChange = (editor, data, value) => {
         onChange(value);
    }



    return (
        <Container
            style={open ? null : { flexGrow: 0 }}
        >
            {/* for upper part of editor */}

            <Header>
                <Heading>
                    <Box component="span"
                        style={{
                            background: color,
                            height: "20",
                            width: "20",
                            display: "flex",
                            placeContent: 'center',
                            borderRadius: 5,
                            marginRight: 5,
                            paddingBottom: 2,
                            color: "black"
                        }}
                    >{icons}</Box>
                    {heading}
                </Heading>
                <CloseIcon
                    style={{ alignSelf: "center" }}
                    onClick={() => setOpen(prevState => !prevState)}
                />
            </Header>

            {/* for lower part  of Editor */}

            <ControlledEdtior

                className='controlled-editor'
                value={value}
                onBeforeChange={handleChange}
                options={{
                    lineWrapping: true,
                    lint: true,
                    mode: language,
                    lineNumbers: true,
                    theme: 'material'    
                 }}
            />
        </Container>
    )
}
export default Editor;