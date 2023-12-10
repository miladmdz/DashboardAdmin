import React from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import { newMembers } from '../../datas';
import "./WidgetsSm.css"

function WidgetsSm() {

  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Member</span>
        <ul className="widgetSmList">
            {newMembers.map(user=>(
            <li key={user.id} className="widgetSmListItem">
                <img src={user.img} alt="profile" className='widgetSmImg' />
                <div className="widgetSmUser">
                    <span className="widgetSmUserName">{user.username}</span>
                    <spam className="widgetSmUserTitle">{user.title}</spam>
                </div>
                <button className="widgetSmButton">
                    <VisibilityIcon className='widgetSmIcon'/>
                </button>
            </li>
            ))}
        </ul>
    </div>
  )
}
export default WidgetsSm