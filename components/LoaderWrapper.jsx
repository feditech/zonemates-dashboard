import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppProvider/AppProvider'
import { useRouter } from 'next/router';
import { ThreeDots } from 'react-loader-spinner';

const LoaderWrapper = ({ children }) => {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const { userData } = useContext(AppContext)

    useEffect(() => {
        const handleStart = () => {
            setLoading(true);
        };

        const handleComplete = () => {
            setTimeout(() => setLoading(false), 500)
        };

        router.events.on('routeChangeStart', handleStart);
        router.events.on('routeChangeComplete', handleComplete);
        router.events.on('routeChangeError', handleComplete);

        return () => {
            router.events.off('routeChangeStart', handleStart);
            router.events.off('routeChangeComplete', handleComplete);
            router.events.off('routeChangeError', handleComplete);
        };
    }, [router]);




    useEffect(() => {
        if (!userData && !['/', '/signup', '/forgotPassword'].includes(router.pathname)) {
            // Redirect to the login page or any other page if the user is not signed in
          router.push('/');
        }
      }, [userData, router]);
    
      if (!userData && !['/', '/signup', '/forgotPassword'].includes(router.pathname)) {
        return null; // Return null to prevent rendering the content until redirection occurs
      }





    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <ThreeDots
                    height={80}
                    width={80}
                    color="#081B33"
                    ariaLabel="three-dots-loading"
                    visible={true}
                />
            </div>
        );
    }
    return <div>{children}</div>;
};

export default LoaderWrapper;