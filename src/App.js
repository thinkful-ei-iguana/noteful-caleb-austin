import React from 'react';
import './App.css';
import store from './store';
import Header from './Header';
import FolderContainer from './FolderContainer/FolderContainer'



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
      <main>
        <FolderContainer
          folders={this.state.folders}
        />
      </main>
    </>
    );
  }
} 
   


export default App;
