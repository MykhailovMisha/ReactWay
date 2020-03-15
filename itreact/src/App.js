import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import {Route} from 'react-router-dom';



const App = (props) => {

  return (
    
    <div className="app-wrapper">
        <Header/> 
        <Nav/>    
         <div className="app_wrapper_content">

            <Route path='/dialogs' render={() => {
              return( <Dialogs state={props.state.dialogsPage}
                              /> )} } />

           <Route path='/profile' render={() => 
           <Profile profilePage={props.state.profilePage}
                    dispatch={props.dispatch}  /> } />

           <Route path='/news' render={() =>   <News/>  } />

           <Route path='/Music' render={() => 
             <Music state={props.state.musicPage}/> } />

           <Route path='/settings' render={ () => {return(<Settings/> )}} />

      </div>
    </div>
  );
}

export default App;
