import { TaskCard } from "@/components/TaskCard";
import { HelpCard } from "@/components/HelpCard";
import { pythonTasks } from "@/data/pythonTasks";
import { pythonHelp } from "@/data/pythonHelp";
import { Code2, Book, Terminal } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-primary rounded-lg">
              <Terminal className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Python Learning Hub</h1>
              <p className="text-muted-foreground">Interactive tasks and documentation for beginners</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-2 gap-6 h-[calc(100vh-140px)]">
          {/* Tasks Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Code2 className="h-5 w-5 text-primary" />
              <h2 className="text-xl font-semibold text-foreground">Practice Tasks</h2>
              <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                {pythonTasks.length} Tasks
              </span>
            </div>
            
            <div className="overflow-y-auto h-full space-y-6 pr-2 scrollbar-thin">
              {/* Gruppe die Tasks nach Themen */}
              {["Variablen und Eingabe", "Bedingungen (if-else)", "Schleifen"].map((topic) => {
                const tasksForTopic = pythonTasks.filter((task) => (task as any).topic === topic);
                return (
                  <div key={topic} className="space-y-3">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">
                      Thema: {topic}
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
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Book className="h-5 w-5 text-accent" />
              <h2 className="text-xl font-semibold text-foreground">Python Reference</h2>
              <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                {pythonHelp.length} Topics
              </span>
            </div>
            
            <div className="overflow-y-auto h-full space-y-3 pr-2 scrollbar-thin">
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
