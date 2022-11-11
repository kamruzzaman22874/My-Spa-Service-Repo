import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const PrivateRoute = ({ children ,  }) => {
	const { user, loading } = useContext(AuthContext);
	
	const location = useLocation();
	if (loading) {
		return <div>
			<h1>Loading......</h1>
		</div>
	}
	if (!user) {
		return <Navigate to='/login' state={{ path: location }} replace></Navigate>;
	}
	return children;
};

export default PrivateRoute;
