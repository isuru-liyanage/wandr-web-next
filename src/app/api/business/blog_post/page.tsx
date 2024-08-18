'use client';

import React, { useState } from 'react';
import BusinessHeader from '@/components/business/UserHeader'
import {UserBusinessProfileEditContent} from '@/components/business/UserBusinessProfileEditContent'
import BusinessSideBar from '@/components/business/UserSidebar';
import {BlogViewContent} from "@/components/business/BlogViewContent";

const BusinessProfile: React.FC = () => {
  return (
    <div className="flex h-screen">

      <div className="flex-1 flex flex-col">
        <BusinessHeader page={'Profile'} />
        <div className="flex-1 overflow-y-auto">
          <BlogViewContent />
        </div>
      </div>
    </div>
  )
}

export default BusinessProfile;
