import React from 'react'
import Drawer from '../../components/drawer'
import Layout from '../../components/layout/layout'
import PriceTable from '../../components/priceTable'
import ProfileCard from '../../components/profile/profileCard'
import UserDetails from '../../components/profile/userDetails'


export default function Profile() {
    return (
        <Layout>
            <div className='flex flex-row flex-wrap justify-center items-center mt-20'>
                <Drawer/>
                <div className='flex flex-col'>
                    <ProfileCard/>
                    <UserDetails/>
                </div>
            </div>
        
</Layout>
        
    )
}
