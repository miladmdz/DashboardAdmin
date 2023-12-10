import React, { useContext } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import "./WidgetsSm.css"
import productsContext from '../../Contexts/ProductDataContext';
import { Link } from 'react-router-dom';

function WidgetsSm() {

    const newUserContext=useContext(productsContext)

  return (
    <div className='widgetSm'>
        <span className="widgetSmTitle">New Join Member</span>
        <ul className="widgetSmList">
            {newUserContext.newUsers.map(user=>(
            <li key={user.id} className="widgetSmListItem">
                <img src={user.avatar} alt="profile" className='widgetSmImg' />
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