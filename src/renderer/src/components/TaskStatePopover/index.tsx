import { Button, Menu, MenuItem } from '@chakra-ui/react'
import { FC, useState } from 'react'

const TaskStatePopover: FC<TaskStatePopover.Props> = ({ id }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null)

  const handleClick = (evt: any) => {
    setAnchorEl(evt.target)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <>
      <Button
        id={id}
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        sx={{
          width: '30px',
          height: '30px',
          minWidth: '30px',
          padding: 0,
          borderRadius: '30px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        {/* <SvgIcon>
          <svg
            width="30"
            height="30"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse cx="15" cy="15" rx="15" ry="15" fill="#FFE602" />
            <ellipse cx="15" cy="15" rx="10" ry="10" fill="#E47F7F" />
          </svg>
        </SvgIcon> */}
      </Button>
      <Menu
        id="fade-menu"
        // MenuListProps={{
        //   'aria-labelledby': 'fade-button'
        // }}
        // anchorEl={anchorEl}
        // anchorOrigin={{
        //   vertical: 'bottom',
        //   horizontal: 'right'
        // }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'left'
        // }}
        // sx={{
        //   marginLeft: '-30px'
        // }}
        // open={open}
        onClose={handleClose}
        // TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>删除</MenuItem>
        <MenuItem onClick={handleClose}>完成</MenuItem>
        {/* 延后n天将会在后n天提示，不提供明确日期，为了强调today，弱化之后的日子 */}
        {/* 可延后1天、3天、一周 */}
        <MenuItem onClick={handleClose}>延后</MenuItem>
      </Menu>
    </>
  )
}

export default TaskStatePopover
