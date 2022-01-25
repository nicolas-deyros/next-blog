import Head from 'next/head';
import Header from './Header';

export default function Layout({ title, keywords, description, children }) {
	return (
		<div>
			<head>
				<title>{title}</title>
				<meta name='keywords' content={keywords} />
				<meta name='description' content={description} />
				<link rel='shortcut icon' href='/favicon.ico' type='image/x-icon' />
			</head>
			<Header />
			<main className='container mx-auto my-7'>{children}</main>
		</div>
	);
}

Layout.defaultProps = {
	title: 'default title',
	keywords: 'default keywords',
	description: 'default description',
};
