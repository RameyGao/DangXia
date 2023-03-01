import ProgressCard from '@renderer/components/Progress/Card'
import ProgressCardList from '@renderer/components/Progress/CardList'
import { FC } from 'react'

const Progress = [
  { text: 'Ongoing', value: 3, bgColor: 'bg-gray-300' },
  { text: 'Delay', value: 3, bgColor: 'bg-indigo-300' },
  { text: 'Complet', value: 3, bgColor: 'bg-green-300' },
  { text: 'Cancel', value: 3, bgColor: 'bg-yellow-300' }
]
const CardList: FC<DashBoard.CardListProps> = ({}) => {
  return (
    <ProgressCardList sx="w-[800px] min-w-[400px] overflow-scroll">
      {Progress.map((v) => (
        <ProgressCard {...v} key={v.text} />
      ))}
    </ProgressCardList>
  )
}

const Summary: FC = ({}: DashBoard.SummaryProps) => {
  return <div className="flex">Summary</div>
}

const TodaySchedule: FC = ({}: DashBoard.TodayScheduleProps) => {
  return <div>today</div>
}

const WeekSchedule: FC = ({}: DashBoard.WeekScheduleProps) => {
  return <div>weekschedule</div>
}

const Notification: FC = ({}: DashBoard.NotificationProps) => {
  return <div>Notification</div>
}

// dashboard
const Dashboard: FC = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-col w-[560px]">
          <CardList />
          <Summary />
        </div>
        <div />
        <div className="flex">
          <TodaySchedule />
        </div>
      </div>
      <WeekSchedule />
      <Notification />
    </div>
  )
}

export default Dashboard
export { CardList, Summary, TodaySchedule, WeekSchedule, Notification }
