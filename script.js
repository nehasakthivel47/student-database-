document.getElementById('student-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const roll = document.getElementById('roll').value.trim();
  const studentClass = document.getElementById('class').value.trim();

  if (name && roll && studentClass) {
    addStudent(name, roll, studentClass);
    this.reset();
  }
});

function addStudent(name, roll, studentClass) {
  const studentList = document.getElementById('student-list');

  const li = document.createElement('li');
  li.innerHTML = `${name} | Roll: ${roll} | Class: ${studentClass} 
    <button onclick="this.parentElement.remove()">Delete</button>`;
  
  studentList.appendChild(li);
}
