export const pythonTasks = [
  // Thema: Variablen und Eingabe
  {
    id: 1,
    title: "Hallo Benutzer",
    difficulty: "Easy" as const,
    description: "Schreibe ein Programm, das den Benutzer nach seinem Namen fragt und Hallo <Name> ausgibt.",
    expectedOutput: "Wie heißt du? Anna\nHallo Anna",
    hints: [
      "Verwende die Funktion input()",
      "Speichere die Eingabe in einer Variablen",
      "Nutze print(), um Text und Variable auszugeben"
    ],
    topic: "Variablen und Eingabe" as const
  },
  {
    id: 2,
    title: "Name und Alter",
    difficulty: "Medium" as const,
    description: "Schreibe ein Programm, das den Benutzer nach Name und Alter fragt und dann eine Nachricht wie Anna ist 20 Jahre alt. ausgibt.",
    expectedOutput: "Wie heißt du? Anna\nWie alt bist du? 20\nAnna ist 20 Jahre alt.",
    hints: [
      "Verwende zwei Eingaben (name, alter)",
      "input() gibt immer einen String zurück",
      "Kombiniere die Variablen im print()"
    ],
    topic: "Variablen und Eingabe" as const
  },
  {
    id: 3,
    title: "100 Jahre alt",
    difficulty: "Hard" as const,
    description: "Schreibe ein Programm, das den Benutzer nach Name und Alter fragt und berechnet, in welchem Jahr die Person 100 Jahre alt wird.",
    expectedOutput: "Wie heißt du? Anna\nWie alt bist du? 20\nAnna wird im Jahr 2105 hundert Jahre alt.",
    hints: [
      "Wandle das Alter mit int() in eine Zahl um",
      "Hole das aktuelle Jahr mit dem Modul datetime",
      "Addiere (100 - alter) zum aktuellen Jahr"
    ],
    topic: "Variablen und Eingabe" as const
  },
  
  // Thema: Bedingungen (if-else)
  {
    id: 4,
    title: "Gerade oder ungerade",
    difficulty: "Easy" as const,
    description: "Schreibe ein Programm, das den Benutzer nach einer Zahl fragt und ausgibt, ob sie gerade oder ungerade ist.",
    expectedOutput: "Gib eine Zahl ein: 5\n5 ist ungerade.",
    hints: [
      "Verwende den Modulo-Operator %",
      "Gerade Zahlen haben Rest 0 bei Division durch 2",
      "Nutze if ... else"
    ],
    topic: "Bedingungen (if-else)" as const
  },
  {
    id: 5,
    title: "Notensystem",
    difficulty: "Medium" as const,
    description: "Schreibe ein Programm, das eine Punktzahl (0–100) abfragt und eine Note ausgibt:\n\n90–100 = Sehr gut\n70–89 = Gut\n50–69 = Ausreichend\nUnter 50 = Durchgefallen",
    expectedOutput: "Gib deine Punktzahl ein: 72\nNote: Gut",
    hints: [
      "Verwende if, elif, else",
      "Vergleiche Zahlenbereiche mit >= und <=",
      "Teste das Programm mit verschiedenen Werten"
    ],
    topic: "Bedingungen (if-else)" as const
  },
  {
    id: 6,
    title: "Einfaches Login",
    difficulty: "Hard" as const,
    description: "Schreibe ein Programm, das den Benutzer nach Benutzername und Passwort fragt. Nur wenn beide Werte korrekt sind, soll Zugang erlaubt erscheinen, sonst Zugang verweigert.",
    expectedOutput: "Benutzername: admin\nPasswort: 1234\nZugang erlaubt",
    hints: [
      "Speichere Benutzername und Passwort in Variablen",
      "Vergleiche Eingabe mit den gespeicherten Werten",
      "Nutze eine kombinierte Bedingung mit and"
    ],
    topic: "Bedingungen (if-else)" as const
  },

  // Thema: Schleifen
  {
    id: 7,
    title: "Zähle bis 10",
    difficulty: "Easy" as const,
    description: "Schreibe ein Programm, das die Zahlen von 1 bis 10 mit einer Schleife ausgibt.",
    expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
    hints: [
      "Verwende eine for-Schleife mit range()",
      "range(1, 11) gibt Zahlen von 1 bis 10 zurück"
    ],
    topic: "Schleifen" as const
  },
  {
    id: 8,
    title: "Summe berechnen",
    difficulty: "Medium" as const,
    description: "Schreibe ein Programm, das den Benutzer nach einer Zahl n fragt und die Summe von 1 bis n berechnet.",
    expectedOutput: "Gib eine Zahl ein: 5\nDie Summe ist 15",
    hints: [
      "Verwende eine Schleife mit range(1, n+1)",
      "Summiere die Zahlen in einer Variablen summe",
      "Alternativ kannst du die Formel n*(n+1)//2 nutzen"
    ],
    topic: "Schleifen" as const
  },
  {
    id: 9,
    title: "Zahlenraten",
    difficulty: "Hard" as const,
    description: "Schreibe ein Programm, bei dem der Computer eine Zahl zwischen 1 und 20 wählt. Der Benutzer hat 5 Versuche, sie zu erraten. Nach jedem Versuch wird ausgegeben, ob die Zahl zu hoch oder zu niedrig war.",
    expectedOutput: "Ich denke an eine Zahl zwischen 1 und 20.\nDein Tipp: 10\nZu niedrig.\nDein Tipp: 15\nZu hoch.\nDein Tipp: 12\nRichtig! Du hast es in 3 Versuchen geschafft.",
    hints: [
      "Verwende das Modul random (random.randint(1, 20))",
      "Nutze eine while-Schleife für die Versuche",
      "Zähle die Anzahl der Versuche mit einer Variablen"
    ],
    topic: "Schleifen" as const
  },
  {
    id: 10,
    title: "test",
    difficulty: "Hard" as const,
    description: "Schreibe ein Programm, bei dem der Computer eine Zahl zwischen 1 und 20 wählt. Der Benutzer hat 5 Versuche, sie zu erraten. Nach jedem Versuch wird ausgegeben, ob die Zahl zu hoch oder zu niedrig war.",
    expectedOutput: "Ich denke an eine Zahl zwischen 1 und 20.\nDein Tipp: 10\nZu niedrig.\nDein Tipp: 15\nZu hoch.\nDein Tipp: 12\nRichtig! Du hast es in 3 Versuchen geschafft.",
    hints: [
      "Verwende das Modul random (random.randint(1, 20))",
      "Nutze eine while-Schleife für die Versuche",
      "Zähle die Anzahl der Versuche mit einer Variablen"
    ],
    topic: "Schleifen" as const
  },
];
