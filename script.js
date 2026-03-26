// All modules and lessons
const moduleData = [
  // Programming Implementation
  { module: "Programming Implementation", topic: "Programming Principles and Concepts", lesson: "Introduction" },
  { module: "Programming Implementation", topic: "Programming Principles and Concepts", lesson: "What are computer programs?" },
  { module: "Programming Implementation", topic: "Programming Principles and Concepts", lesson: "What are programming languages?" },
  { module: "Programming Implementation", topic: "Programming Principles and Concepts", lesson: "What are algorithms?" },
  { module: "Programming Implementation", topic: "Programming Principles and Concepts", lesson: "What is debugging" },
  { module: "Programming Implementation", topic: "Variables", lesson: "Introduction" },
  { module: "Programming Implementation", topic: "Variables", lesson: "Numbers" },
  { module: "Programming Implementation", topic: "Variables", lesson: "Strings" },
  { module: "Programming Implementation", topic: "Variables", lesson: "Debugging" },
  { module: "Programming Implementation", topic: "Selection (Logic)", lesson: "Booleans" },
  { module: "Programming Implementation", topic: "Selection (Logic)", lesson: "Comparison operators" },
  { module: "Programming Implementation", topic: "Selection (Logic)", lesson: "if/else Statements" },
  { module: "Programming Implementation", topic: "Selection (Logic)", lesson: "Debugging" },
  { module: "Programming Implementation", topic: "Data Structures", lesson: "Lists" },
  { module: "Programming Implementation", topic: "Data Structures", lesson: "Dictionaries" },
  { module: "Programming Implementation", topic: "Iteration (Loops)", lesson: "Introduction to loops" },
  { module: "Programming Implementation", topic: "Iteration (Loops)", lesson: "Debugging loops" },
  { module: "Programming Implementation", topic: "Functions", lesson: "Functions" },
  { module: "Programming Implementation", topic: "Coding best practices", lesson: "Coding best practices" },
  { module: "Programming Implementation", topic: "Requirements and testing", lesson: "Introduction to requirements and testing" },
  { module: "Programming Implementation", topic: "Requirements and testing", lesson: "Requirements" },
  { module: "Programming Implementation", topic: "Requirements and testing", lesson: "Testing" },
  { module: "Programming Implementation", topic: "Requirements and testing", lesson: "End of module feedback" },

  // Project Management
  { module: "Project Management", topic: "Introduction to IT Project Management", lesson: "Welcome" },
  { module: "Project Management", topic: "Introduction to IT Project Management", lesson: "Why do we need project management?" },
  { module: "Project Management", topic: "Introduction to IT Project Management", lesson: "What Is IT Project Management?" },
  { module: "Project Management", topic: "Introduction to IT Project Management", lesson: "The project life cycle" },
  { module: "Project Management", topic: "Starting an IT Project", lesson: "How IT projects are being started" },
  { module: "Project Management", topic: "Starting an IT Project", lesson: "Identifying pros and cons" },
  { module: "Project Management", topic: "Starting an IT Project", lesson: "Preparing for project authorization" },
  { module: "Project Management", topic: "Planning an IT project", lesson: "Defining project specifics" },
  { module: "Project Management", topic: "Planning an IT project", lesson: "Creating the project plan" },
  { module: "Project Management", topic: "Planning an IT project", lesson: "Completing the planning phase" },
  { module: "Project Management", topic: "Executing and closing an IT project", lesson: "Executing the project" },
  { module: "Project Management", topic: "Executing and closing an IT project", lesson: "Executing and closing an IT project" },
  { module: "Project Management", topic: "Project management methodologies", lesson: "Agile IT Project Management" },
  { module: "Project Management", topic: "Project management methodologies", lesson: "End of module feedback" },

  // Object Oriented Programming
  { module: "Object Oriented Programming", topic: "Introduction to object-oriented programming", lesson: "Welcome" },
  { module: "Object Oriented Programming", topic: "Introduction to object-oriented programming", lesson: "Why do I need to learn this?" },
  { module: "Object Oriented Programming", topic: "Introduction to object-oriented programming", lesson: "What happens in a restaurant - comparing paradigms" },
  { module: "Object Oriented Programming", topic: "Introduction to object-oriented programming", lesson: "Make it so - declarative programming" },
  { module: "Object Oriented Programming", topic: "Introduction to object-oriented programming", lesson: "The nuts and bolts - imperative programming" },
  { module: "Object Oriented Programming", topic: "Introduction to object-oriented programming", lesson: "What just happened?" },
  { module: "Object Oriented Programming", topic: "Introduction to object-oriented programming", lesson: "Conclusion" },
  { module: "Object Oriented Programming", topic: "Objects and classes", lesson: "" },
  { module: "Object Oriented Programming", topic: "OOP Concepts: Abstraction", lesson: "Deep dive" },
  { module: "Object Oriented Programming", topic: "OOP Concepts: Encapsulation", lesson: "Deep dive" },
  { module: "Object Oriented Programming", topic: "OOP Concepts: Inheritance", lesson: "Deep dive" },
  { module: "Object Oriented Programming", topic: "OOP Concepts: Polymorphism", lesson: "Deep dive" },
  { module: "Object Oriented Programming", topic: "Let's get coding", lesson: "Introduction" },
  { module: "Object Oriented Programming", topic: "Let's get coding", lesson: "OOP in Python" },
  { module: "Object Oriented Programming", topic: "Let's Get Coding Again", lesson: "OOP in Python" },
  { module: "Object Oriented Programming", topic: "Conclusion", lesson: "Conclusion" },

  // Software Testing
  { module: "Software Testing", topic: "Introduction to software testing", lesson: "Software testing overview" },
  { module: "Software Testing", topic: "Software testing life cycle", lesson: "Software testing life cycle" },
  { module: "Software Testing", topic: "Test strategies", lesson: "Testing visibility" },
  { module: "Software Testing", topic: "Test strategies", lesson: "Testing approach" },
  { module: "Software Testing", topic: "The testing process", lesson: "Project introduction" },
  { module: "Software Testing", topic: "The testing process", lesson: "The testing approach" },
  { module: "Software Testing", topic: "The testing process", lesson: "Building a simple test suite in Python" },
  { module: "Software Testing", topic: "Beyond basic tests", lesson: "Test driven development" },
  { module: "Software Testing", topic: "Conclusion", lesson: "Conclusion" },

  // Programming with JavaScript
  { module: "Programming with JavaScript", topic: "Welcome", lesson: "Introduction to JavaScript" },
  { module: "Programming with JavaScript", topic: "Working with pure JavaScript", lesson: "JavaScript data types & variables" },
  { module: "Programming with JavaScript", topic: "Working with pure JavaScript", lesson: "Control flow & operators" },
  { module: "Programming with JavaScript", topic: "Working with pure JavaScript", lesson: "JavaScript functions" },
  { module: "Programming with JavaScript", topic: "JavaScript and the web", lesson: "Introduction to HTML & CSS" },
  { module: "Programming with JavaScript", topic: "JavaScript and the web", lesson: "Manipulating a webpage with JavaScript" },
  { module: "Programming with JavaScript", topic: "Handling user interactions with JavaScript", lesson: "Event handlers" },
  { module: "Programming with JavaScript", topic: "Handling user interactions with JavaScript", lesson: "Forms and JavaScript" },

  // Maths for Computing
  { module: "Maths for Computing", topic: "Welcome", lesson: "Introduction to maths" },
  { module: "Maths for Computing", topic: "Prerequisites", lesson: "Boolean logic" },
  { module: "Maths for Computing", topic: "Prerequisites", lesson: "Sets" },
  { module: "Maths for Computing", topic: "Cardinality and Number Systems", lesson: "Combinatorics" },
  { module: "Maths for Computing", topic: "Cardinality and Number Systems", lesson: "Number Systems" },
  { module: "Maths for Computing", topic: "Discrete mathematics", lesson: "Sequences and series" },
  { module: "Maths for Computing", topic: "Discrete mathematics", lesson: "Recursion" },
  { module: "Maths for Computing", topic: "Discrete mathematics", lesson: "Discrete probability" },
  { module: "Maths for Computing", topic: "Interpreting Data", lesson: "Gathering Data" },
  { module: "Maths for Computing", topic: "Interpreting Data", lesson: "Descriptive Statistics" },
  { module: "Maths for Computing", topic: "Matrix methods", lesson: "Vectors" },
  { module: "Maths for Computing", topic: "Matrix methods", lesson: "Matrices" },
  { module: "Maths for Computing", topic: "Matrix methods", lesson: "End of module feedback" },

  // Robot Technology
  { module: "Robot Technology", topic: "Robot Principles", lesson: "Introduction" },
  { module: "Robot Technology", topic: "Robot Principles", lesson: "Robot uses" },
  { module: "Robot Technology", topic: "Robot Principles", lesson: "Robot design" },
  { module: "Robot Technology", topic: "Robot Principles", lesson: "Robot controls" },
  { module: "Robot Technology", topic: "Robot Principles", lesson: "End effectors" },
  { module: "Robot Technology", topic: "Robot Programming", lesson: "Programming a robot to carry out a function" },
  { module: "Robot Technology", topic: "Robot Ethics", lesson: "Robots and society" },
  { module: "Robot Technology", topic: "Safety and robots", lesson: "Introduction" },
  { module: "Robot Technology", topic: "Maintaining robots", lesson: "Inspection and cleaning" },
  { module: "Robot Technology", topic: "Maintaining robots", lesson: "Preventive Maintenance" },
  { module: "Robot Technology", topic: "Conclusion", lesson: "Conclusion to robot technology" }
];

