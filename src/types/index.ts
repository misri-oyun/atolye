export type TabType = 'games' | 'bilsem';

export interface UserState {
  studentName: string;
  isLoggedIn: boolean;
  accessKey: string;
  stars: number;
  awardedKeys: string[];
  avatar?: string;
}

export type DifficultyLevel = 'easy' | 'medium' | 'hard';

// 1. MetaForms Types
export interface MetaPiece {
  id: string;
  color: 'red' | 'blue' | 'yellow';
  shape: 'circle' | 'square' | 'triangle';
  colorHex: string;
  label: string;
  icon: string;
}

export interface MetaformsLevel {
  id: DifficultyLevel;
  name: string;
  clues: string[];
  socraticHint: string;
  solution: string[]; // 9 piece IDs in 3x3 grid
}

// 2. Numbers Types
export interface NumbersLevel {
  id: DifficultyLevel;
  name: string;
  size: number;
  instruction: string;
  rowTargets?: number[];
  colTargets?: number[];
  initial: (number | null)[];
  isMagicSquare?: boolean;
  magicTarget?: number;
  socraticHint: string;
}

// 3. Colors Types
export interface ColorDef {
  id: string;
  hex: string;
  name: string;
  textColor: string;
}

export interface ColorsLevel {
  id: DifficultyLevel;
  name: string;
  size: number;
  paletteCount: number;
  initial: (string | null)[];
  socraticHint: string;
}

// 4. Sudoku Types
export interface SudokuLevel {
  id: DifficultyLevel;
  name: string;
  size: number;
  boxW: number;
  boxH: number;
  initial: (number | null)[];
  solution: number[];
  socraticHint: string;
}

// 5. Look Look Types
export interface LookSymbol {
  id: string;
  name: string;
  iconName: string;
  color: string;
}

// 6. Genius Cube Types
export interface VoxelColumn {
  x: number; // grid column (0 to 3)
  y: number; // grid row (0 to 3)
  height: number; // number of stacked cubes in this column
}

export interface GeniusCubeLevel {
  id: DifficultyLevel;
  name: string;
  question: string;
  columns: VoxelColumn[]; // Ground truth for 3D isometric voxel rendering
  correctAnswer: number;
  options: number[];
  explanation: string;
}

// BİLSEM Types
export interface BilsemOption {
  label: 'A' | 'B' | 'C' | 'D';
  text: string;
  visual?: string; // Optional SVG or HTML snippet for non-verbal choices
  isCorrect: boolean;
}

export interface BilsemQuestion {
  num: number;
  cat: string;
  prompt: string;
  visual: string; // SVG or HTML visual snippet
  options: BilsemOption[];
  explanation?: string; // Step-by-step pedagogical explanation shown after test completion
}
