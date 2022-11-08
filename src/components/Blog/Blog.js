import React from 'react';

const Blog = () => {
    return (
			<div>
				<section className='dark:bg-gray-800 dark:text-gray-100'>
					<div className='container flex flex-col justify-center px-4 py-8 mx-auto md:p-8'>
						<h2 className='text-2xl py-3 font-semibold sm:text-4xl'>
							Question And Answer
						</h2>

						<div className='space-y-4 text-justify'>
							<details className='w-full border rounded-lg'>
								<summary className='px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400'>
									Difference between SQL and NoSQL?
								</summary>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									SQL is the programming language used to interface with
									relational databases. (Relational databases model data as
									records in rows and tables with logical links between them).
									NoSQL is a class of DBMs that are non-relational and generally
									do not use SQL.SQL has been around for over 40 years, so it is
									recognizable, documented, and widely-used. Safe and versatile,
									it’s particularly well suited for complex queries. However,
									SQL restricts the user to working within a predefined tabular
									schema, and more care must be taken to organize and understand
									the data before it is used. The dynamic schemata of NoSQL
									databases allow representation of alternative structures,
									often alongside each other, encouraging greater flexibility.
									There is less emphasis on planning, greater freedom when
									adding new attributes or fields, and the possibility of varied
									syntax across databases. As a group, however, NoSQL languages
									lack the standard interface which SQL provides, so more
									complex queries can be difficult to execute.
								</p>
							</details>
							<details className='w-full border rounded-lg'>
								<summary className='px-4 py-6 focus:outline-none text-xl font-semibold focus-visible:ring-violet-400'>
									What is JWT, and how does it work?
								</summary>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									JWT, or JSON Web Token, is an open standard used to share
									security information between two parties — a client and a
									server. Each JWT contains encoded JSON objects, including a
									set of claims. JWTs are signed using a cryptographic algorithm
									to ensure that the claims cannot be altered after the token is
									issued..
								</p>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									JWTs differ from other web tokens in that they contain a set
									of claims. Claims are used to transmit information between two
									parties. What these claims are depends on the use case at
									hand. For example, a claim may assert who issued the token,
									how long it is valid for, or what permissions the client has
									been granted. A JWT is a string made up of three parts,
									separated by dots (.), and serialized using base64. In the
									most common serialization format, compact serialization, the
									JWT looks something like this: xxxxx.yyyyy.zzzzz.
								</p>
							</details>
							<details className='w-full border rounded-lg'>
								<summary className='px-4 py-6 text-2xl focus:outline-none focus-visible:ring-violet-400'>
									What is the difference between javascript and NodeJS?
								</summary>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									<span className='text-2xl font-bold'>JavaScript :</span>
									<br />
									1.Javascript is a programming language that is used for
									writing scripts on the website. <br />
									2.Javascript can only be run in the browsers.
									<br />
									3.It is basically used on the client-side. <br />
									4.Javascript is capable enough to add HTML and play with the
									DOM. <br />
									5.Javascript can run in any browser engine as like JS core in
									safari and Spidermonkey in Firefox. <br />
									6.It is the upgraded version of ECMA script that uses Chrome’s
									V8 engine written in C++. <br />
									<span className='text-2xl font-bold'>Node.js :</span> <br />
									1. NodeJS is a Javascript runtime environment. <br />
									2.We can run Javascript outside the browser with the help of
									NodeJS. <br />
									3.It is mostly used on the server-side. <br />
									4.Nodejs does not have capability to add HTML tags. <br />
									5.V8 is the Javascript engine inside of node.js that parses
									and runs Javascript. <br />
									6.Nodejs is written in C, C++ and Javascript.
								</p>
							</details>

							<details className='w-full border rounded-lg'>
								<summary className='px-4 py-6 focus:outline-none text-xl font-semibold focus-visible:ring-violet-400'>
									How does NodeJS handle multiple requests at the same time?
								</summary>
								<p className='px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-400'>
									Given a NodeJS application, since Node is single threaded, say
									if processing involves a Promise.all that takes 8 seconds,
									does this mean that the client request that comes after this
									request would need to wait for eight seconds? No. NodeJS event
									loop is single threaded. The entire server architecture for
									NodeJS is not single threaded. Before getting into the Node
									server architecture, to take a look at typical multithreaded
									request response model, the web server would have multiple
									threads and when concurrent requests get to the webserver, the
									webserver picks threadOne from the threadPool and threadOne
									processes requestOne and responds to clientOne and when the
									second request comes in, the web server picks up the second
									thread from the threadPool and picks up requestTwo and
									processes it and responds to clientTwo. threadOne is
									responsible for all kinds of operations that requestOne
									demanded including doing any blocking IO operations.
								</p>
							</details>
						</div>
					</div>
				</section>
			</div>
		);
};

export default Blog;