import {AppBar,Toolbar,styled} from '@mui/material'
import {Link} from 'react-router-dom';

const Container = styled(AppBar)`
  height:9vh;
 color:red;

`
const Header = () =>{
    const logo ='https://img.icons8.com/wired/1x/huawei-logo.png';
    return (
        <>
        <Container position='static' style = {{height:"10vh"}}>
            <Toolbar style={{color:"black",fontFamily:"monospace", fontSize:"20px" }}>
                 <img src={logo} alt="" />
                    &nbsp;
                    &nbsp;
                    <ul>
                    <li style={{"listStyle" : "none"}}>
                    <Link to = "/Welcome">HomePage</Link>
                    &nbsp;
                    &nbsp;
                   <Link to ="playground"> PlayGround</Link>
                   &nbsp;
                    &nbsp;
                    <Link to= "about">About </Link>
                                      </li>
                                      </ul>

            </Toolbar>
        </Container>
        {/* <div>Hello  from Header</div> */}

        </>
    )
}
export default Header;