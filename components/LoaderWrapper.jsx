import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../Context/AppProvider/AppProvider'
import { useRouter } from 'next/router';
import { ThreeDots } from 'react-loader-spinner';

const LoaderWrapper = ({ children }) => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

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

    const { userData } = useContext(AppContext)

    if (!userData && (router.asPath !== '/' && router.asPath !== '/signup')) {
        return <div className='flex justify-center items-center min-h-screen'>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#081B33"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </div>
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
