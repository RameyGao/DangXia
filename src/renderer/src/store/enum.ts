type TPriority = {
  [key in Task.TaskPriority]: string
}
// 优先级
export const PRIORITY: TPriority = { none: '无', low: '低', middle: '中', high: '高' }
