import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Hero
    'hero.title': 'Welcome to Code Cadet',
    'hero.description': 'We are the Python interest group at Otto-Nagel-Gymnasium. Our goal: to learn the basics of programming together – not with blocks, but with real code. On this website you will find exercises, and a command reference to practice at your own pace. Everyone can join – no prior knowledge required!',
    'hero.cta': 'Sign up',
    
    // Header
    'header.title': 'Code Cadet',
    'header.subtitle': 'Interactive tasks and documentation for beginners',
    
    // Navigation
    'nav.tasks': 'Practice Tasks',
    'nav.reference': 'Python Reference',
    'nav.tasksCount': 'Tasks',
    'nav.topicsCount': 'Topics',
    'nav.swipe': 'Swipe →',
    
    // Topics
    'topic.variables': 'Variables and Input',
    'topic.conditions': 'Conditions (if-else)',
    'topic.loops': 'Loops',
    'topic.prefix': 'Topic:',
    
    // Task difficulties
    'difficulty.easy': 'Easy',
    'difficulty.medium': 'Medium', 
    'difficulty.hard': 'Hard',
    
    // Task labels
    'task.description': 'Description',
    'task.expectedOutput': 'Expected Output',
    'task.hints': '💡 Hints',
    'task.syntax': 'Syntax',
    'task.example': 'Example',
    
    // Categories
    'category.basic': 'Basic',
    'category.controlFlow': 'Control Flow',
    'category.dataTypes': 'Data Types',
    'category.functions': 'Functions',
    'category.advanced': 'Advanced',
    
    // Info Section
    'info.title': 'General Info',
    'info.location': '2.OG MEB',
    'info.time': 'Tuesday in the A-Week, 4th period',
    'info.requirements': 'Just bring your laptop & curiosity – no prior knowledge needed',
    'info.leads': 'Peter Staykov & Mika Bartholomäus'
  },
  de: {
    // Hero
    'hero.title': 'Willkommen bei Code Cadet',
    'hero.description': 'Wir sind die Python-Interessengemeinschaft am Otto-Nagel-Gymnasium. Unser Ziel: gemeinsam die Grundlagen der Programmierung lernen – nicht mit Blöcken, sondern mit echtem Code. Auf dieser Website findest du Aufgaben und eine Befehls-Referenz, mit denen du im eigenen Tempo üben kannst. Jeder kann mitmachen – Vorkenntnisse sind nicht nötig!',
    'hero.cta': 'Zur Anmeldung',
    
    // Header  
    'header.title': 'Code Cadet',
    'header.subtitle': 'Interaktive Aufgaben und Dokumentation für Anfänger',
    
    // Navigation
    'nav.tasks': 'Übungsaufgaben',
    'nav.reference': 'Python Referenz',
    'nav.tasksCount': 'Aufgaben',
    'nav.topicsCount': 'Themen',
    'nav.swipe': 'Wischen →',
    
    // Topics
    'topic.variables': 'Variablen und Eingabe',
    'topic.conditions': 'Bedingungen (if-else)',
    'topic.loops': 'Schleifen',
    'topic.prefix': 'Thema:',
    
    // Task difficulties
    'difficulty.easy': 'Einfach',
    'difficulty.medium': 'Mittel',
    'difficulty.hard': 'Schwer',
    
    // Task labels
    'task.description': 'Beschreibung',
    'task.expectedOutput': 'Erwartete Ausgabe',
    'task.hints': '💡 Hinweise',
    'task.syntax': 'Syntax',
    'task.example': 'Beispiel',
    
    // Categories
    'category.basic': 'Grundlagen',
    'category.controlFlow': 'Kontrollstrukturen',
    'category.dataTypes': 'Datentypen',
    'category.functions': 'Funktionen',
    'category.advanced': 'Erweitert',
    
    // Info Section
    'info.title': 'Allgemeine Infos',
    'info.location': 'Informatikraum am Otto-Nagel-Gymnasium',
    'info.time': 'Dienstag A-Woche 4. Block',
    'info.requirements': 'Nur Laptop & Interesse – keine Vorkenntnisse nötig',
    'info.leads': 'Peter Staykov & Mika Bartholomäus'
  }
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('de');
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
