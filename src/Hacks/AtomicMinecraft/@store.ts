import create, { SetState } from "zustand";

export type Store = {
  readonly animation: boolean;
  readonly enableColor: boolean;
  readonly enableZoom: boolean;

  readonly height: number;
  readonly width: number;

  readonly showAir: boolean;
  readonly showLines: boolean;

  handleAnimation: (value: boolean) => void;
  handleEnableColor: (value: boolean) => void;
  handleEnableZoom: (value: boolean) => void;
  handleHeight: (value: number) => void;
  handleShowAir: (value: boolean) => void;
  handleShowLines: (value: boolean) => void;
  handleWidth: (value: number) => void;
};

const useStore = create<Store>((set: SetState<Store>) => ({
  animation: false,
  enableColor: true,
  enableZoom: true,

  handleAnimation: (value) => {
    set(() => ({ animation: value }));
  },
  handleEnableColor: (value) => {
    set(() => ({ enableColor: value }));
  },

  handleEnableZoom: (value) => {
    set(() => ({ enableZoom: value }));
  },

  handleHeight: (value) => {
    set(() => ({ height: value }));
  },

  handleShowAir: (value) => {
    set(() => ({ showAir: value }));
  },

  handleShowLines: (value) => {
    set(() => ({ showLines: value }));
  },

  handleWidth: (value) => {
    set(() => ({ width: value }));
  },

  height: 50,
  showAir: false,
  showLines: true,
  width: 50,
}));

export default useStore;
