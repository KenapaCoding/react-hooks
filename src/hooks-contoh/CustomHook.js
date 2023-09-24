/** @format */

import React from 'react';
import { useState } from 'react';
import useVideos from '../useVideos';

const CustomHook = () => {
	const [term, setTerm] = useState(null);
	const [videos, search] = useVideos('murrotal');

	const onSubmit = (event) => {
		event.preventDefault();
		console.log(term);
		search(term);
		console.log(videos);
	};

	return (
		<div className='container'>
			<form
				className='content'
				onSubmit={onSubmit}>
				<input
					type='text'
					onChange={(event) => setTerm(event.target.value)}
					id='simple-search'
					placeholder='Telusuri'
					required
				/>
				<input
					type='submit'
					value='Cari'
				/>
			</form>
			<div>
				{videos.map((video) => {
					return (
						<div className='content'>
							<img
								alt={video.snippet.title}
								src={video.snippet.thumbnails.medium.url}
							/>
							<div className=''>
								<p className='text-sm font-roboto font-bold line-clamp-2'>
									{video.snippet.title}
								</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CustomHook;
