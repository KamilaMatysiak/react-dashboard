import React from 'react'
import { ChartsHeader} from '../../components'
import { ChartComponent, SplineAreaSeries, SeriesCollectionDirective, SeriesDirective, Inject, DateTime, Legend } from '@syncfusion/ej2-react-charts'

import { areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Area = () => {

  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Chart" title="Area Chart"/>
      <div className='w-full'>
      <div>
        <ChartComponent
          id="area-chart"
          height='420px'
          primaryXAxis={areaPrimaryXAxis}
          primaryYAxis={areaPrimaryYAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          >
          <Inject services={[SplineAreaSeries, DateTime, Legend]}/>
          <SeriesCollectionDirective>
            {areaCustomSeries.map((item, index) => (
              <SeriesDirective key={index}{...item}/>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      </div>
    </div>
  )
}

export default Area