import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import store from './store';
import Header from './Header';
import FolderContainer from './FolderContainer/FolderContainer'
import NoteContainer from './NoteContainer/NoteContainer'



class App extends React.Component {

  state = {
    folders: store.folders,
    notes: store.notes,
    activeFolder: null
  }

  setActiveFolder = (selectedFolderID) => {
    this.setState({ activeFolder: selectedFolderID });
  }

  render () {
    return (
    <>
      <header>
        <Header/>
      </header>
      <sidebar>
        <Route 
          path={["/folder/:folderID","/"]}
          render={ (routerprops) => {
            return (
            <FolderContainer
              folders={this.state.folders}
              activeFolder={this.state.activeFolder}
              setActiveFolder={this.setActiveFolder}
              {...routerprops}
            />
            )
          }}
        />
       
      </sidebar>
      <main>
        <NoteContainer
          notes={this.state.notes}
          activeFolder={this.state.activeFolder}
        />
      </main>
    </>
    );
  }
} 
   


export default App;
