import React from 'react'
import { StackedChart, ChartsHeader } from '../../components'

const Stacked = () => {
  return (
    <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <ChartsHeader category="Chart" title="Pie" />
      <div className='w-full'><StackedChart /></div>
    </div>
  )
}

export default Stacked