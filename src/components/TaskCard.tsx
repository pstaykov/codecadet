import { useState } from "react";
import { ChevronDown, ChevronRight, Code2, Target } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  id: number;
  title: string;
  difficulty: "Easy" | "Medium" | "Hard";
  description: string;
  expectedOutput: string;
  hints?: string[];
}

export function TaskCard({ id, title, difficulty, description, expectedOutput, hints }: TaskCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const difficultyColors = {
    Easy: "bg-success text-success-foreground",
    Medium: "bg-warning text-warning-foreground", 
    Hard: "bg-destructive text-destructive-foreground"
  };

  return (
    <Card className="w-full shadow-card hover:shadow-elevated transition-all duration-300 bg-card border-border overflow-hidden">
      <div 
        className="p-4 cursor-pointer select-none"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              {isExpanded ? (
                <ChevronDown className="h-4 w-4 text-muted-foreground transition-transform" />
              ) : (
                <ChevronRight className="h-4 w-4 text-muted-foreground transition-transform" />
              )}
              <Code2 className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-lg">
                Task {id}: {title}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className={cn(
                  "px-2 py-1 text-xs font-medium rounded-full",
                  difficultyColors[difficulty]
                )}>
                  {difficulty}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cn(
        "overflow-hidden transition-all duration-300 ease-smooth",
        isExpanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
      )}>
        <div className="px-4 pb-4 space-y-4 border-t border-border bg-gradient-subtle">
          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <Code2 className="h-4 w-4" />
              Description
            </h4>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {description}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <Target className="h-4 w-4" />
              Expected Output
            </h4>
            <div className="bg-code-bg text-code-foreground p-3 rounded-lg font-mono text-sm">
              <pre>{expectedOutput}</pre>
            </div>
          </div>

          {hints && hints.length > 0 && (
            <div>
              <h4 className="font-medium text-foreground mb-2">💡 Hints</h4>
              <ul className="space-y-1">
                {hints.map((hint, index) => (
                  <li key={index} className="text-muted-foreground text-sm flex items-start gap-2">
                    <span className="text-accent font-medium">•</span>
                    {hint}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
}