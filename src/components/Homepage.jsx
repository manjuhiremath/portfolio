import Nav from './Nav';
// import Info from './Info';
import TechStack from './TechStack';
import Cards from './Cards';
import Divider from '@mui/material/Divider';
import Footer from './Footer';


function Homepage(){
  return (
   <div>
    <div className="homepage-container "  >
        <div className="nav">
          <Nav color="white" shadow='true'/>
        </div>
       
       
        <div style={{marginTop:'3rem'}}>
        <Divider style={{fontSize:'20px'}}> TECH STACK</Divider>
          <TechStack/>
        </div>
        <div style={{marginTop:'3rem'}} className="cards">
        <Divider style={{marginBottom:'2rem' , fontSize:'20px '}} > PROJECTS  </Divider>
          <Cards/>
        </div>
        <div className="foot" >
          <Footer />
        </div>
    </div>
   </div>
  );
}

export default Homepage;