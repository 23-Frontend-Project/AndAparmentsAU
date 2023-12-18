import React from 'react';
import SLogo from './SLogo';
export default function SLogoUHeader() {
  return (
    <div className="w-full   h-[274px] flex justify-content items-center">
      <div className="w-full h-full bg-black"></div>
      <SLogo width={'auto'} height={'274px'} />
      <div className="w-full h-full bg-black"></div>
    </div>
  );
}
