'use client';

import React, { useState } from 'react';
import AdminHeader from '@/components/admin/AdminHeader'
import AdminDashboardContent from '@/components/admin/AdminDashboardContent'
import AdminSidebar from '@/components/admin/AdminSideBar';
import UserSidebar from "@/components/user/UserSidebar";
import UserHeader from "@/components/user/UserHeader";
import UserDashboardContent from "@/components/user/UserDashboardContent";

const AdminDashboard: React.FC = () => {
    return (
        <div className="flex h-screen">
            <UserSidebar active={'Dashboard'}/>
            <div className="flex-1 flex flex-col">
                <UserHeader page={'Dashboard'} />
                <div className="flex-1 overflow-y-auto">
                    <UserDashboardContent />
                </div>
            </div>
        </div>
    )
}

export default AdminDashboard;
