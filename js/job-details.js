const urlParams = new URLSearchParams(window.location.search);
const jobId = Number(urlParams.get("id"));

const selectedJob = jobs.find(function(job) {
    return job.id === jobId;
});

if (selectedJob) {
    document.getElementById("job-title").textContent =
        selectedJob.title;

    document.getElementById("job-company").textContent =
        selectedJob.company;

    document.getElementById("job-location").textContent =
        "📍 " + selectedJob.location;

    document.getElementById("job-type").textContent =
        "💼 " + selectedJob.type;

    document.getElementById("job-description").textContent =
        selectedJob.description;

    document.getElementById("job-skills").textContent =
        selectedJob.skills;
} else {
    document.getElementById("job-title").textContent =
        "Job Not Found";

    document.getElementById("job-company").textContent =
        "Please return to the Jobs page and select a job.";
}
// Save Job feature

const saveButton = document.getElementById("save-button");

if (saveButton && selectedJob) {

    saveButton.addEventListener("click", function () {

        let savedJobs = JSON.parse(
            localStorage.getItem("savedJobs")
        ) || [];

        const alreadySaved = savedJobs.some(function (job) {
            return job.id === selectedJob.id;
        });

        if (alreadySaved) {
            alert("This job is already saved!");
        } else {

            savedJobs.push(selectedJob);

            localStorage.setItem(
                "savedJobs",
                JSON.stringify(savedJobs)
            );

            alert("Job saved successfully!");

            saveButton.textContent = "Saved ✓";
        }

    });

}

const applyButton = document.getElementById("apply-button");

if (applyButton) {
    applyButton.addEventListener("click", function() {
        if (selectedJob) {
            window.location.href =
                "apply.html?id=" + selectedJob.id;
        }
    });
}
