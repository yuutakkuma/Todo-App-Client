export interface Props {
  tasks: {
    id: number
    task: string
  }[]
  disabled: boolean
  onClick: () => any
}
