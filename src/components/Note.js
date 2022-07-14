import React from 'react';
import {MdDeleteForever} from 'react-icons/md';

const Note = ({ id, text, date, handleDeleteNote}) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className="note__footer">
				<small>{date}</small>
				<MdDeleteForever 
				className='note__footer--deleteIcon' 
				size='1.3em' 
				onClick={() => handleDeleteNote(id)}
				/>
			</div>
		</div>
	);
}

export default Note;
