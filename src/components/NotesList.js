import React from 'react';
import Note from "./Note";
import AddNote from './AddNote';

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
	return (
		<div className='notesList'>
			{notes.map((note) => (
			<Note
			key={note.id}
			id={note.id}
			text={note.text}
			date={note.date}
			handleDeleteNote={handleDeleteNote}
			/>
			))}
			{/* placed here to be part of the css grid */}
			<AddNote handleAddNote={handleAddNote}/>
        </div>
	);
}

export default NotesList;
