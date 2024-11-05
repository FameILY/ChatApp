import React from 'react'
import ChatPage from './ChatPage'
import Sidebar from '../components/Sidebar'
function Dashboard() {
  return (
    <div className='flex justify-between flex-row'>
<Sidebar/>
<ChatPage/>
    </div>
  )
}

export default Dashboard