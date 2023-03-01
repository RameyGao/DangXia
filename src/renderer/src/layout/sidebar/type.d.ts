declare namespace SideBar {
  // 侧边元素
  type SideItem = {
    title?: string
    link?: string
    icon: IconType
    click?: () => void
  }
}
