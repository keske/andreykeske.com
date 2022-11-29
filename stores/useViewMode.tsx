import create from "zustand";

export type ViewMode = "detail" | "list";

export type Store = {
  handleViewMode: () => void;

  readonly viewMode: ViewMode;
};

const useViewMode = create<Store>((set) => ({
  handleViewMode: () => {
    set(({ viewMode }) => ({
      viewMode: viewMode === "detail" ? "list" : "detail",
    }));
  },

  viewMode: "list",
}));

export default useViewMode;
