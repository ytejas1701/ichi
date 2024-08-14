export interface StyleConfig {
  [propName: string]: string;
}

export enum Direction {
  "UP" = "up",
  "DOWN" = "down",
  "LEFT" = "left",
  "RIGHT" = "right",
}

export interface Size {
  heightCells: number,
  widthCells: number
}

export enum InputStatus {
  "UNCHECKED" = "unchecked",
  "CORRECT" = "correct",
  "INCORRECT" = "incorrect"
}

export enum InputType {
  "MEANING" = 0,
  "READING" = 1
}