import React from 'react'

// Projects.js
export default function Projects() {
	return (
		<section id="projects"
			className="my-20 w-full flex flex-col gap-5 align-center max-w-5xl mx-auto">
			<h2 className="text-5xl text-emerald-500 font-bold text-center">
				My Projects
			</h2>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center
							gap-5 lg:flex-row max-w-5xl mx-auto shadow transition 
							hover:shadow-xl hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
						"https://www.geeksforgeeks.org/progress-tracker-using-react-and-local-storage/"
						className="w-full h-full">
						<img src="https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_640.png"
							alt="Project 1"
							className="w-full h-full 
										bg-cover rounded"/>
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline"
							href=
							"https://github.com/zeeshan-khanz/Joke-generator-Using-React-Js-and-Css">
							Random Joke Generator
						</a>
					</h2>
					<p>
						Get ready to LOL with our Random Joke Generator, built using React JS, CSS, and a dash of humor! This interactive web app serves up a fresh, side-splitting joke with every click, guaranteed to brighten your day and put a smile on your face. With a vast library of jokes at its disposal, this generator is the perfect way to take a break from the daily grind and indulge in some much-needed humor therapy.
					</p>
				</div>
			</div>
			<div className="p-10 bg-emerald-200 flex flex-col justify-center items-center gap-5 
							lg:flex-row-reverse max-w-5xl mx-auto shadow transition hover:shadow-xl 
							hover:scale-[102%] w-full">
				<div className="w-80 rounded">
					<a href=
						"https://github.com/zeeshan-khanz/Text-Utils-uisng-React-js-and-Bootstrap"
						className="w-full h-full">
						<img src=
							"https://cdn.pixabay.com/photo/2018/01/18/09/13/book-3089857_640.jpg"
							alt="Project 2"
							className="w-full h-full bg-cover rounded" />
					</a>
				</div>
				<div className="flex flex-col align-center mx-auto gap-4 justify-center flex-1">
					<h2 className="font-bold text-3xl text-center">
						<a className="hover:underline" href=
							"https://github.com/zeeshan-khanz/Text-Utils-uisng-React-js-and-Bootstrap">
							Text Utils
						</a>
					</h2>
					<p>
						The Text Utils project is a versatile and user-friendly tool designed to perform a variety of text processing operations, including case conversion (uppercase and lowercase), text-to-speech synthesis, and text analysis (word count and character count), making it an ideal solution for writers, editors, and developers seeking to simplify and automate routine text tasks.
					</p>
				</div>
			</div>
		</section>
	);
}

