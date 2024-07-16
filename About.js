import React from 'react'

// About.js
export default function About() {
	return (
		<section
			id="about"
			className="px-10 w-full flex flex-col lg:flex-row py-20 
					align-center bg-emerald-200 max-w-5xl mx-auto">
			<div className="flex-1">
				<img src=
					"https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406_640.jpg"
					alt="About"
					className="w-full h-full bg-cover" />
			</div>
			<div className="flex-1 flex flex-col justify-center
							items-center gap-5 px-6">
				<div>
					<h2 className="text-center text-white
								text-5xl font-bold">
						About Me :
					</h2>
				</div>
				<p className='text-center text-black font family-time roman' >
					Im a front end web Developer
				</p>
				<p className='text-black text-lg leading-relaxed mx-4 mb-4'>
  My name is Zeeshan Muhammad, and I'm a skilled frontend web developer with a passion for crafting exceptional user experiences. With a keen eye for detail and a deep understanding of the latest web development trends, I bring websites and web applications to life with my expertise in HTML, CSS, and JavaScript.
</p>


			</div>
		</section>
	);
}
