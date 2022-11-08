import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../components/Home/Home';
import Service from '../components/Service/Service';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Main from '../Leyout/Main';

const Routes = () => {
    const router = createBrowserRouter([
			{
				path: '/',
				element: <Main></Main>,
				children: [
					{
						path: '/',
						element: <Home></Home>,
					},
					{
						path: '/home',
						element: <Home></Home>,
					},
					{
						path: '/services',
						element: <Service></Service>,
					},
					{
						path: '/service/:id',
						element: <ServiceDetails></ServiceDetails>,
						loader: ({ params }) =>
							fetch(`http://localhost:5000/service/${params.id}`),
					},
				],
			},
		]);
    return (
        <div>
           <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routes;