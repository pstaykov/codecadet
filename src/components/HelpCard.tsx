import { BookOpen, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface HelpCardProps {
  title: string;
  description: string;
  syntax: string;
  example: string;
  category: "Basic" | "Control Flow" | "Data Types" | "Functions" | "Advanced";
}

export function HelpCard({ title, description, syntax, example, category }: HelpCardProps) {
  const { t } = useLanguage();
  
  const categoryColors = {
    "Basic": "bg-primary text-primary-foreground",
    "Control Flow": "bg-accent text-accent-foreground",
    "Data Types": "bg-success text-success-foreground",
    "Functions": "bg-warning text-warning-foreground",
    "Advanced": "bg-destructive text-destructive-foreground"
  };

  const getCategoryLabel = (cat: string) => {
    const categoryMap = {
      "Basic": t('category.basic'),
      "Control Flow": t('category.controlFlow'),
      "Data Types": t('category.dataTypes'),
      "Functions": t('category.functions'),
      "Advanced": t('category.advanced')
    };
    return categoryMap[cat as keyof typeof categoryMap] || cat;
  };

  return (
    <Card className="w-full shadow-card hover:shadow-elevated transition-all duration-300 bg-card border-border">
      <div className="p-4 space-y-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-primary flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-foreground text-lg">
                {title}
              </h3>
              <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full mt-1 ${categoryColors[category]}`}>
                {getCategoryLabel(category)}
              </span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">
              {description}
            </p>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2 flex items-center gap-2">
              <Code className="h-4 w-4" />
              {t('task.syntax')}
            </h4>
            <div className="bg-code-bg text-code-foreground p-3 rounded-lg font-mono text-sm">
              <pre>{syntax}</pre>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-foreground mb-2">{t('task.example')}</h4>
            <div className="bg-secondary p-3 rounded-lg">
              <pre className="font-mono text-sm text-foreground">{example}</pre>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
}