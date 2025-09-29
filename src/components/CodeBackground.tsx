import { useEffect, useRef } from 'react';

const codeLines = [
  'def calculate_sum(numbers):',
  '    total = sum(numbers)',
  '    return total',
  'for i in range(10):',
  '    print(f"Count: {i}")',
  'if user_input == "python":',
  '    print("Correct!")',
  'data = [1, 2, 3, 4, 5]',
  'result = list(map(lambda x: x**2, data))',
  'class Student:',
  '    def __init__(self, name):',
  '        self.name = name',
];

export const CodeBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create multiple rows of scrolling code - more rows, closer together
    const rows = 300;
    for (let i = 0; i < rows; i++) {
      const row = document.createElement('div');
      row.className = 'code-row';
      row.style.top = `${i * 12.5}%`;
      
      // Vary animation duration for different speeds (20s to 40s)
      const duration = 20 + (i % 5) * 5;
      row.style.animationDuration = `${duration}s`;
      row.style.animationDelay = `${i * -2}s`;
      
      // Duplicate code lines for seamless scrolling
      const content = [...codeLines, ...codeLines].join('    •    ');
      row.textContent = content;
      
      container.appendChild(row);
    }

    return () => {
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
      }}
    />
  );
};
