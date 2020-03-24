import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/Profile/Profile";
// import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import NewsContainer from "./Components/News/NewsContainer";
import {Route} from 'react-router-dom';
import DialogsContainer from "./Components/Dialogs/DialogsContainer";


const App = (props) => {
  return (
    <div className="app-wrapper">
        <Header/> 
        <Nav/>    
         <div className="app_wrapper_content">

            <Route path='/dialogs' render={() => 
               <DialogsContainer />  } />

           <Route path='/profile' render={() => 
             <Profile  /> } /> 

           <Route path='/news' render={() =>
             <NewsContainer  /> } />

           {/* <Route path='/Music' render={() => 
             <Music state={props.state.musicPage}/> } /> */}

           <Route path='/settings' render={ () => {return(<Settings/> )}} />

      </div>
    </div>
  );
}


export default App;
