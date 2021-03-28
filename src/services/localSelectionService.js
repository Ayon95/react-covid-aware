export const options = [
	{ _id: '1', name: 'Green', title: 'Prevent', imgSrc: 'images/covid-prevent.png' },
	{ _id: '2', name: 'Yellow', title: 'Protect', imgSrc: 'images/covid-protect.png' },
	{ _id: '3', name: 'Orange', title: 'Restrict', imgSrc: 'images/covid-restrict.png' },
	{ _id: '4', name: 'Red', title: 'Control', imgSrc: 'images/covid-control.png' },
	{ _id: '5', name: 'Grey', title: 'Lockdown', imgSrc: 'images/covid-lockdown.png' },
];

export function getSelections() {
	return options;
}