// Populate module dropdown
const moduleSelect = document.getElementById('moduleSelect');
const modules = [...new Set(moduleData.map(item => item.module))];
modules.forEach(mod => {
  const option = document.createElement('option');
  option.value = mod;
  option.textContent = mod;
  moduleSelect.appendChild(option);
});

// Generate KPI list
document.getElementById('generateBtn').addEventListener('click', () => {
  const selectedModule = moduleSelect.value;
  const kpiList = document.getElementById('kpiList');
  kpiList.innerHTML = '';

  if (!selectedModule) return alert("Please select a module!");

  const lessons = moduleData.filter(item => item.module === selectedModule);
  const lessonCount = lessons.length;

  // Module header with module name and lesson count
  const moduleHeader = document.createElement('li');
  moduleHeader.textContent = `${selectedModule} - ${lessonCount} lesson${lessonCount === 1 ? '' : 's'}`;
  moduleHeader.style.fontWeight = 'bold';
  kpiList.appendChild(moduleHeader);

  lessons.forEach((lesson, index) => {
    const li = document.createElement('li');
    const topicText = lesson.topic ? lesson.topic : '(No specific topic)';
    const lessonText = lesson.lesson ? ` - ${lesson.lesson}` : '';
    li.textContent = `${index + 1}. ${topicText}${lessonText}`;
    kpiList.appendChild(li);
  });
});

