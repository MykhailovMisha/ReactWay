import React from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Nav from "./Components/Navbar/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";
import News from "./Components/News/News";
import {Route, BrowserRouter} from 'react-router-dom';



const App = (props) => {

  return (
    
    <BrowserRouter>
    <div className="app-wrapper">
        <Header/>
        <Nav/>    
         <div className="app_wrapper_content">

            <Route path='/dialogs' render={() => {
              return( <Dialogs state={props.state.dialogsPage}
                              /> )} } />

           <Route path='/profile' render={() => 
           <Profile state={props.state.profilePage}/> } />

           <Route path='/news' render={() =>   <News/>  } />

           <Route path='/Music' render={() => 
             <Music state={props.state.musicPage}/> } />

           <Route path='/settings' render={ () => {return(<Settings/> )}} />

      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
