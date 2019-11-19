import React from 'react'
import Folder from './Folder'

const FolderList = (props) => {

  const currentFolders = props.folders.map(currentFolder => {
    return (
      <Folder 
        folderName = {currentFolder.name}
        folderID = {currentFolder.id}
        activeFolder={props.activeFolder}
        setActiveFolder={props.setActiveFolder}
      />
    )
  })

  return (
    <ul>
      {currentFolders}
    </ul>
  )
}

export default FolderList