// Download KPI list as text file
function loadJsPdf() {
  return new Promise((resolve, reject) => {
    const found = window.jspdf?.jsPDF || window.jsPDF;
    if (found) return resolve(found);

    const existing = document.querySelector('script[data-jspdf-loader]');
    if (existing) {
      existing.addEventListener('load', () => resolve(window.jspdf?.jsPDF || window.jsPDF));
      existing.addEventListener('error', () => reject(new Error('Failed to load jsPDF')));
      return;
    }

    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/jspdf@2.5.1/dist/jspdf.umd.min.js';
    script.setAttribute('data-jspdf-loader', 'true');
    script.onload = () => resolve(window.jspdf?.jsPDF || window.jsPDF);
    script.onerror = () => reject(new Error('Failed to load jsPDF'));
    document.head.appendChild(script);
  });
}

function downloadAsText(kpiItems) {
  const blob = new Blob([kpiItems.join('\n')], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'kpi_list.txt';
  a.click();
  URL.revokeObjectURL(url);
}

document.getElementById('downloadBtn').addEventListener('click', async () => {
  const selectedModule = moduleSelect.value;
  const kpiItems = Array.from(document.querySelectorAll('#kpiList li')).map(li => li.textContent);
  if (!kpiItems.length) return alert('Generate KPI list first!');

  let JsPDFCtor;
  try {
    JsPDFCtor = await loadJsPdf();
  } catch (err) {
    console.warn('jsPDF load failed, falling back to text download:', err);
    alert('Could not load jsPDF, downloading text file instead.');
    downloadAsText(kpiItems);
    return;
  }

  if (!JsPDFCtor) {
    alert('PDF library not available after load; using text fallback.');
    downloadAsText(kpiItems);
    return;
  }

  const doc = new JsPDFCtor({ unit: 'pt', format: 'a4' });
  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const textWidth = pageWidth - margin * 2;

  doc.setFontSize(16);
  doc.setFont('helvetica', 'bold');
  doc.text(`KPI List: ${selectedModule}`, margin, 50);

  doc.setFontSize(11);
  doc.setFont('helvetica', 'normal');

  let y = 70;
  kpiItems.forEach(item => {
    const lines = doc.splitTextToSize(item, textWidth);
    doc.text(lines, margin, y);
    y += 16 * lines.length;

    if (y > doc.internal.pageSize.getHeight() - 40) {
      doc.addPage();
      y = 40;
    }
  });

  doc.save('kpi_list.pdf');
});