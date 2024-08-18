'use client';

import React, { useState } from 'react';
import BusinessHeader from '@/components/business/UserHeader'
import BusinessSideBar from '@/components/business/UserSidebar';
import ChatList from '@/components/business/ChatList';
import ChatWindow from '@/components/business/ChatWindow';
import {ChatContent} from "@/components/business/chat/ChatContent";

const BusinesChat: React.FC = () => {
  return (
    <div className="flex h-screen">
      <BusinessSideBar active={'Chat'}/>
      <div className="flex-1 flex flex-col">
        <BusinessHeader page={'Chat'} />
          <ChatContent />
      </div>
    </div>
  )
}

export default BusinesChat;
