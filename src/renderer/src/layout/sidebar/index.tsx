import { Box, Center, Circle, Flex, Icon, Tooltip } from '@chakra-ui/react'
import { FC } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { getMenuItems, getOptionItems } from './constant'

const Sidebar: FC = () => {
  const location = useLocation()
  const navigate = useNavigate()

  // 验证选中
  const isChecked = (link: string | undefined): boolean => !!link && location.pathname === link

  // 渲染Menu
  const renderMenuItem: FC<SideBar.SideItem> = ({ title, icon, link, click }) => (
    <Tooltip label={title || ''} placement="right" key={title || 'default'} isDisabled={!title}>
      <Center py="20px" onClick={(): void => (link ? navigate(link) : click?.())}>
        <Icon as={icon} color={isChecked(link) ? '#8774E7' : '#003400'} fontSize="28px" />
      </Center>
    </Tooltip>
  )

  return (
    <Flex
      w="80px"
      h={'100vh'}
      direction="column"
      justify={'space-between'}
      align={'center'}
      bg="#f3f3f3"
    >
      <Box>
        <Center my="20px" color="#fff">
          <Circle size="40px" bg="tomato" color="white">
            DX
          </Circle>
        </Center>
        {/* 菜单栏 */}
        {getMenuItems().map(renderMenuItem)}
      </Box>

      {/* 操作栏 */}
      <Box>{getOptionItems().map(renderMenuItem)}</Box>
    </Flex>
  )
}

export default Sidebar
