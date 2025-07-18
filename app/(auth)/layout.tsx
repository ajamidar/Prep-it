import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
import React, { ReactNode } from 'react'

const Authlayout = async ({ children }: { children: ReactNode}) => {
  const isUserAuthenicated = await isAuthenticated();

  if(isUserAuthenicated) redirect('/');

  return (
    <div className='flex flex-col'>{children}</div>
  )
}

export default Authlayout