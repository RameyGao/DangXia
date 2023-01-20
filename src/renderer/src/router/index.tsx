import Layout from '@renderer/layout'
import DashBoard from '@renderer/pages/DashBoard'
import LeaveMessage from '@renderer/pages/LeaveMessage'
import PlanTracking from '@renderer/pages/PlanTracking'
import Setting from '@renderer/pages/Setting'
import Today from '@renderer/pages/Today'
import { createHashRouter } from 'react-router-dom'

const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: 'dashboard',
        element: <DashBoard />
      },
      {
        path: 'today',
        element: <Today />
      },
      {
        path: 'plan-tracking',
        element: <PlanTracking />
      },
      {
        path: 'setting',
        element: <Setting />
      },
      {
        path: 'leave-message',
        element: <LeaveMessage />
      }
    ]
  }
])

export default router
