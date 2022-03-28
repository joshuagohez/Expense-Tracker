import React from 'react'
import './chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
  //calc max value by extracting all month's values and using highest value as max
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value); //array of values
  const totalMaxValue = Math.max(...dataPointValues); //extract values out of array for Math.max to work

  return (
    <div className='chart'>
        {props.dataPoints.map(dataPoint => 
            <ChartBar 
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={totalMaxValue}
                label={dataPoint.label}
            />
        )}
    </div>
  )
}

export default Chart