import React from 'react'
import Features from '../../components/features/Features'
import "./Home.css"
import Chart from '../../components/chart/Chart'
import { xAxisData } from '../../datas'
import WidgetsSm from '../../components/widgetsSm/WidgetsSm'
import WidgetLg from '../../components/widgetLg/WidgetLg'

function Home() {
  return (
    <div className="home">
      <Features/>
      <Chart grid title="Month Sale" data={xAxisData} dataKey="sale"/>
      <div className="homeWidget">
        <WidgetsSm/>
        <WidgetLg/>
      </div>
    </div>
  )
}
export default Home