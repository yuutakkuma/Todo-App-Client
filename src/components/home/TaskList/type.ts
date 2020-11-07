export interface Props {
  tasks: {
    id: number
    task: string
  }[]
  disabled: boolean
  isLoading?: boolean
  deleteId?: number | null
  onClick: (id: number) => any
}
