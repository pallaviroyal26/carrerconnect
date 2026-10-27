
const savedJobsList = document.getElementById("saved-jobs-list");

function displaySavedJobs() {
    const savedJobs = JSON.parse(
        localStorage.getItem("savedJobs")
    ) || [];

    savedJobsList.innerHTML = "";

    if (savedJobs.length === 0) {
        savedJobsList.innerHTML =
            "<p class='no-jobs'>You haven't saved any jobs yet.</p>";
        return;
    }

    savedJobs.forEach(function(job) {
        const card = document.createElement("div");
        card.className = "job-card";

        const title = document.createElement("h2");
        title.textContent = job.title;

        const company = document.createElement("p");
        company.textContent = job.company;

        const location = document.createElement("p");
        location.textContent = "📍 " + job.location;

        const type = document.createElement("p");
        type.textContent = "💼 " + job.type;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.className = "remove-job";
        removeButton.addEventListener("click", function() {
            removeSavedJob(job.id);
        });

        card.append(title, company, location, type, removeButton);
        savedJobsList.appendChild(card);
    });
}

function removeSavedJob(jobId) {
    const savedJobs = JSON.parse(
        localStorage.getItem("savedJobs")
    ) || [];

    const remainingJobs = savedJobs.filter(function(job) {
        return job.id !== jobId;
    });

    localStorage.setItem("savedJobs", JSON.stringify(remainingJobs));
    displaySavedJobs();
}

displaySavedJobs();
