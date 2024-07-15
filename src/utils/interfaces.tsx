export interface ControlPanelProps
  extends AlphabetProps,
    ModeProps,
    ShiftProps {}

export interface InputContainerProps {
  text: string;
  setText: (newText: string) => void;
}

export interface OutputContainerProps {
  text: string;
}

export interface ModeProps {
  mode: string;
  setMode: (newMode: string) => void;
}

export interface ShiftProps {
  characters: string;
  shiftNumber: number;
  setShiftNumber: (newShiftNumber: number) => void;
}

export interface AlphabetProps {
  characters: string;
  setCharacters: (newCharacters: string) => void;
}
