
export interface Question {
  id: number;
  text: string;
  image?: string;
  options: {
    key: string;
    text: string;
  }[];
  correctAnswer: string;
}

export interface Student {
  id: number;
  name: string;
}

export type GameStatus = 'IDLE' | 'SPINNING' | 'STUDENT_SELECTED' | 'ANSWERING' | 'CHECKED';
