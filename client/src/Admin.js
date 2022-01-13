import React from 'react'
import { Route} from 'react-router-dom'
import Sidebar from './components/Admin/sidebar/Sidebar'
import Topbar from './components/Admin/topbar/Topbar'

const Admin = ({component : Component}) => {
    
    return (

        <div className='container'>
        <div>
           <Topbar/>
           <div className='fixingPosition'>
           <Sidebar/>
           <Route  component={Component}/>
          </div>
           </div>
             
              </div>
         
    )
}

export default Admin
