import React from 'react'

const Folder = (props) => {
    //console.log("folderID", props.folderID, "ActiveFolder", props.activeFolder)
    const ActiveFolderDisplay = (props.folderID === props.activeFolder) ?
      'selected-folder' :
      'unselected-folder';
    //console.log(ActiveFolderDisplay)
    return (
        <li 
          onClick={() => props.setActiveFolder(props.folderID)} 
          key={props.folderID}
          className={ActiveFolderDisplay}>
            {props.folderName}
        </li>
    )
}

export default Folder