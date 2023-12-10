import React from 'react'
import "./WidgetLg.css"
import { transaction } from '../../datas'

function WidgetLg() {
    const Button=({type})=>{
        return <button className={'WidgetLgButton '+ type}>{type}</button>
    }
  return (
    <div className='WidgetLg'>
        <h3 className="WidgetLgTitle">Last TransActions</h3>
        <table className="WidgetLgTable">
            <tr className="WidgetLgTr">
                <th className="WidgetLgTh">Customer</th>
                <th className="WidgetLgTh">Date</th>
                <th className="WidgetLgTh">Amount</th>
                <th className="WidgetLgTh">Status</th>
            </tr>
            {transaction.map(user=>(
            <tr key={user.id} className="WidgetLgTr">
                <td className="WidgetLgUser">
                    <img src={user.img} className='WidgetLgImg' />
                    <span className='WidgetLgName'>{user.customer}</span>
                </td>
                <td className='WidgetLgDate'>
                    {user.date}
                </td>
                <td className="WidgetLgAmount">
                    $ {user.amount}
                </td>
                <td className="WidgetLgStatus">
                    <Button type={user.status} />
                </td>
            </tr>
            ))}

           
        </table>
    </div>
  )
}
export default WidgetLg