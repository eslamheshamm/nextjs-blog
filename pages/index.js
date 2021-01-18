import Head from "next/head";
import Link from "next/link";

import { getAllPosts } from "../api";
export default function Home({ posts }) {
	return (
		<>
			<Head>
				<title>Hello Next!</title>
			</Head>
			<ul className="w-3/5 text-xl m-auto text-center pt-12">
				{posts.map(({ frontmatter, slug }) => (
					<li className="border border-2 inline-block p-4 mx-2">
						<Link href={`/blog/${slug}`}>
							<a>
								<h1 className="text-3xl font-bold text-blue-800">
									{frontmatter.title}
								</h1>
							</a>
						</Link>
						<p className="text-lg font-normal text-gray-500">
							{frontmatter.date}
						</p>
					</li>
				))}
			</ul>
		</>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts();
	return {
		props: {
			posts,
		},
	};
}
