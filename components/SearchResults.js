import Post from './Post';

export default function SearchResults({ results }) {
	if (results.length === 0) {
		return null;
	}
	return (
		<div className='absolute top-32 right-0 z-10 border-4 border-gray-500 bg-white text-black w-full rounded-2xl'>
			<h2 className='text-3xl m-3'>{results.length} Results</h2>
			<div className='p-10 w-6/12 mx-auto'>
				{results.map((result, index) => (
					<Post key={index} post={result} compact={true} />
				))}
			</div>
		</div>
	);
}
