import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
	{
		title: 'Inicio',
		path: '/',
		icon: <AiIcons.AiFillHome />,
		cName: 'nav-text'
	},
	{
		title: 'Citas Medicas',
		path: '/citasReactivas',
		icon: <FaIcons.FaClinicMedical />,
		cName: 'nav-text'
	},
	{
		title: 'Padecimientos',
		path: '/padecimientos',
		icon: <FaIcons.FaLaptopMedical />,
		cName: 'nav-text'
	}
];