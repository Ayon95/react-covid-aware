export const options = [
	{ _id: '1', zone: 'Green', title: 'Prevent', imgSrc: 'images/covid-prevent.png' },
	{ _id: '2', zone: 'Yellow', title: 'Protect', imgSrc: 'images/covid-protect.png' },
	{ _id: '3', zone: 'Orange', title: 'Restrict', imgSrc: 'images/covid-restrict.png' },
	{ _id: '4', zone: 'Red', title: 'Control', imgSrc: 'images/covid-control.png' },
	{ _id: '5', zone: 'Grey', title: 'Lockdown', imgSrc: 'images/covid-lockdown.png' },
];

export function getSelections() {
	return options;
}
