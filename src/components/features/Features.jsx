import "./Features.css"
import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function Features() {
  return (
    <div className='features'>
        <div className="featuresItem">
            <span className="featureTitle">Revanue</span>
            <div className="featureContainer">
                <span className="featureMoney">$2,415</span>
                <span className="featureRate">-11.4<ArrowDownwardIcon className='featureIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
        <div className="featuresItem">
            <span className="featureTitle">Sales</span>
            <div className="featureContainer">
                <span className="featureMoney">$4,415</span>
                <span className="featureRate">-1.4<ArrowDownwardIcon className='featureIcon negative'/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
        <div className="featuresItem">
            <span className="featureTitle">Cost</span>
            <div className="featureContainer">
                <span className="featureMoney">$2,225</span>
                <span className="featureRate">-2.4<ArrowUpwardIcon className='featureIcon '/>
                </span>
            </div>
            <span className="featureSub">Compared to last month</span>
        </div>
    </div>
  )
}
export default Features