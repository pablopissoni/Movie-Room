import React from 'react'
import { GroupCards } from '../GroupCards'
import { NavBar } from '../NavBar'
import { SerchBar } from '../SerchBar'

export const HomePage = () => {
  return (
    <div>
        {/* <NavBar /> */}
        <SerchBar />
        <GroupCards />
    </div>
  )
}
