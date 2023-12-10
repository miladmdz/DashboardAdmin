import React from 'react'
import{
    ResponsiveContainer,
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip
}from"recharts"
import "./Chart.css"

function Chart({title,data,dataKey,grid}) {
  return (
    <div className='cahrt'>
        <h3 className="chartTitle">{title}</h3>
        <ResponsiveContainer width="100%" aspect={4}>
            <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd'/>
                <Line dataKey={dataKey} stroke='#5550bd' type="monotone"/>
                <Tooltip/>
                {grid && <CartesianGrid stroke='#e0dfdf' strokeDasharray={10} />}
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
export default Chart