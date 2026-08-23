import { useState } from "react";
import { BookOpen, Code2, Lightbulb, Clipboard, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

export interface Section {
  title: string;
  content?: string;
  code?: string;
  language?: string;
  output?: string;
  tip?: string;
}

export interface Exercise {
  question: string;
  hint: string;
}

export interface TopicData {
  title: string;
  description: string;
  emoji?: string;
  prerequisites?: string[];
  sections: Section[];
  exercises?: Exercise[];
}

interface TopicPageLayoutProps {
  topic: TopicData;
}

function CodeBlock({
  code,
  language = "text",
}: {
  code: string;
  language?: string;
}) {
  const [copied, setCopied] = useState(false);

  async function copyCode() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      console.error("Unable to copy");
    }
  }

  return (
    <div className="overflow-hidden rounded-xl border bg-muted">
      <div className="flex items-center justify-between border-b bg-muted/60 px-4 py-2">
        <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {language}
        </span>

        <button
          onClick={copyCode}
          className="flex items-center gap-1 rounded-md px-2 py-1 text-xs hover:bg-background"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-600" />
              Copied
            </>
          ) : (
            <>
              <Clipboard className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>

      <pre className="overflow-x-auto p-5 text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ExerciseCard({
  index,
  exercise,
}: {
  index: number;
  exercise: Exercise;
}) {
  const [showHint, setShowHint] = useState(false);

  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex gap-4">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
          {index + 1}
        </div>

        <div className="flex-1">
          <h4 className="font-semibold">{exercise.question}</h4>

          <button
            onClick={() => setShowHint(!showHint)}
            className="mt-3 flex items-center gap-2 text-sm text-primary hover:underline"
          >
            <Lightbulb className="h-4 w-4" />
            {showHint ? "Hide Hint" : "Show Hint"}
          </button>

          {showHint && (
            <div className="mt-3 rounded-lg border-l-4 border-primary bg-primary/5 p-3">
              <p className="text-sm text-muted-foreground">
                {exercise.hint}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const TopicPageLayout = ({ topic }: TopicPageLayoutProps) => {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-12">

      {/* Header */}

      <div className="mb-14 text-center">

        {topic.emoji && (
          <div className="mb-4 text-6xl">
            {topic.emoji}
          </div>
        )}

        <h1 className="text-4xl font-bold md:text-5xl">
          {topic.title}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-lg text-muted-foreground">
          {topic.description}
        </p>

        {topic.prerequisites &&
          topic.prerequisites.length > 0 && (
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {topic.prerequisites.map((item) => (
                <Badge key={item} variant="secondary">
                  {item}
                </Badge>
              ))}
            </div>
          )}
      </div>

      {/* Lessons */}

      <section>

        <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">
          <BookOpen className="h-7 w-7 text-primary" />
          Lessons
        </h2>

        <Accordion
          type="multiple"
          defaultValue={["section-0"]}
          className="space-y-5"
        >
          {topic.sections.map((section, index) => (
            <AccordionItem
              key={index}
              value={`section-${index}`}
              className="rounded-xl border bg-card px-6"
            >
              <AccordionTrigger className="hover:no-underline">

                <div className="flex items-center gap-4">

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {index + 1}
                  </div>

                  <div className="text-left">

                    <h3 className="text-lg font-semibold">
                      {section.title}
                    </h3>

                  </div>

                </div>

              </AccordionTrigger>

              <AccordionContent className="space-y-6 pt-4">                {/* Explanation */}

                {section.content && (
                  <div className="leading-8 whitespace-pre-line text-muted-foreground">
                    {section.content}
                  </div>
                )}

                {/* Code */}

                {section.code && (
                  <CodeBlock
                    code={section.code}
                    language={section.language ?? "text"}
                  />
                )}

                {/* Output */}

                {section.output && (
                  <div className="rounded-xl border-l-4 border-green-500 bg-green-500/10 p-4">
                    <p className="mb-2 text-sm font-semibold text-green-700 dark:text-green-400">
                      Output
                    </p>

                    <pre className="overflow-x-auto whitespace-pre-wrap font-mono text-sm">
                      {section.output}
                    </pre>
                  </div>
                )}

                {/* Tip */}

                {section.tip && (
                  <div className="flex gap-3 rounded-xl border border-yellow-400/40 bg-yellow-500/10 p-4">

                    <Lightbulb className="mt-1 h-5 w-5 shrink-0 text-yellow-500" />

                    <div>

                      <h4 className="font-semibold">
                        Pro Tip
                      </h4>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {section.tip}
                      </p>

                    </div>

                  </div>
                )}

              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

      </section>

      {/* Exercises */}

      {topic.exercises &&
        topic.exercises.length > 0 && (

          <section className="mt-16">

            <h2 className="mb-6 flex items-center gap-3 text-3xl font-bold">

              <Code2 className="h-7 w-7 text-primary" />

              Practice Exercises

            </h2>

            <div className="space-y-5">

              {topic.exercises.map((exercise, index) => (
                <ExerciseCard
                  key={index}
                  index={index}
                  exercise={exercise}
                />
              ))}

            </div>

          </section>

        )}

    </div>
  );
};

export default TopicPageLayout;