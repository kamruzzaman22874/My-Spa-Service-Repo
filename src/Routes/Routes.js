import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AddService from '../components/AddService/AddService';
import Blog from '../components/Blog/Blog';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import Home from '../components/Home/Home';
import Service from '../components/Service/Service';
import ServiceDetails from '../components/ServiceDetails/ServiceDetails';
import Signup from '../components/Signup/Signup';
import PrivateRoute from '../context/PrivateRoute/PrivateRoute';
import Main from '../Leyout/Main';
import Login from '../Login/Login';

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
						path: '/blog',
						element: <Blog></Blog>
					},
					{
						path: '/addservice',
						element: <AddService></AddService>
					},
					{
						path: '*',
						element:<ErrorPage></ErrorPage>
					},
					{
						path: '/services',
						element: (
							<PrivateRoute>
								<Service></Service>
							</PrivateRoute>
						)
					},
					{
						path: '/signup',
						element: <Signup></Signup>,
					},
					{
						path: '/login',
						element: <Login></Login>,
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