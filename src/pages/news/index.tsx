import React from 'react'
import NewsComponents from '../../components/cardnews'
import Switcher from '@/components/switcher'

const News = () => {
    return (
        <>
            <h1>Новини</h1>
            <div className='container'>
                <NewsComponents />
                <Switcher />
            </div>
        </>
    )
}

export default News