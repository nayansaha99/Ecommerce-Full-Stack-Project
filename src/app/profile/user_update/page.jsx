
import React from 'react';


import UserUpdate from '@/components/user/Profile/UserUpdate';
import UserDashboard from '@/components/user/Profile/UserDashboard';

const page = () => {
    return (
        <div>
            <UserDashboard/>
            <UserUpdate/>
        </div>
    );
};

export default page;