import { useState } from "react";
import {
    ChevronDown,
    ChevronRight,
} from "lucide-react";

import { CodingQuestion } from "@/types/coding";

interface Topic {
    name: string;
    questions: CodingQuestion[];
}

interface Props {
    topics: Topic[];
    selectedQuestion: CodingQuestion | null;
    onQuestionSelect: (question: CodingQuestion) => void;
}

export default function CodingSidebar({
    topics,
    selectedQuestion,
    onQuestionSelect,
}: Props) {

    const [openTopics, setOpenTopics] = useState<string[]>([
        "Arrays",
    ]);


    const toggleTopic = (topicName: string) => {

        setOpenTopics((previous) => {

            if (previous.includes(topicName)) {

                return previous.filter(
                    (topic) => topic !== topicName
                );

            }

            return [...previous, topicName];

        });

    };


    return (

        <aside
            className="
                w-72
                h-screen
                shrink-0
                border-r
                bg-background
                overflow-y-auto
                p-4
            "
        >

            {/* Header */}

            <div className="mb-6">

                <h2 className="text-xl font-bold">
                    Coding Topics
                </h2>

                <p className="text-sm text-muted-foreground mt-1">
                    Learn and practice
                </p>

            </div>


            {/* Topics */}

            <div className="space-y-2">

                {topics.map((topic) => {

                    const isOpen =
                        openTopics.includes(topic.name);


                    return (

                        <div key={topic.name}>

                            {/* Topic */}

                            <button
                                onClick={() =>
                                    toggleTopic(topic.name)
                                }
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    w-full
                                    px-3
                                    py-2.5
                                    rounded-md
                                    font-semibold
                                    text-left
                                    hover:bg-muted
                                    transition-colors
                                "
                            >

                                <span>
                                    {topic.name}
                                </span>


                                {isOpen ? (

                                    <ChevronDown
                                        size={18}
                                    />

                                ) : (

                                    <ChevronRight
                                        size={18}
                                    />

                                )}

                            </button>


                            {/* Subtopics */}

                            {isOpen && (

                                <div
                                    className="
                                        ml-4
                                        mt-1
                                        border-l
                                        pl-2
                                    "
                                >

                                    {topic.questions.map(
                                        (question) => (

                                            <button
                                                key={question.id}
                                                onClick={() =>
                                                    onQuestionSelect(
                                                        question
                                                    )
                                                }
                                                className={`
                                                    w-full
                                                    text-left
                                                    px-3
                                                    py-2
                                                    rounded-md
                                                    text-sm
                                                    transition-colors

                                                    hover:bg-muted

                                                    ${
                                                        selectedQuestion?.id ===
                                                        question.id
                                                            ? "bg-primary text-primary-foreground"
                                                            : ""
                                                    }
                                                `}
                                            >

                                                {question.title}

                                            </button>

                                        )
                                    )}

                                </div>

                            )}

                        </div>

                    );

                })}

            </div>

        </aside>

    );
}