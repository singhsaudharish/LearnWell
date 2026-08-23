export interface Lesson {
  title: string;
  explanation: string;
  code: string;
  language: string;
  output?: string;
  tip?: string;
}

export interface TopicData {
  title: string;
  description: string;
  emoji: string;
  prerequisites: string[];
  lessons: Lesson[];
  exercises: {
    question: string;
    hint: string;
  }[];
}