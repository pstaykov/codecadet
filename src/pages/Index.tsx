import { TaskCard } from "@/components/TaskCard";
import { HelpCard } from "@/components/HelpCard";
import { Header } from "@/components/Header";
import { CodeBackground } from "@/components/CodeBackground";
import { pythonHelp } from "@/data/pythonHelp";
import { taskTranslations } from "@/data/translations";
import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Book, Zap, ChevronLeft, ChevronRight, ExternalLink, Sparkles, Search, Maximize2, Minimize2 } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const Index = () => {
  const { language, t } = useLanguage();
  const currentTasks = taskTranslations[language];
  const [isMobile, setIsMobile] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const topics = language === 'de' 
    ? ["Variablen und Eingabe", "Bedingungen (if-else)", "Schleifen", "Projekte", "Strings & Bedingungen", "Dictionaries", "Datenstrukturen", "Schleifen & Strings", "Strings & Dictionaries", "Dictionaries & Projekte", "Logik & Spiele"]
    : ["Variables and Input", "Conditions (if-else)", "Loops", "Projects", "Strings & Conditions", "Dictionaries", "Data Structures", "Loops & Strings", "Strings & Dictionaries", "Dictionaries & Projects", "Logic & Games"];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isFullscreen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFullscreen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredHelp = pythonHelp.filter((help) => {
    const query = searchQuery.toLowerCase();
    return (
      help.title.toLowerCase().includes(query) ||
      help.description.toLowerCase().includes(query) ||
      help.syntax.toLowerCase().includes(query) ||
      help.example.toLowerCase().includes(query)
    );
  });
    
  return (
    <div className="min-h-screen bg-gradient-subtle">
      {!isFullscreen && <Header isScrolled={isScrolled} />}
      {!isFullscreen && <div className={`transition-all duration-300 ${isScrolled ? 'h-[72px]' : 'h-[88px]'}`} />} {/* Spacer for fixed header */}

      {/* Hero Section */}
      {!isFullscreen && (
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Animated Code Background */}
          <CodeBackground />
          
          {/* Content */}
          <div className="container mx-auto px-4">
            <div className="relative z-10 text-center space-y-6 max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4 animate-fade-in">
                <Sparkles className="h-4 w-4 text-primary" />
                <span className="text-sm font-medium text-primary">Python Learning Platform</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight opacity-0 animate-slide-down-fade" style={{ animationDelay: '0.3s' }}>
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  {t('hero.title')}
                </span>
              </h1>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
                {t('hero.description')}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <Button 
                  size="lg"
                  className="gap-2 shadow-[var(--shadow-elevated)] hover:scale-105 transition-transform"
                  asChild
                >
                  <a 
                    href="https://forms.gle/9f4jVZ1m4RdzSkFd8" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    {t('hero.cta')}
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Fullscreen Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed bottom-4 right-4 z-50 shadow-lg"
        onClick={() => setIsFullscreen(!isFullscreen)}
      >
        {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
      </Button>

      {/* Mobile Layout - Swipeable Gallery */}
      {isMobile ? (
        <div className={`container mx-auto px-4 ${isFullscreen ? 'py-4' : 'py-6'}`}>
          <Carousel className="w-full max-w-full">
            <CarouselContent className="-ml-0">
              {/* Tasks Page */}
              <CarouselItem className="pl-0">
                <div className={`flex flex-col ${isFullscreen ? 'h-screen' : 'h-[calc(100vh-200px)]'}`}>
                  <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                    <Code2 className="h-5 w-5 text-primary" />
                    <h2 className="text-xl font-semibold text-foreground">{t('nav.tasks')}</h2>
                    <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                      {currentTasks.length} {t('nav.tasksCount')}
                    </span>
                    <div className="ml-auto flex items-center gap-1 text-xs text-muted-foreground">
                      <span>{t('nav.swipe')}</span>
                      <ChevronRight className="h-3 w-3" />
                    </div>
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-6 modern-scrollbar">
                     {topics.map((topic) => {
                       const tasksForTopic = currentTasks.filter((task) => task.topic === topic);
                       if (tasksForTopic.length === 0) return null;
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
              </CarouselItem>

              {/* References Page */}
              <CarouselItem className="pl-0">
                <div className={`flex flex-col ${isFullscreen ? 'h-screen' : 'h-[calc(100vh-200px)]'}`}>
                  <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <ChevronLeft className="h-3 w-3" />
                      <span>{t('nav.swipe')}</span>
                    </div>
                    <Book className="h-5 w-5 text-accent ml-auto" />
                    <h2 className="text-xl font-semibold text-foreground">{t('nav.reference')}</h2>
                    <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                      {filteredHelp.length} {t('nav.topicsCount')}
                    </span>
                  </div>

                  <div className="relative mb-3 flex-shrink-0">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder={language === 'de' ? 'Befehl suchen...' : 'Search command...'}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-9"
                    />
                  </div>
                  
                  <div className="flex-1 overflow-y-auto space-y-3 modern-scrollbar">
                    {filteredHelp.length > 0 ? (
                      filteredHelp.map((help, index) => (
                        <HelpCard key={index} {...help} />
                      ))
                    ) : (
                      <div className="text-center py-8 text-muted-foreground">
                        {language === 'de' ? 'Keine Befehle gefunden' : 'No commands found'}
                      </div>
                    )}
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            
            {/* Navigation dots */}
            <div className="flex justify-center mt-4 gap-2">
              <div className="w-2 h-2 rounded-full bg-primary opacity-60"></div>
              <div className="w-2 h-2 rounded-full bg-muted-foreground opacity-30"></div>
            </div>
          </Carousel>
        </div>
      ) : (
        /* Desktop Layout - Side by Side */
        <div className={`container mx-auto px-4 ${isFullscreen ? 'py-4' : 'py-6'}`}>
          <div className={`grid lg:grid-cols-2 gap-6 ${isFullscreen ? 'h-screen' : 'h-[calc(100vh-200px)]'}`}>
            {/* Tasks Section */}
            <div className="flex flex-col h-full min-h-0">
              <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                <Code2 className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">{t('nav.tasks')}</h2>
                <span className="px-2 py-1 bg-primary text-primary-foreground text-xs rounded-full">
                  {currentTasks.length} {t('nav.tasksCount')}
                </span>
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-6 pr-2 min-h-0 modern-scrollbar">
                 {topics.map((topic) => {
                   const tasksForTopic = currentTasks.filter((task) => task.topic === topic);
                   if (tasksForTopic.length === 0) return null;
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
            <div className="flex flex-col h-full min-h-0">
              <div className="flex items-center gap-2 mb-4 flex-shrink-0">
                <Book className="h-5 w-5 text-accent" />
                <h2 className="text-xl font-semibold text-foreground">{t('nav.reference')}</h2>
                <span className="px-2 py-1 bg-accent text-accent-foreground text-xs rounded-full">
                  {filteredHelp.length} {t('nav.topicsCount')}
                </span>
              </div>

              <div className="relative mb-3 flex-shrink-0">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder={language === 'de' ? 'Befehl suchen...' : 'Search command...'}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-9"
                />
              </div>
              
              <div className="flex-1 overflow-y-auto space-y-3 pr-2 min-h-0 modern-scrollbar">
                {filteredHelp.length > 0 ? (
                  filteredHelp.map((help, index) => (
                    <HelpCard key={index} {...help} />
                  ))
                ) : (
                  <div className="text-center py-8 text-muted-foreground">
                    {language === 'de' ? 'Keine Befehle gefunden' : 'No commands found'}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      {!isFullscreen && (
        <footer className="bg-card border-t border-border py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
            <Zap className="h-5 w-5 opacity-80" />
            <span>© 2025 CodeCadet</span>
          </div>
        </div>
      </footer>
      )}
    </div>
  );
};

export default Index;
