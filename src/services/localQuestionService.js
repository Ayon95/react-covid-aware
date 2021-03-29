const questions = [
	{
		_id: '1',
		text: 'Indoor limits for parties 10?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '2',
		text: 'Outdoor limits for parties 25?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '3',
		text: 'At a restaurant 6 people could be seated together?',
		answers: [{ _id: '2', name: 'Yellow' }],
	},
	{
		_id: '4',
		text: 'At a restaurant 4 people could be seated together?',
		answers: [
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '5',
		text: 'Indoor limits for parties 5?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '6',
		text: 'Maximum number of patrons permitted to be seated indoors at a restaurant is 10?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '7',
		text: 'Restaurants and similar establishments must be closed from 10 p.m. to 5 a.m.?',
		answers: [
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '8',
		text: 'performing arts facilites closed to spectators?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '9',
		text:
			'No indoor organized public events and social gatherings&#44; except with members of the same household?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '10',
		text: 'Indoor and outdoor service prohibited at restaurants?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '11',
		text: 'Hair Salons closed?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '12',
		text: 'Casinos Closed?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '13',
		text: 'Horse Racing&#44; Training Only and No Races?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '14',
		text: 'Motorsports Closed?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '15',
		text: 'Indoor limits for public events and gatherings in organizations 50?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '16',
		text: 'Outdoor limits for public events and gatherings in organizations 100?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '17',
		text: 'Outdoor limits for all public events and gatherings 25?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '18',
		text: 'Outdoor limits for all public events and gatherings 10?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '19',
		text: 'Outdoor limits for religious gatherings&#44; funerals&#44; and wedding events 100?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '20',
		text:
			'Indoor limits for religious gatherings&#44; funerals&#44; and wedding events 30% capacity of room?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '21',
		text: 'Outdoor limits for religious gatherings&#44; funerals&#44; and wedding events 10?, 5',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '22',
		text: 'Indoor limits for religious gatherings&#44; funerals&#44; and wedding events 100?, 5',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '23',
		text: 'No buffet style service in restaurants and bars?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '24',
		text: 'Face coverings required except when eating or drinking only?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '25',
		text: 'Night clubs only permitted to operate as restaurant or bar?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '26',
		text: 'Establishments must be closed from 12 a.m. to 5 a.m.?',
		answers: [{ _id: '2', name: 'Yellow' }],
	},
	{
		_id: '27',
		text: 'Maintain 2 metre physical distancing&#44; unless engaged in a sport?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '28',
		text: 'Indoor fitness class limits for sports and fitness facilities 50?',
		answers: [{ _id: '1', name: 'Green' }],
	},
	{
		_id: '29',
		text: 'Outdoor fitness class limits for sports and fitness facilities 100?',
		answers: [{ _id: '1', name: 'Green' }],
	},
	{
		_id: '30',
		text: 'Indoor fitness class limits for sports and fitness facilities 10 per room?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '31',
		text: 'Outdoor fitness class limits for sports and fitness facilities 25?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '32',
		text: 'Indoor limits for areas with weights or exercise equipment 50?, 1, 2',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '33',
		text:
			'Maximum of 50 people total in areas with weights and exercise machines and all classes?, 3',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '34',
		text: 'Indoor limits for sports spectators 50?, 1, 2',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '35',
		text: 'Outdoor limits for sports spectators 100?, 1, 2',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '36',
		text: 'No spectators permitted except for parents and guardians of children?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '37',
		text: 'Face coverings required except when exercising in sports and fitness facilities?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '38',
		text: 'Oxygen bars&#44; steam rooms and saunas closed?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '39',
		text:
			'For malls&#44; a safety plan is required to be prepared and made available upon request?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '40',
		text: 'Limits for casinos&#44; bingo halls&#44; and gaming establishments 50?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '41',
		text: 'Indoor limits for casinos&#44; bingo halls&#44; and gaming establishments 10?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '42',
		text: 'Outdoor limits for casinos&#44; bingo halls&#44; and gaming establishments 25?',
		answers: [{ _id: '4', name: 'Red' }],
	},
	{
		_id: '43',
		text: 'Table games are prohibited casinos&#44; bingo halls&#44; and gaming establishments?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
		],
	},
	{
		_id: '44',
		text:
			'Cinemas are closed except for drive-in cinemas&#44; rehearsals&#44; or performing broadcasted events with restrictions?',
		answers: [
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '45',
		text: 'For cinemas&#44; a safety plan is required?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '46',
		text: 'Indoor spectator limits for performing arts facilities 50?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '47',
		text: 'Outdoor spectator limits for performing arts facilities 100?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
		],
	},
	{
		_id: '48',
		text: 'Performing arts facilities closed to spectators?',
		answers: [
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '49',
		text: 'Drive-in performances permitted?',
		answers: [
			{ _id: '1', name: 'Green' },
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '50',
		text: 'A safety plan is required for performing arts facilities?',
		answers: [
			{ _id: '2', name: 'Yellow' },
			{ _id: '3', name: 'Orange' },
			{ _id: '4', name: 'Red' },
			{ _id: '5', name: 'Grey' },
		],
	},
	{
		_id: '51',
		text: 'Amusement parks and water parks are closed?, 5',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '52',
		text: 'In-person driving instruction not permitted?, 5',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '53',
		text: 'Tour and guide services closed?, 5',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '54',
		text: 'Museum and other cultural amenities are closed (indoors) to the public?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
	{
		_id: '55',
		text: 'Zoos and aquariums are closed (indoors) to the public?',
		answers: [{ _id: '5', name: 'Grey' }],
	},
];

export function getQuestions() {
	return questions;
}

export function getQuestion(id) {
	return questions.find(q => q._id === id);
}

export function getRandomQuestions() {
	let shuffleQuestions = [...questions];
	for (let i = shuffleQuestions.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffleQuestions[i], shuffleQuestions[j]] = [shuffleQuestions[j], shuffleQuestions[i]];
	}
	return shuffleQuestions.slice(0, 4);
}
