import React from 'react';
import './App.css';
import store from './store';
import Header from './Header';
import FolderContainer from './FolderContainer/FolderContainer'
import NoteContainer from './NoteContainer/NoteContainer'



class App extends React.Component {

  state = {
    folders: store.folders,
    notes: store.notes
  }

  render () {
    return (
    <>
      <header>
        <Header/>
      </header>
      <sidebar>
        <FolderContainer
          folders={this.state.folders}
        />
      </sidebar>
      <main>
        <NoteContainer
          notes={this.state.notes}
        />
      </main>
    </>
    );
  }
} 
   


export default App;
