import React from 'react'
import { GroupCards } from '../GroupCards'
import { NavBar } from '../NavBar'
import { SerchBar } from '../SerchBar'

export const HomePage = () => {
  return (
    <div className=''>
        {/* <NavBar /> */}
        <SerchBar />
        <GroupCards />
    </div>
  )
}
