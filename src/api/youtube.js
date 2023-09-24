/** @format */

import axios from 'axios';

const KEY = 'AIzaSyB2r5qpi3tT0qAmJg4xhFtyMwgamk0Dq5k';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 24,
		key: KEY,
	},
});
