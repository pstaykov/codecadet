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
  }
  {
    id: 10,
    title: "Erweiterter Taschenrechner (Menü & Schleifen)",
    difficulty: "Hard" as const,
    description:
      "Schreibe ein interaktives Programm, das wiederholt zwei Zahlen und einen Operator (+, -, *, /) abfragt, das Ergebnis ausgibt und erst bei Eingabe von q beendet. Behandle Division durch 0 und ungültige Operatoren robust.",
    expectedOutput:
      "Zahl 1: 10\nZahl 2: 5\nOperator (+, -, *, / oder q zum Beenden): *\nErgebnis: 50\n\nZahl 1: 8\nZahl 2: 0\nOperator (+, -, *, / oder q zum Beenden): /\nFehler: Division durch 0\n\nOperator (+, -, *, / oder q zum Beenden): q\nProgramm beendet.",
    hints: [
      "Benutze eine while-Schleife für das Hauptmenü",
      "Wandle Eingaben mit float() um",
      "Prüfe Sonderfall Division durch 0",
      "Behandle ungültige Operatoren mit else-Zweig"
    ],
    topic: "Projekte" as const
  },

  {
    id: 11,
    title: "Hangman (Wort raten)",
    difficulty: "Hard" as const,
    description:
      "Implementiere ein Hangman-Spiel: Der Computer wählt ein Wort zufällig aus einer Liste. Der Benutzer errät Buchstaben. Zeige den aktuellen Fortschritt (z. B. _ a _ a _) und zähle falsche Versuche. Nach Gewinn/Verlust soll das Spiel enden.",
    expectedOutput:
      "Gesuchtes Wort: _ _ _ _ _\nBuchstabe: a\nTreffer: _ a _ a _\nBuchstabe: e\nKein Treffer (Fehlversuche: 1/8)\n...\nGewonnen! Das Wort war: kata.",
    hints: [
      "Benutze random.choice() für das Wort",
      "Speichere richtige/falsche Buchstaben in Sets",
      "Erzeuge die Anzeige mit einer Schleife über das Wort",
      "Begrenze Fehlversuche (z. B. 8)"
    ],
    topic: "Projekte" as const
  },

  {
    id: 12,
    title: "Passwort-Check (Stärke-Prüfer)",
    difficulty: "Hard" as const,
    description:
      "Schreibe einen Passwort-Checker, der Stärke-Kriterien prüft (Länge ≥ 8, Groß- und Kleinbuchstaben, Ziffern, Sonderzeichen). Gib fehlende Kriterien aus und bewerte das Passwort (z. B. schwach/mittel/stark).",
    expectedOutput:
      "Passwort: Abc12!\nFehlende Kriterien: Länge ≥ 8, Sonderzeichen\nBewertung: schwach\n\nPasswort: Abcdef12!\nAlle Kriterien erfüllt\nBewertung: stark",
    hints: [
      "Nutze any() über String-Methoden wie .isupper(), .islower(), .isdigit()",
      "Definiere ein Set an Sonderzeichen",
      "Zähle erfüllte Kriterien und leite daraus die Bewertung ab",
      "Gib fehlende Kriterien gesammelt aus"
    ],
    topic: "Strings & Bedingungen" as const
  },

  {
    id: 13,
    title: "Vokabeltrainer (Dictionary, Zufall, Punktestand)",
    difficulty: "Hard" as const,
    description:
      "Erstelle einen Vokabeltrainer: Ein Dictionary mappt deutsche Wörter auf englische. Frage zufällige Vokabeln ab, prüfe die Eingabe, gib richtig/falsch aus und zähle den Score. Beenden mit Eingabe von q.",
    expectedOutput:
      "Übersetze: Hund\nEingabe: dog\nRichtig! Punkte: 1\nÜbersetze: Apfel\nEingabe: apple\nRichtig! Punkte: 2\nÜbersetze: Haus\nEingabe: home\nFalsch! Richtig wäre: house\nÜbersetze: q\nBeendet. Endstand: 2",
    hints: [
      "Nutze random.choice() über list(vokabeln.items()) oder über die Keys",
      "Vergleiche Eingabe case-insensitive (lower())",
      "Speichere und erhöhe den Punktestand bei richtigen Antworten",
      "q als Abbruchbedingung behandeln"
    ],
    topic: "Dictionaries & Zufall" as const
  },

  {
    id: 14,
    title: "Notenbuch (Listen von Noten, Durchschnitt, Statistik)",
    difficulty: "Hard" as const,
    description:
      "Baue ein Notenbuch: Für mehrere Schüler werden Listen von Noten gespeichert. Berechne pro Schüler den Durchschnitt sowie Klassenminimum/-maximum/-durchschnitt. Eingabe bis 'fertig'.",
    expectedOutput:
      "Schülername (oder 'fertig'): Anna\nNoten (mit Komma trennen): 1,2,2,3\nSchülername (oder 'fertig'): Ben\nNoten (mit Komma trennen): 2,3,4\nSchülername (oder 'fertig'): fertig\n\nAnna: Schnitt 2.0\nBen: Schnitt 3.0\nKlassen-Min: 1.0, Klassen-Max: 4.0, Klassen-Schnitt: 2.5",
    hints: [
      "Speichere in einem Dictionary: name -> Liste[float]",
      "Zerlege Noteneingaben mit .split(',') und wandle mit float() um",
      "Berechne Statistik mit min(), max(), sum()/len()",
      "Validiere leere Eingaben"
    ],
    topic: "Datenstrukturen & Statistik" as const
  },

  {
    id: 15,
    title: "To-Do-Manager (add/list/done/exit)",
    difficulty: "Hard" as const,
    description:
      "Implementiere einen textbasierten To-Do-Manager. Befehle: add <Text>, list, done <Index>, exit. Aufgaben werden in einer Liste gespeichert und mit Indizes angezeigt.",
    expectedOutput:
      "Befehl: add Milch kaufen\nHinzugefügt: Milch kaufen\nBefehl: add Mathe lernen\nHinzugefügt: Mathe lernen\nBefehl: list\n[0] Milch kaufen\n[1] Mathe lernen\nBefehl: done 0\nErledigt: Milch kaufen\nBefehl: list\n[0] Mathe lernen\nBefehl: exit\nTschüss!",
    hints: [
      "Parsen des Befehls mit .split(maxsplit=1)",
      "Aufgaben als Liste von Strings speichern",
      "Index prüfen (0 <= idx < len(tasks))",
      "while-Schleife bis 'exit'"
    ],
    topic: "Schleifen & Strings" as const
  },

  {
    id: 16,
    title: "Wortfrequenzen (Top 5, Bereinigung)",
    difficulty: "Hard" as const,
    description:
      "Lies einen längeren Text ein, normalisiere ihn (lower, Satzzeichen entfernen) und zähle die Häufigkeit der Wörter. Gib die Top 5 als Liste von (Wort, Anzahl) aus.",
    expectedOutput:
      "Text: Python ist toll, denn Python ist einfach zu lernen! Python macht Spaß.\nTop 5:\n1) python – 3\n2) ist – 2\n3) toll – 1\n4) denn – 1\n5) einfach – 1",
    hints: [
      "Ersetze Satzzeichen mit str.translate() oder durch Iteration",
      "Nutze ein Dictionary: wort -> count",
      "Sortiere mit sorted(dict.items(), key=..., reverse=True)",
      "Gib nur die Top 5 aus"
    ],
    topic: "Strings & Dictionaries" as const
  },

  {
    id: 17,
    title: "Bankautomat-Simulation (Konten, PIN, Transaktionen)",
    difficulty: "Hard" as const,
    description:
      "Simuliere einen Bankautomaten: Nutzer melden sich mit Kontonummer und PIN an. Befehle: saldo, einzahlen <Betrag>, abheben <Betrag>, logout. Prüfe, dass der Saldo nicht negativ wird.",
    expectedOutput:
      "Kontonummer: 1001\nPIN: 1234\nAngemeldet als 1001\nBefehl: saldo\nSaldo: 250.00\nBefehl: abheben 300\nAbgelehnt: unzureichender Saldo\nBefehl: einzahlen 50\nNeuer Saldo: 300.00\nBefehl: logout\nAbgemeldet.",
    hints: [
      "Datenstruktur: dict[kontonummer] = {pin: str, saldo: float}",
      "Prüfe PIN vor Befehlen",
      "Parsen von Befehlen mit .split()",
      "Formatiere Geld mit f-Strings (z. B. {saldo:.2f})"
    ],
    topic: "Dictionaries & Projekte" as const
  },

  {
    id: 18,
    title: "Tic-Tac-Toe (2 Spieler im Terminal)",
    difficulty: "Hard" as const,
    description:
      "Programmiere Tic-Tac-Toe für zwei Spieler (X/O) im Terminal. Zeige nach jedem Zug das 3x3-Brett, prüfe Gewinn (Reihen/Spalten/Diagonalen) oder Unentschieden.",
    expectedOutput:
      "Aktueller Spieler: X\nZug (Zeile Spalte): 1 1\nX setzt auf (1,1)\n_ _ _\n_ X _\n_ _ _\n...\nSpieler X gewinnt!",
    hints: [
      "Repräsentiere das Brett als Liste von Listen",
      "Wechsle Spieler nach jedem Zug",
      "Gewinnprüfung: 3 Reihen, 3 Spalten, 2 Diagonalen",
      "Validiere Eingaben (freie Felder, gültige Koordinaten)"
    ],
    topic: "Logik & Spiele" as const
  },

  {
    id: 19,
    title: "CSV-Noten-Parser & Statistik",
    difficulty: "Hard" as const,
    description:
      "Lies eine CSV-ähnliche Eingabe wie \"Anna,1;Ben,2;Cara,1;Ben,3\" ein. Erzeuge ein Dictionary name -> Liste[Noten], berechne pro Name den Durchschnitt und zeige die besten/schwächsten Durchschnitte.",
    expectedOutput:
      "Eingabe: Anna,1;Ben,2;Cara,1;Ben,3\nAnna: [1] Schnitt 1.00\nBen: [2, 3] Schnitt 2.50\nCara: [1] Schnitt 1.00\nBeste(r): Anna/Cara (1.00)\nSchwächste(r): Ben (2.50)",
    hints: [
      "Zerlege zuerst nach ';', dann jedes Segment nach ','",
      "Nutze dict.setdefault(name, []) für Listenaufbau",
      "Formatiere Durchschnitt mit {wert:.2f}",
      "Bestimme Min/Max über die Durchschnitte"
    ],
    topic: "Strings & Dictionaries" as const
  }
];
