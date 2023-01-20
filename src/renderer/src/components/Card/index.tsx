import { Box, Flex, Text } from '@chakra-ui/react'
import { FC } from 'react'

const Card: FC<Card.Props> = ({ bg, text, count }) => {
  return (
    <Flex direction="column" borderRadius="12px" bg="#fff" px="16px" pt="18px" pb="12px">
      <Box w="80px" h="100px">
        <Box w="33px" h="35px" borderRadius="10px" bg={bg} />
        <Text fontSize="18px" color="#282828" pt="10px" pb="8px">
          {text}
        </Text>
        <Text fontSize="14px" color="#787878">
          {count} Tasks
        </Text>
      </Box>
    </Flex>
  )
}
export default Card
