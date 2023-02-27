import Card from '@renderer/components/Card'
import { FC } from 'react'

const ProgressList = [
  {
    bg: '#c1e4e9',
    text: 'Doing',
    count: 1
  },
  {
    bg: '#cc7eb1',
    text: 'Delay',
    count: 2
  },
  {
    bg: '#21a675',
    text: 'Complet',
    count: 3
  },
  {
    bg: '#8b968d',
    text: 'Cancel',
    count: 10
  }
]
const CardList: FC<DashBoard.CardListProps> = ({}) => {
  return (
    <div className="flex">
      {ProgressList.map((c: Card.Props, i: number) => (
        <>
          <Card key={c.text} {...c} />
          {ProgressList.length !== i + 1 && <div />}
        </>
      ))}
    </div>
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
