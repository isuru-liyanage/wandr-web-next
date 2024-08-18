'use client';

import React, { useState } from 'react';
import BusinessHeader from '@/components/business/UserHeader'
import BusinessSideBar from '@/components/business/UserSidebar';
import {FeedbackContent} from "@/components/business/FeedbackContent";

const BusinessProfile: React.FC = () => {
  return (
    <div className="flex h-screen">
      <BusinessSideBar active={'Feedbacks'}/>
      <div className="flex-1 flex flex-col">
        <BusinessHeader page={'Profile'} />
        <div className="flex-1 overflow-y-auto">
          <FeedbackContent />
        </div>
      </div>
    </div>
  )
}

export default BusinessProfile;
