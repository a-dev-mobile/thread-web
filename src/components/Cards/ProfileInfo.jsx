import React from 'react'
import { getInitials } from '../../utils/helper';

const ProfileInfo = ({ onLogout }) => {
  return (
    <div className='flex items-center gap-3'>

      <div className='w-12 h-12 flex items-center justify-center rounded-full text-slate-950 font-medium bg-slate-100'>
      {getInitials("Dmitriy Trofimov")} </div>
      <div>
        <p className='text-sm font-medium' >Dmitriy Trofimov</p>
        <div>
          <button className='underline text-sm text-slate-700'
            onClick={onLogout}>
            Logout
          </button>

        </div>

      </div>
    </div>
  );
};


export default ProfileInfo;