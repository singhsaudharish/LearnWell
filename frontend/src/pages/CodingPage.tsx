import { useState } from "react";

import CodingSidebar from "@/components/CodingSidebar";
import QuestionCard from "@/components/QuestionCard";

import { arrays } from "@/data/coding/arrays";
import { strings } from "@/data/coding/strings";
import { trees } from "@/data/coding/tree";
import { linkedList } from "@/data/coding/linkedList";
import { stack } from "@/data/coding/stack";
import { queue } from "@/data/coding/queue";
import { graph } from "@/data/coding/graph";
import { dynamicProgramming } from "@/data/coding/dp";

import { CodingQuestion } from "@/types/coding";


const codingTopics = [
    {
        name: "Arrays",
        questions: arrays.questions,
    },

    {
        name: "Strings",
        questions: strings.questions,
    },

   {
        name: "Linked List",
        questions: linkedList.questions,
    },

    {
        name: "Stack",
        questions: stack.questions,
    },

    {
        name: "Queue",
        questions: queue.questions,
    },

    {
        name: "Trees",
        questions: trees.questions,
    },

    {
        name: "Graphs",
        questions: graph.questions,
    },

    {
        name: "Dynamic Programming",
        questions: dynamicProgramming.questions,
    },
];


export default function CodingPage() {

    const [selectedQuestion, setSelectedQuestion] =
        useState<CodingQuestion | null>(
            arrays.questions[0]
        );


    return (

        <div className="flex h-screen overflow-hidden">

            {/* Sidebar */}

            <CodingSidebar
                topics={codingTopics}
                selectedQuestion={selectedQuestion}
                onQuestionSelect={setSelectedQuestion}
            />


            {/* Main Content */}

            <main
                className="
                    flex-1
                    h-screen
                    overflow-y-auto
                "
            >

                <div className="max-w-5xl mx-auto p-8">

                    {selectedQuestion ? (

                        <QuestionCard
                            question={selectedQuestion}
                        />

                    ) : (

                        <div className="text-center py-20">

                            <h1 className="text-2xl font-bold">
                                Select a Question
                            </h1>

                            <p className="text-muted-foreground mt-2">
                                Choose a topic and question from
                                the sidebar.
                            </p>

                        </div>

                    )}

                </div>

            </main>

        </div>

    );
}