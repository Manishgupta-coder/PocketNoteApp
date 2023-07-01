import React, { useState } from 'react'
import './App.css'

export default function App ()
{
  const [ changeViewNotes, setChangeViewNotes ] = useState( "" )
  const [ allGroups, setAllGroups ] = useState( JSON.parse( localStorage.getItem( "Groups" ) ) )
  return (
    <>
      <div className='PocketNotesApp'>
        {/* <NotesAppContext.Provider value={{ allGroups, setAllGroups }}> */}
          {/* <Pane setChangeViewNotes={setChangeViewNotes} />
          <ViewNotes changeViewNotes={changeViewNotes} /> */}
        {/* </NotesAppContext.Provider> */}
      </div>
    </>
  )
}