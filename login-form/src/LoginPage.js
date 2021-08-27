import React, { useState , useEffect} from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-contetx';

function LoginPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      
        const userLoginInfo = localStorage.getItem('isLoggedIn');        
        if (userLoginInfo === '1') {
            setIsLoggedIn(true);
            console.log(userLoginInfo)
        }
    }, []);

    const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
          setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn')
        setIsLoggedIn(false);
    };

    return (      
            <AuthContext.Provider value={
                { isLoggedIn: isLoggedIn,
                onLogout : logoutHandler
                }
            }>
                <MainHeader  />
                <main>
                    {!isLoggedIn && <Login onLogin={loginHandler} />}
                    {isLoggedIn && <Home onLogout={logoutHandler} />}
                </main>
            </AuthContext.Provider>      
    );
}

export default LoginPage
