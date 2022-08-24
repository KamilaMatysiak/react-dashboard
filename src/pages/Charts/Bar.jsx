import React from 'react'
import { ChartsHeader} from '../../components'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, ColumnSeries, DataLabel } from '@syncfusion/ej2-react-charts';

import { barCustomSeries, barPrimaryYAxis, barPrimaryXAxis } from '../../data/dummy'
import { useStateContext } from '../../contexts/ContextProvider'

const Bar = () => {
  const { currentMode } = useStateContext();

  return (
    <div className='m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl'>
      <ChartsHeader category="Chart" title="Bar Chart"/>
      <div className='w-full'>
      <div>
        <ChartComponent
          id="bar-chart"
          height='420px'
          primaryYAxis={barPrimaryYAxis}
          primaryXAxis={barPrimaryXAxis}
          chartArea={{border: {width: 0}}}
          tooltip={{enable: true}}
          background={currentMode === 'Dark' ? '#33373E' : '#fff'}
          >
          <Inject services={[Legend, Category, Tooltip, ColumnSeries, DataLabel]}/>
          <SeriesCollectionDirective>
            {barCustomSeries.map((item, index) => (
              <SeriesDirective key={index}{...item}/>
            ))}
          </SeriesCollectionDirective>
        </ChartComponent>
      </div>
      </div>
    </div>
  )
}

export default Bar