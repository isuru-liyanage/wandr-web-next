'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader'
import AdminDashboardContent from '@/components/admin/AdminDashboardContent'
import AdminSidebar from '@/components/admin/AdminSideBar';
import UserSidebar from "@/components/user/UserSidebar";
import UserHeader from "@/components/user/UserHeader";
import UserDashboardContent from "@/components/user/UserDashboardContent";
import {UserBusinessProfileContent} from "@/components/user/UserBusinessProfileContent";

const UserBusinessProfile: React.FC = () => {
    return (
        <div className="flex h-screen">
            <UserSidebar active={'Business Profile'}/>
            <div className="flex-1 flex flex-col">
                <UserHeader page={'Business Profile'} />
                <div className="flex-1 overflow-y-auto">
                    <UserBusinessProfileContent />
                </div>
            </div>
        </div>
    )
}

export default UserBusinessProfile;
