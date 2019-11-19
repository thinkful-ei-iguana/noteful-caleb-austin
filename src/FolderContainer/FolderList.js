import React from 'react'
import Folder from './Folder'

// const options = props.features[props.feature].map((item, idx) => {
    
//   return (
//     <FeatureOption 
//       //itemHash={itemHash}
//       item={item}
//       feature={props.feature}
//       state={props.state}
//       updateFeature={props.updateFeature}
//       key={idx}
//     />
//   )
// });





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