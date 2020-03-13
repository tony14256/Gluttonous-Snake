export enum color {
  "#ddd",
  "#f00",
  "#000"
}

export const codes = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"];

export const MAX_HEIGHT = 20;
export const MAX_WIDTH = 48;

export const createStage = () => {
  return Array.from(Array(MAX_HEIGHT), (_, y) => {
    return Array.from(Array(MAX_WIDTH), (_, x) => {
      return 0;
    });
  });
};

export const fourDirection: any = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 }
};
