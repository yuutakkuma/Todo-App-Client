export interface Props {
  type?: 'button' | 'submit' | 'reset'
  title: string
  disabled?: boolean
  className?: string
  onClick: () => any
}
