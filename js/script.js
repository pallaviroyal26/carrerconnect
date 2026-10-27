const jobContainer = document.getElementById("job-container");

jobs.forEach(function(job) {

    const jobCard = document.createElement("div");

    jobCard.classList.add("job-card");

    jobCard.innerHTML = `
        <h3>${job.title}</h3>

        <p>${job.company}</p>

        <p>📍 ${job.location}</p>

        <p>💼 ${job.type}</p>

       <button class="view-job" data-id="${job.id}">
    View Job
</button>
    `;

    jobContainer.appendChild(jobCard);

});
const jobSearch = document.getElementById("job-search");
const locationSearch = document.getElementById("location-search");
const searchButton = document.getElementById("search-button");

searchButton.addEventListener("click", function() {

    const jobKeyword = jobSearch.value.toLowerCase();
    const locationKeyword = locationSearch.value.toLowerCase();

    const filteredJobs = jobs.filter(function(job) {

        return (
            job.title.toLowerCase().includes(jobKeyword) &&
            job.location.toLowerCase().includes(locationKeyword)
        );

    });

    jobContainer.innerHTML = "";

    filteredJobs.forEach(function(job) {

        const jobCard = document.createElement("div");

        jobCard.classList.add("job-card");

        jobCard.innerHTML = `
            <h3>${job.title}</h3>
            <p>${job.company}</p>
            <p>📍 ${job.location}</p>
            <p>💼 ${job.type}</p>
            <button class="view-job" data-id="${job.id}">
    View Job
</button>
        `;

        jobContainer.appendChild(jobCard);

    });

});
document.addEventListener("click", function(event) {

    if (event.target.classList.contains("view-job")) {

        const jobId = event.target.getAttribute("data-id");

        window.location.href = "job-details.html?id=" + jobId;

    }

});
const urlParams = new URLSearchParams(window.location.search);

const jobId = urlParams.get("id");

if (jobId) {

    const selectedJob = jobs.find(function(job) {
        return job.id == jobId;
    });

    if (selectedJob) {

        document.getElementById("job-title").textContent = selectedJob.title;

        document.getElementById("job-company").textContent = selectedJob.company;

        document.getElementById("job-location").textContent =
            "📍 " + selectedJob.location;

        document.getElementById("job-type").textContent =
            "💼 " + selectedJob.type;

        document.getElementById("job-description").textContent =
            selectedJob.description;

        document.getElementById("job-skills").textContent =
            selectedJob.skills;

    }

}