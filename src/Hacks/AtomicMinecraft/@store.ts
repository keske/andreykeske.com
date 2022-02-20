import create, { SetState } from "zustand";

export type Store = {
  readonly animation: boolean;
  readonly enableColor: boolean;
  readonly enableZoom: boolean;

  readonly showAir: boolean;
  readonly showLines: boolean;

  handleAnimation: (value: boolean) => void;
  handleEnableColor: (value: boolean) => void;
  handleEnableZoom: (value: boolean) => void;
  handleShowAir: (value: boolean) => void;
  handleShowLines: (value: boolean) => void;
};

const useStore = create<Store>((set: SetState<Store>) => ({
  animation: true,
  enableColor: false,
  enableZoom: false,

  handleAnimation: (value) => {
    set(() => ({ animation: value }));
  },

  handleEnableColor: (value) => {
    set(() => ({ enableColor: value }));
  },

  handleEnableZoom: (value) => {
    set(() => ({ enableZoom: value }));
  },

  handleShowAir: (value) => {
    set(() => ({ showAir: value }));
  },

  handleShowLines: (value) => {
    set(() => ({ showLines: value }));
  },

  showAir: false,
  showLines: true,
}));

export default useStore;
