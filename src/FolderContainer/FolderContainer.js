import React from 'react'
import FolderList from './FolderList'
import GoBackButton from './GoBackButton'

const FolderContainer = (props) => {
    console.log(props);
    return (
        <section>
            <FolderList
              folders={props.folders}
              activeFolder={props.activeFolder}
              setActiveFolder={props.setActiveFolder}
            />
            <GoBackButton />
        </section>
    )
}

export default FolderContainer