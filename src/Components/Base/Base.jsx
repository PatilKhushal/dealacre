'use client'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setData } from '../../context/dataSlice';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../Header/Header'), { ssr: false });
const Display = dynamic(() => import('../Display/Display'), { ssr: false });
const Loader = dynamic(() => import('../Loader/Loader'), { ssr: false });


function Base({initialData}) {
  // using state data
  const data = useSelector((state) => state.dataSlice.data);  
  // using redux dispatcher to manipulate states
  const dispatch = useDispatch();

  // storing data in state
  useEffect(() => {
    dispatch(setData(initialData))
  }, [dispatch, initialData])


  return (
      <div
     className='h-dvh flex flex-col bg-light-bg dark:bg-dark-bg'>
      <Header/>
      {
        // displaying data only when it's actually present else showing skeleton loader
        data?.users?.length > 0 ? <Display/> : <Loader/>
      }
    </div>
  )
}

export default Base   
