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
    },

    // Advanced Hard Tasks
    {
      id: 10,
      title: "Extended Calculator",
      difficulty: "Hard" as const,
      description: "Write a calculator program that repeatedly asks for two numbers and an operator (+, -, *, /), prints the result, and ends only when q is entered. Handle division by 0 and invalid operators.",
      expectedOutput: "Number 1: 10\nNumber 2: 5\nOperator: *\nResult: 50\n...\nOperator: q\nProgram ended.",
      hints: [
        "Use a while loop for the menu",
        "Convert inputs with float()",
        "Check for division by 0"
      ],
      topic: "Projects" as const
    },
    {
      id: 11,
      title: "Hangman",
      difficulty: "Hard" as const,
      description: "Implement a Hangman game: The computer chooses a word, the user guesses letters. Show the progress and count failed attempts.",
      expectedOutput: "Word: _ _ _ _\nLetter: a\nProgress: _ a _ a\n...\nYou win!",
      hints: [
        "Use random.choice() for words",
        "Use sets for correct/incorrect guesses",
        "Build the display with a loop"
      ],
      topic: "Projects" as const
    },
    {
      id: 12,
      title: "Password Checker",
      difficulty: "Hard" as const,
      description: "Write a password checker that validates: length ≥ 8, upper/lowercase letters, digits, special characters.",
      expectedOutput: "Password: Abc12!\nMissing: length ≥ 8, special character\nStrength: weak",
      hints: [
        "Use isupper(), islower(), isdigit()",
        "Define a set of special characters",
        "Count satisfied criteria"
      ],
      topic: "Strings & Conditions" as const
    },
    {
      id: 13,
      title: "Vocabulary Trainer",
      difficulty: "Hard" as const,
      description: "Build a vocabulary trainer with a dictionary: German → English. Ask random words, check answers, count score, quit with q.",
      expectedOutput: "Translate: Hund\nInput: dog\nCorrect! Score: 1\nTranslate: q\nGame over. Final score: 1",
      hints: [
        "Use random.choice() on dictionary keys",
        "Compare answers case-insensitive",
        "Keep track of score"
      ],
      topic: "Dictionaries" as const
    },
    {
      id: 14,
      title: "Gradebook",
      difficulty: "Hard" as const,
      description: "Create a gradebook: student → list of grades. Compute average per student, and class min/max/average.",
      expectedOutput: "Anna: avg 2.0\nBen: avg 3.0\nClass avg: 2.5",
      hints: [
        "Dictionary: name -> list",
        "split(',') and float() for inputs",
        "Use min(), max(), sum()/len()"
      ],
      topic: "Data Structures" as const
    },
    {
      id: 15,
      title: "To-Do Manager",
      difficulty: "Hard" as const,
      description: "Implement a simple To-Do manager: add <text>, list, done <index>, exit.",
      expectedOutput: "Command: add Buy milk\nAdded: Buy milk\nCommand: list\n[0] Buy milk",
      hints: [
        "Parse input with split(maxsplit=1)",
        "Store tasks in a list",
        "Check index validity"
      ],
      topic: "Loops & Strings" as const
    },
    {
      id: 16,
      title: "Word Frequency",
      difficulty: "Hard" as const,
      description: "Read a text, remove punctuation, count words, output top 5.",
      expectedOutput: "python – 3\nis – 2\n...",
      hints: [
        "Use translate() or replace() to remove punctuation",
        "Dictionary: word -> count",
        "Sort with sorted()"
      ],
      topic: "Strings & Dictionaries" as const
    },
    {
      id: 17,
      title: "ATM Simulation",
      difficulty: "Hard" as const,
      description: "Simulate an ATM with account number + PIN. Commands: balance, deposit, withdraw, logout.",
      expectedOutput: "Balance: 250.00\nWithdraw 300 → declined\nDeposit 50 → Balance: 300.00",
      hints: [
        "dict[account] = {pin, balance}",
        "Check PIN before commands",
        "Format with f-strings"
      ],
      topic: "Dictionaries & Projects" as const
    },
    {
      id: 18,
      title: "Tic-Tac-Toe",
      difficulty: "Hard" as const,
      description: "Two players (X/O) play Tic-Tac-Toe in the terminal. Show the board after each move, check for winner.",
      expectedOutput: "_ _ _\n_ X _\n_ _ _\nPlayer X wins!",
      hints: [
        "Board as list of lists",
        "Switch players after each move",
        "Check rows/cols/diagonals"
      ],
      topic: "Logic & Games" as const
    },
    {
      id: 19,
      title: "CSV Grade Parser",
      difficulty: "Hard" as const,
      description: "Read input like 'Anna,1;Ben,2;Cara,1;Ben,3'. Create dictionary: name → list[grades], compute averages.",
      expectedOutput: "Anna: [1] avg 1.00\nBen: [2, 3] avg 2.50\nCara: [1] avg 1.00",
      hints: [
        "Split with ';' and ','",
        "Use dict.setdefault() for lists",
        "Average with sum()/len()"
      ],
      topic: "Strings & Dictionaries" as const
    }
  ]
};

export const translations = {
  de: {
    nav: {
      tasks: 'Aufgaben',
      reference: 'Referenz',
      tasksCount: 'Aufgaben',
      topicsCount: 'Themen',
      swipe: 'Wischen →',
    },
    topic: {
      prefix: 'Thema:'
    },
    task: {
      description: 'Beschreibung',
      expectedOutput: 'Erwartete Ausgabe',
      hints: 'Hinweise'
    },
    help: {
      description: 'Beschreibung',
      syntax: 'Syntax',
      example: 'Beispiel',
      examples: 'Beispiele'
    }
  },
  en: {
    nav: {
      tasks: 'Tasks',
      reference: 'Reference',
      tasksCount: 'tasks',
      topicsCount: 'topics',
      swipe: 'Swipe →',
    },
    topic: {
      prefix: 'Topic:'
    },
    task: {
      description: 'Description',
      expectedOutput: 'Expected Output',
      hints: 'Hints'
    },
    help: {
      description: 'Description',
      syntax: 'Syntax',
      example: 'Example',
      examples: 'Examples'
    }
  }
};
