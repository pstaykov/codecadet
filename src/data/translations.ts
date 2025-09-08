export const taskTranslations = {
  en: [
    // Variables and Input
    {
      id: 1,
      title: "Hello User",
      difficulty: "Easy" as const,
      description: "Write a program that asks the user for their name and outputs Hello <Name>.",
      expectedOutput: "What's your name? Anna\nHello Anna",
      hints: [
        "Use the input() function",
        "Store the input in a variable",
        "Use print() to output text and variable"
      ],
      topic: "Variables and Input" as const
    },
    {
      id: 2,
      title: "Name and Age",
      difficulty: "Medium" as const,
      description: "Write a program that asks the user for name and age and then outputs a message like Anna is 20 years old.",
      expectedOutput: "What's your name? Anna\nHow old are you? 20\nAnna is 20 years old.",
      hints: [
        "Use two inputs (name, age)",
        "input() always returns a string",
        "Combine the variables in print()"
      ],
      topic: "Variables and Input" as const
    },
    {
      id: 3,
      title: "100 Years Old",
      difficulty: "Hard" as const,
      description: "Write a program that asks the user for name and age and calculates in which year the person will be 100 years old.",
      expectedOutput: "What's your name? Anna\nHow old are you? 20\nAnna will be 100 years old in 2105.",
      hints: [
        "Convert age to number with int()",
        "Get current year with datetime module",
        "Add (100 - age) to current year"
      ],
      topic: "Variables and Input" as const
    },
    
    // Conditions (if-else)
    {
      id: 4,
      title: "Even or Odd",
      difficulty: "Easy" as const,
      description: "Write a program that asks the user for a number and outputs whether it's even or odd.",
      expectedOutput: "Enter a number: 5\n5 is odd.",
      hints: [
        "Use the modulo operator %",
        "Even numbers have remainder 0 when divided by 2",
        "Use if ... else"
      ],
      topic: "Conditions (if-else)" as const
    },
    {
      id: 5,
      title: "Grade System",
      difficulty: "Medium" as const,
      description: "Write a program that asks for a score (0–100) and outputs a grade:\n\n90–100 = Excellent\n70–89 = Good\n50–69 = Sufficient\nBelow 50 = Failed",
      expectedOutput: "Enter your score: 72\nGrade: Good",
      hints: [
        "Use if, elif, else",
        "Compare number ranges with >= and <=",
        "Test the program with different values"
      ],
      topic: "Conditions (if-else)" as const
    },
    {
      id: 6,
      title: "Simple Login",
      difficulty: "Hard" as const,
      description: "Write a program that asks the user for username and password. Only if both values are correct, it should show Access granted, otherwise Access denied.",
      expectedOutput: "Username: admin\nPassword: 1234\nAccess granted",
      hints: [
        "Store username and password in variables",
        "Compare input with stored values",
        "Use a combined condition with and"
      ],
      topic: "Conditions (if-else)" as const
    },

    // Loops
    {
      id: 7,
      title: "Count to 10",
      difficulty: "Easy" as const,
      description: "Write a program that outputs numbers from 1 to 10 using a loop.",
      expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
      hints: [
        "Use a for loop with range()",
        "range(1, 11) returns numbers from 1 to 10"
      ],
      topic: "Loops" as const
    },
    {
      id: 8,
      title: "Calculate Sum",
      difficulty: "Medium" as const,
      description: "Write a program that asks the user for a number n and calculates the sum from 1 to n.",
      expectedOutput: "Enter a number: 5\nThe sum is 15",
      hints: [
        "Use a loop with range(1, n+1)",
        "Sum the numbers in a variable sum",
        "Alternatively you can use the formula n*(n+1)//2"
      ],
      topic: "Loops" as const
    },
    {
      id: 9,
      title: "Number Guessing",
      difficulty: "Hard" as const,
      description: "Write a program where the computer chooses a number between 1 and 20. The user has 5 attempts to guess it. After each attempt, output whether the number was too high or too low.",
      expectedOutput: "I'm thinking of a number between 1 and 20.\nYour guess: 10\nToo low.\nYour guess: 15\nToo high.\nYour guess: 12\nCorrect! You got it in 3 attempts.",
      hints: [
        "Use the random module (random.randint(1, 20))",
        "Use a while loop for the attempts",
        "Count the number of attempts with a variable"
      ],
      topic: "Loops" as const
    }
  ],
  de: [
    // Variablen und Eingabe  
    {
      id: 1,
      title: "Hallo Benutzer",
      difficulty: "Einfach" as const,
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
      difficulty: "Mittel" as const,
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
      difficulty: "Schwer" as const,
      description: "Schreibe ein Programm, das den Benutzer nach Name und Alter fragt und berechnet, in welchem Jahr die Person 100 Jahre alt wird.",
      expectedOutput: "Wie heißt du? Anna\nWie alt bist du? 20\nAnna wird im Jahr 2105 hundert Jahre alt.",
      hints: [
        "Wandle das Alter mit int() in eine Zahl um",
        "Hole das aktuelle Jahr mit dem Modul datetime",
        "Addiere (100 - alter) zum aktuellen Jahr"
      ],
      topic: "Variablen und Eingabe" as const
    },
    
    // Bedingungen (if-else)
    {
      id: 4,
      title: "Gerade oder ungerade",
      difficulty: "Einfach" as const,
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
      difficulty: "Mittel" as const,
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
      difficulty: "Schwer" as const,
      description: "Schreibe ein Programm, das den Benutzer nach Benutzername und Passwort fragt. Nur wenn beide Werte korrekt sind, soll Zugang erlaubt erscheinen, sonst Zugang verweigert.",
      expectedOutput: "Benutzername: admin\nPasswort: 1234\nZugang erlaubt",
      hints: [
        "Speichere Benutzername und Passwort in Variablen",
        "Vergleiche Eingabe mit den gespeicherten Werten",
        "Nutze eine kombinierte Bedingung mit and"
      ],
      topic: "Bedingungen (if-else)" as const
    },

    // Schleifen
    {
      id: 7,
      title: "Zähle bis 10",
      difficulty: "Einfach" as const,
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
      difficulty: "Mittel" as const,
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
      difficulty: "Schwer" as const,
      description: "Schreibe ein Programm, bei dem der Computer eine Zahl zwischen 1 und 20 wählt. Der Benutzer hat 5 Versuche, sie zu erraten. Nach jedem Versuch wird ausgegeben, ob die Zahl zu hoch oder zu niedrig war.",
      expectedOutput: "Ich denke an eine Zahl zwischen 1 und 20.\nDein Tipp: 10\nZu niedrig.\nDein Tipp: 15\nZu hoch.\nDein Tipp: 12\nRichtig! Du hast es in 3 Versuchen geschafft.",
      hints: [
        "Verwende das Modul random (random.randint(1, 20))",
        "Nutze eine while-Schleife für die Versuche",
        "Zähle die Anzahl der Versuche mit einer Variablen"
      ],
      topic: "Schleifen" as const
    }
  ]
};