import { Box, Flex, Text } from '@chakra-ui/react'
import DayTime from '@renderer/components/DayTime'
import { FC } from 'react'

const PageHeader: FC<LayoutHeader.Props> = ({ title, children }) => {
  return (
    <Box pb="22px" position="relative">
      <Flex align="baseline">
        <Text fontSize="32px" color="#000" fontWeight="medium">
          {title}
        </Text>
        <DayTime ml="8px" />
      </Flex>
      {children}
    </Box>
  )
}

export default PageHeader
