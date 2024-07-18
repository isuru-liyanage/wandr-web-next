'use client';

import AdminHeader from '@/components/admin/AdminHeader'
import AdminSidebar from '@/components/admin/AdminSideBar';
import AdvertisementTable from '@/components/admin/AdvertisementsTable';


const AdminAdvertisements: React.FC = () => {
  return (
    <div className="flex h-screen">
      <AdminSidebar active={'Advertisements'}/>
      <div className="flex-1 flex flex-col">
        <AdminHeader page={'Advertisements'} />
      <div className="flex-1 overflow-y-auto">
          <AdvertisementTable/>
        </div>
      </div>
    </div>
  )
}

export default AdminAdvertisements;
