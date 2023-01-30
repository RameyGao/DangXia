declare namespace TaskStatus {
  enum Status {
    Doing = 0,
    Complet = 1,
    Delay = 2,
    Cancel = 3
  }
  type Props = {
    status: Status
  }

  type TsList = {
    outBg: string
    innerBg: string
  }[]
}
