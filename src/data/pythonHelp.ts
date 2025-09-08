export const pythonHelp = [
  {
    title: "print()",
    description: "Die Funktion print() zeigt Text oder Variablen in der Konsole an. Sie wird genutzt, um Ausgaben für den Benutzer sichtbar zu machen.",
    syntax: "print(value1, value2, ...)",
    example: 'print("Hallo, Welt!")\nprint("Die Antwort ist:", 42)',
    category: "Basic" as const
  },
  {
    title: "Variablen",
    description: "Variablen speichern Werte im Speicher und machen Programme flexibel und wiederverwendbar.",
    syntax: 'name = "Anna"\nalter = 20',
    example: 'name = "Anna"\nprint("Hallo,", name)',
    category: "Basic" as const
  },
  {
    title: "Datentypen",
    description: "Python unterstützt verschiedene Datentypen:\n\nint → ganze Zahlen\nfloat → Kommazahlen\nbool → Wahrheitswerte (True/False)\nstr → Zeichenketten (Texte)\nlist → Listen von Werten",
    syntax: "variable = wert",
    example: 'alter = 20            # int\npi = 3.14             # float\nist_sonnig = True     # bool\nname = "Anna"         # str\nfruechte = ["Apfel", "Banane"]  # list',
    category: "Basic" as const
  },
  {
    title: "f-Strings",
    description: "f-Strings verbinden Text und Variablen direkt.",
    syntax: 'f"Text {variable}"',
    example: 'name = "Anna"\nalter = 20\nprint(f"{name} ist {alter} Jahre alt.")',
    category: "Basic" as const
  },
  {
    title: "input()",
    description: "Mit input() wird Benutzereingabe abgefragt. Das Ergebnis ist immer ein String und kann in einer Variablen gespeichert werden.",
    syntax: 'variable = input("Frage: ")',
    example: 'name = input("Wie heißt du? ")\nprint("Hallo,", name)',
    category: "Basic" as const
  },
  {
    title: "Funktionen (def)",
    description: "Funktionen fassen Code in wiederverwendbare Blöcke zusammen.",
    syntax: "def funktionsname(parameter):\n    # Codeblock\n    return wert",
    example: "def quadrat(x):\n    return x * x\n\nprint(quadrat(4))  # 16",
    category: "Functions" as const
  },
  {
    title: "Bedingungen (if / elif / else)",
    description: "Bedingungen ermöglichen Entscheidungen im Programm.",
    syntax: "if bedingung:\n    # Code\nelif andere_bedingung:\n    # Code\nelse:\n    # Code",
    example: "zahl = 5\nif zahl > 0:\n    print('Positiv')\nelse:\n    print('Nicht positiv')",
    category: "Control Flow" as const
  },
  {
    title: "Schleifen (for / while)",
    description: "Schleifen wiederholen Code.",
    syntax: "for variable in range(anzahl):\n    # Code\n\nwhile bedingung:\n    # Code",
    example: "for i in range(5):\n    print(i)\n\nx = 0\nwhile x < 3:\n    print(x)\n    x += 1",
    category: "Control Flow" as const
  },
  {
    title: "Listen",
    description: "Listen sind geordnete Sammlungen von Werten, auf die man mit Indizes zugreifen kann.",
    syntax: "liste = [wert1, wert2, ...]",
    example: 'fruechte = ["Apfel", "Banane", "Kirsche"]\nprint(fruechte[0])  # Apfel',
    category: "Data Types" as const
  },
  {
    title: "Dictionary (Wörterbuch)",
    description: "Dictionaries speichern Schlüssel-Wert-Paare. Der Schlüssel muss eindeutig sein.",
    syntax: 'dict = {"schluessel": wert}',
    example: 'person = {"name": "Anna", "alter": 20}\nprint(person["name"])  # Anna',
    category: "Data Types" as const
  },
  {
    title: "Listen-Methoden",
    description: "Methoden sind Funktionen für Listen.",
    syntax: "liste.methode()",
    example: "zahlen = [1, 2, 3]\nzahlen.append(4)       # [1, 2, 3, 4]\nzahlen.pop()           # entfernt 4\nprint(len(zahlen))     # 3",
    category: "Advanced" as const
  },
  {
    title: "Dictionary-Methoden",
    description: "Methoden für Dictionaries erlauben Zugriff, Hinzufügen oder Löschen.",
    syntax: "dict.methode()",
    example: 'person = {"name": "Anna", "alter": 20}\nprint(person.keys())      # dict_keys([\'name\', \'alter\'])\nprint(person.values())    # dict_values([\'Anna\', 20])\nperson.pop("alter")       # entfernt "alter"',
    category: "Advanced" as const
  }
];