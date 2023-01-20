import { Flex, Spacer, Wrap } from '@chakra-ui/react'
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
    <Flex>
      {ProgressList.map((c: Card.Props, i: number) => (
        <>
          <Card key={c.text} {...c} />
          {ProgressList.length !== i + 1 && <Spacer />}
        </>
      ))}
    </Flex>
  )
}

const Summary: FC = ({}: DashBoard.SummaryProps) => {
  return <Flex w="">Summary</Flex>
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
    <Wrap>
      <Flex>
        <Flex direction="column" w="560px">
          <CardList />
          <Summary />
        </Flex>
        <Spacer />
        <Flex>
          <TodaySchedule />
        </Flex>
      </Flex>
      <WeekSchedule />
      <Notification />
    </Wrap>
  )
}

export default Dashboard
export { CardList, Summary, TodaySchedule, WeekSchedule, Notification }
