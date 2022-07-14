import React, { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import NotesList from "./components/NotesList";
import Search from './components/Search';
import Header from './components/Header';

const App = () => {
	const [notes, setNotes] = useState([		
		{
			id: nanoid(),
			text: 'This is my first note!',
			date: '07/13/2022',
		},
		{
			id: nanoid(),
			text: 'This is my second note!',
			date: '07/13/2022',
		},
		{
			id: nanoid(),
			text: 'This is my third note!',
			date: '07/13/2022',
		},
		{
			id: nanoid(),
			text: 'This is my fourth note!',
			date: '07/13/2022',
		},
	]);

	const [darkMode, setDarkMode] = useState(false);

	const [searchText, setSearchText] = useState('');

	/**
	 * parse the json since it is string when saved
	 * if the dependency array has no value it will just run once
	 */
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
			);

		if (savedNotes){
			setNotes(savedNotes);
		}
	}, [])

	/**
	 * NOTE: the react components renders twice thus disabling
	 * React.Strictmode in the index.js will solve the problem
	 * 
	 * local storage
	 * good practice to stringify the data
	 */
	useEffect(() => {
		localStorage.setItem('react-notes-app-data', JSON.stringify(notes));
		console.log(notes)
	}, [notes])

	const addNote = (text) => {
		const date = new Date();
		const newNote = {
			id: nanoid(),
			text: text,
			date: date.toLocaleDateString(),
		}
		//create new array using spread operator and adding the newNote
		const newNotes = [...notes, newNote];
		setNotes(newNotes);
	}

	const deleteNote = (id) => {
		const newNotes = notes.filter((note) => note.id !== id);
		setNotes(newNotes);
	}

	return (
		//if dark mode == true then apply dark-mode to this classname
		<div className={`${darkMode && 'dark-mode'}`}>
			<div className='container'>
				<Header handleToggleDarkMode={setDarkMode}/>
				<Search handleSearchNote={setSearchText}/>
				<NotesList
				//filter the notes list with the search text input
				notes={notes.filter((note) => note.text.toLowerCase().includes(searchText.toLowerCase() ))}
				handleAddNote={addNote}
				handleDeleteNote={deleteNote}
				/>
			</div>
		</div>

	);
}

export default App;
