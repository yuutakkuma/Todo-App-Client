export enum LoadingMode {
  LARGE = 'LARGE',
  MIDIUM = 'MIDIUM',
  SMALL = 'SMALL'
}

export interface Props {
  mode: LoadingMode
}
