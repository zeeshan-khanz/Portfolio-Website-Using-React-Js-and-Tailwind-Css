import React from 'react'

// Hero.js
export default function Hero() {
	return (
		<section
			id="hero"
			className="px-10 w-full flex gap-12 flex-col lg:flex-row 
				justify-center items-center align-center mt-40 
				mb-16 lg:mt-10 max-w-5xl mx-auto lg:gap-0 h-[80vh]">
			<div className="flex-1 flex flex-col justify-center items-center gap-5">
				<div>
					<h4 className="text-center text-xl font-bold">
						Hello Welcome
					</h4>
					<h2 className="text-center text-black text-5xl font-bold">
						My Portfolio Website
					</h2>
				</div>
				<p className="text-center">
					I'm a skilled Frontend Developer with a passion for building responsive, user-friendly, and scalable web applications. With a strong foundation in HTML, CSS, and JavaScript, I excel in creating engaging interfaces that provide seamless user experiences.
				</p>
				<button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded">
				<a href="https://www.instagram.com/zee_khan122?igsh=MW4zeXRpeWVveWx6Yw=="  class="bg-aqua hover:bg-black text-white font-bold py-2 px-4 rounded">
  Hire Me
</a>
</button>
			</div>
			<div className="flex-1 bg-aqua ml-20 rounded">
  <img src="https://cdn.pixabay.com/photo/2023/11/29/12/29/kid-8419485_640.jpg" alt="Hello.svg" className="w-full h-full bg-cover" />
</div>






		



			
		</section>
	);
}
