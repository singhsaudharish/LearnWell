export interface CodeSolution {
  language: "cpp" | "python" | "java" | "javascript";
  code: string;
}

export interface CodingQuestion {
  id: string;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  problem: string;
  input: string;
  output: string;
  explanation: string;

  codeSolution: {
    explanation: string;
    time: string;
    space: string;
    solutions: CodeSolution[];
  };

 
}

export interface CodingCategory {
  title: string;
  description: string;
  questions: CodingQuestion[];
}