export const pythonHelp = [
  {
    title: "print()",
    description: "The print() function displays text or variables to the console. It's used to show output to the user.",
    syntax: "print(value1, value2, ...)",
    example: "print('Hello, World!')\nprint('The answer is:', 42)",
    category: "Basic" as const
  },
  {
    title: "input()",
    description: "The input() function gets text input from the user. It always returns a string, so convert to other types if needed.",
    syntax: "variable = input('prompt message')",
    example: "name = input('Enter your name: ')\nage = int(input('Enter your age: '))",
    category: "Basic" as const
  },
  {
    title: "Variables",
    description: "Variables store data values. Python automatically determines the type based on the value assigned.",
    syntax: "variable_name = value",
    example: "name = 'Alice'\nage = 25\nheight = 5.6\nis_student = True",
    category: "Basic" as const
  },
  {
    title: "if-elif-else",
    description: "Conditional statements that execute different code blocks based on conditions. Use elif for multiple conditions.",
    syntax: "if condition:\n    # code\nelif condition:\n    # code\nelse:\n    # code",
    example: "score = 85\nif score >= 90:\n    print('A')\nelif score >= 80:\n    print('B')\nelse:\n    print('C')",
    category: "Control Flow" as const
  },
  {
    title: "for loop",
    description: "Repeats code for each item in a sequence. Commonly used with range() to repeat a specific number of times.",
    syntax: "for variable in sequence:\n    # code",
    example: "for i in range(5):\n    print(i)\n\nfruits = ['apple', 'banana']\nfor fruit in fruits:\n    print(fruit)",
    category: "Control Flow" as const
  },
  {
    title: "while loop",
    description: "Repeats code while a condition is true. Be careful to avoid infinite loops by ensuring the condition eventually becomes false.",
    syntax: "while condition:\n    # code",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1",
    category: "Control Flow" as const
  },
  {
    title: "Lists",
    description: "Lists store multiple items in a single variable. Items are ordered, changeable, and allow duplicates.",
    syntax: "list_name = [item1, item2, item3]",
    example: "fruits = ['apple', 'banana', 'orange']\nfruits.append('grape')\nprint(len(fruits))",
    category: "Data Types" as const
  },
  {
    title: "Dictionaries", 
    description: "Dictionaries store data in key-value pairs. They are unordered, changeable, and don't allow duplicate keys.",
    syntax: "dict_name = {'key1': 'value1', 'key2': 'value2'}",
    example: "person = {'name': 'Alice', 'age': 25}\nprint(person['name'])\nperson['city'] = 'New York'",
    category: "Data Types" as const
  },
  {
    title: "Functions",
    description: "Functions are reusable blocks of code that perform specific tasks. They can take parameters and return values.",
    syntax: "def function_name(parameters):\n    # code\n    return value",
    example: "def greet(name):\n    return f'Hello, {name}!'\n\nmessage = greet('Alice')\nprint(message)",
    category: "Functions" as const
  },
  {
    title: "String Methods",
    description: "Strings have many built-in methods for manipulation like upper(), lower(), split(), and replace().",
    syntax: "string.method(parameters)",
    example: "text = 'Hello World'\nprint(text.upper())\nprint(text.split())\nprint(text.replace('World', 'Python'))",
    category: "Advanced" as const
  }
];