export const pythonTasks = [
  {
    id: 1,
    title: "Hello World",
    difficulty: "Easy" as const,
    description: "Write a program that prints 'Hello, World!' to the console. This is the traditional first program for learning any programming language.",
    expectedOutput: "Hello, World!",
    hints: [
      "Use the print() function",
      "Remember to put quotes around your text"
    ]
  },
  {
    id: 2,
    title: "Simple Calculator",
    difficulty: "Easy" as const,
    description: "Create a program that asks the user for two numbers and prints their sum. Use the input() function to get user input and convert strings to integers.",
    expectedOutput: "Enter first number: 5\nEnter second number: 3\nThe sum is: 8",
    hints: [
      "Use input() to get user input",
      "Convert strings to integers with int()",
      "Use the + operator to add numbers"
    ]
  },
  {
    id: 3,
    title: "Even or Odd",
    difficulty: "Easy" as const,
    description: "Write a program that asks for a number and tells whether it's even or odd. Use the modulo operator (%) to check if a number is divisible by 2.",
    expectedOutput: "Enter a number: 4\n4 is even",
    hints: [
      "Use the modulo operator (%) to find remainder",
      "If number % 2 == 0, it's even",
      "Use if-else statements for conditional logic"
    ]
  },
  {
    id: 4,
    title: "Count to Ten",
    difficulty: "Medium" as const,
    description: "Create a program that prints numbers from 1 to 10 using a for loop. Each number should be on a new line.",
    expectedOutput: "1\n2\n3\n4\n5\n6\n7\n8\n9\n10",
    hints: [
      "Use a for loop with range()",
      "range(1, 11) gives numbers from 1 to 10",
      "Print each number in the loop"
    ]
  },
  {
    id: 5,
    title: "List Operations",
    difficulty: "Medium" as const,
    description: "Create a list of your favorite fruits, add a new fruit to the list, and print the total number of fruits and the entire list.",
    expectedOutput: "Fruits: ['apple', 'banana', 'orange', 'grape']\nTotal fruits: 4",
    hints: [
      "Create a list using square brackets []",
      "Use append() to add items to a list",
      "Use len() to get the length of a list"
    ]
  },
  {
    id: 6,
    title: "Grade Calculator",
    difficulty: "Hard" as const,
    description: "Write a program that calculates the average of test scores and assigns a letter grade. Take 3 test scores as input and determine if the average is A (90+), B (80-89), C (70-79), D (60-69), or F (below 60).",
    expectedOutput: "Enter score 1: 85\nEnter score 2: 92\nEnter score 3: 78\nAverage: 85.0\nGrade: B",
    hints: [
      "Calculate average by adding scores and dividing by 3",
      "Use multiple if-elif-else statements",
      "Use >= and < operators for comparisons"
    ]
  }
];