import React from 'react'
import Folder from './Folder'

const FolderList = (props) => {

  const currentFolders = props.folders.map(currentFolder => {
    return (
      <Folder 
        folderName = {currentFolder.name}
        folderID = {currentFolder.id}
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