import { CodingQuestion } from "@/types/coding";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

interface Props {
    question: CodingQuestion;
}

export default function QuestionCard({ question }: Props) {

    const getDifficultyColor = () => {
        switch (question.difficulty) {
            case "Easy":
                return "bg-green-500";

            case "Medium":
                return "bg-yellow-500";

            case "Hard":
                return "bg-red-500";
        }
    };
    const [selectedLanguage, setSelectedLanguage] = useState("cpp");

const selectedCode = question.codeSolution.solutions.find(
    solution => solution.language === selectedLanguage
);

    return (
        <div className="space-y-8">

            <div>

                <h1 className="text-4xl font-bold">
                    {question.title}
                </h1>

                <Badge className={`mt-3 ${getDifficultyColor()}`}>
                    {question.difficulty}
                </Badge>

            </div>

            <Card>

                <CardContent className="pt-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        Problem Statement
                    </h2>

                    <p>{question.problem}</p>

                </CardContent>

            </Card>

            <Card>

                <CardContent className="pt-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        Input
                    </h2>

                    <pre>{question.input}</pre>

                </CardContent>

            </Card>

            <Card>

                <CardContent className="pt-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        Output
                    </h2>

                    <pre>{question.output}</pre>

                </CardContent>

            </Card>

            <Card>

                <CardContent className="pt-6">

                    <h2 className="text-2xl font-semibold mb-4">
                        Explanation
                    </h2>

                    <p>{question.explanation}</p>

                </CardContent>

            </Card>

            {question.codeSolution && (
  <Card>
    <CardContent className="pt-6">
      <h2 className="text-2xl font-semibold mb-4">
        Code Solution
      </h2>

      <p className="mb-4">
        {question.codeSolution.explanation}
      </p>

      <p>
        <strong>Time Complexity:</strong> {question.codeSolution.time}
      </p>

      <p className="mb-6">
        <strong>Space Complexity:</strong> {question.codeSolution.space}
      </p>

    <div className="flex gap-2 mb-5 flex-wrap">
    {question.codeSolution.solutions.map((solution) => (
        <button
            key={solution.language}
            onClick={() => setSelectedLanguage(solution.language)}
            className={`px-4 py-2 rounded-md border transition

                selectedLanguage === solution.language
                    ? "bg-blue-600 text-white"
                    : "bg-background hover:bg-muted"
            }`}
        >
            {solution.language.toUpperCase()}
        </button>
    ))}
</div>

<pre className="bg-slate-900 text-white rounded-lg p-4 overflow-x-auto">
    <code>
        {selectedCode?.code}
    </code>
</pre>
    </CardContent>
  </Card>
)}

        </div>
    );
}