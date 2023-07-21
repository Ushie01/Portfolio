import Github from './../assets/Vector.svg';
import Twitter from './../assets/twitter.svg';
import Linkdin from './../assets/linkdin.svg';

export const LINKS = [
	{ text: 'Home', to: '/' },
	{ text: 'About', to: '/AboutMe' },
	{ text: 'Tech Stack', to: '/MyStack' },
	{ text: 'Projects', to: '/Projects' },
	{ text: 'Contact', to: '/Contact' },
];

export const SOCIAL_LINKS = [
	{ icon: Github, to: 'https://github.com/Ushie01' },
	{ icon: Twitter, to: 'https://twitter.com/Aj_Ushie' },
	{ icon: Linkdin, to: 'https://www.linkedin.com/in/abu-godwin-8b3003189/' },
];

export const Class = {
	li: 'hover:text-violet-700 duration-150 hover:scale-105 hover:text-lg',
	nav: 'flex items-center justify-center space-x-16 font-bold text-gray-600',
	p: 'bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500',
};