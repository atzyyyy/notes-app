import React, { useState } from 'react'

const AddNote = ({handleAddNote}) => {
	const [noteText, setNoteText] = useState('');
	const characterLimit = 200;

	//event handle functions
	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0){
			setNoteText(event.target.value);
		}
	}

	const handleSaveClick = () => {
		//if note only contains white spaces
		if (noteText.trim().length > 0){
			handleAddNote(noteText);
			setNoteText('');
		}
	}

	return (
	<div className='note__new'>
		<textarea
		rows='8'
		cols='10'
		placeholder='Type to add a new note...'
		value={noteText}
		onChange={handleChange}
		>
		</textarea>
		<div className="note__footer">
			<small>{characterLimit - noteText.length} remaining</small>
			<button className="note__footer--save" onClick={handleSaveClick}>Save</button>
		</div>
	</div>
	)
}

export default AddNote