export interface Props {
  tasks: {
    id: number
    task: string
  }[]
  disabled: boolean
  isLoading?: boolean
  onClick: (id: number) => any
}
