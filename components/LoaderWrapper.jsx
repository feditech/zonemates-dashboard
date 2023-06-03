import React, { useContext } from 'react'
import { AppContext } from '../store/AppProvider/AppProvider'

import { ThreeDots } from 'react-loader-spinner'
const LoaderWrapper = ({ children }) => {
    const { userData } = useContext(AppContext)

    console.log("user data ????", userData)
    if (!userData) {
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
    return (
        <div>{children}</div>
    )
}

export default LoaderWrapper