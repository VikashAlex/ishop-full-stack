import React from 'react'
import TopMain from './components/homepage/TopMain'
import FretureBrand from './components/homepage/FretureBrand'
import DealsSec from './components/homepage/DealsSec'
import TopSelling from './components/homepage/TopSelling'
import BestSelling from './components/homepage/BestSelling'

function page() {
  return (
    <>
    <TopMain/>
    <FretureBrand/>
    <DealsSec/>
    <TopSelling/>
    <BestSelling/>
    </>
  )
}

export default page