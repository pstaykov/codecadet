import { TaskCard } from "@/components/TaskCard";
import { HelpCard } from "@/components/HelpCard";
import { Header } from "@/components/Header";
import { pythonHelp } from "@/data/pythonHelp";
import { taskTranslations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Book } from "lucide-react";

const Index = () => {
  const { language, t } = useLanguage();
  const currentTasks = taskTranslations[language];
  
  const topics = language === 'de' 
    ? ["Variablen und Eingabe", "Bedingungen (if-else)", "Schleifen"]
    : ["Variables and Input", "Conditions (if-else)", "Loops"];
    
  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
          {/* Tasks Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4 flex-shrink-0">
              <Code2 className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">{t('nav.tasks')}</h2>
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                {currentTasks.length} {t('nav.tasksCount')}
              </span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-6 pr-2 scrollbar-thin">
              {topics.map((topic) => {
                const tasksForTopic = currentTasks.filter((task) => task.topic === topic);
                return (
                  <div key={topic} className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      {t('topic.prefix')} {topic}
                    </h3>
                    {tasksForTopic.map((task) => (
                      <TaskCard key={task.id} {...task} />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Help Section */}
          <div className="flex flex-col h-full">
            <div className="flex items-center gap-2 mb-4 flex-shrink-0">
              <Book className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-semibold text-foreground">{t('nav.reference')}</h2>
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                {pythonHelp.length} {t('nav.topicsCount')}
              </span>
            </div>
            
            <div className="flex-1 overflow-y-auto space-y-3 pr-2 scrollbar-thin">
              {pythonHelp.map((help, index) => (
                <HelpCard key={index} {...help} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
