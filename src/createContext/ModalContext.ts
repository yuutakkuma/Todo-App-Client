import { createContext } from 'react';

interface ModalCtx {
  text: string | undefined;
  state: boolean | undefined;
}

export const ModalContext = createContext<ModalCtx>({
  text: undefined,
  state: undefined,
});
