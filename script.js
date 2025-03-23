// Fetch the JSON data for the Projects section
fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const taskList = document.getElementById('task-list');
        const taskTitle = document.getElementById('task-title');
        const taskDescription = document.getElementById('task-description');
        const taskIframe = document.getElementById('task-iframe');

        // Populate the task list
        data.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.title;
            li.addEventListener('click', () => {
                // Remove active class from all items
                document.querySelectorAll('.task-list li').forEach(item => {
                    item.classList.remove('active');
                });
                // Add active class to the clicked item
                li.classList.add('active');
                // Update the task details
                taskTitle.textContent = task.title;
                taskDescription.textContent = task.description;
                // Load the task's index.html into the iframe
                taskIframe.src = task.path;
                // Show the iframe and hide the description
                taskIframe.style.display = 'block';
                taskDescription.style.display = 'none';
            });
            taskList.appendChild(li);
        });

        // Reset the iframe and show the description when no task is selected
        taskList.addEventListener('click', () => {
            if (!document.querySelector('.task-list li.active')) {
                taskIframe.style.display = 'none';
                taskDescription.style.display = 'block';
            }
        });
    })
    .catch(error => console.error('Error loading the projects:', error));

// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});