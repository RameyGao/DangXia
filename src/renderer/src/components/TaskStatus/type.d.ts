declare namespace TaskStatus {
  type Props = {
    status: keyof TsList
  }

  type TsStatusBg = {
    outBg: string
    innerBg: string
  }
  type TsList = {
    ongoing: TsStatusBg
    delay: TsStatusBg
    complet: TsStatusBg
  }
}
