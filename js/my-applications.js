
const applicationsList = document.getElementById("applications-list");

const applications = JSON.parse(
    localStorage.getItem("applications")
) || [];

if (applications.length === 0) {
    applicationsList.innerHTML =
        "<p class='no-jobs'>You haven't applied for any jobs yet.</p>";
} else {
    applications.forEach(function(application) {
        const card = document.createElement("div");
        card.className = "job-card";

        const title = document.createElement("h2");
        title.textContent = application.jobTitle;

        const company = document.createElement("p");
        company.textContent = application.company;

        const date = document.createElement("p");
        date.textContent = "Applied on: " + application.submittedAt;

        const status = document.createElement("p");
        status.textContent = "Status: " + application.status;
const resumeButton = document.createElement("button");
resumeButton.textContent = "View Resume";

resumeButton.addEventListener("click", function() {
    openApplicationResume(application.applicationId);
});

card.append(title, company, date, status, resumeButton);
        applicationsList.appendChild(card);
    });
}

function openApplicationResume(applicationId) {
    const request = indexedDB.open("CareerConnectDB", 2);

    request.onsuccess = function () {
        const db = request.result;

        if (!db.objectStoreNames.contains("applicationResumes")) {
            alert("Resume storage was not found.");
            db.close();
            return;
        }

        const transaction = db.transaction(
            "applicationResumes",
            "readonly"
        );

        const getRequest = transaction
            .objectStore("applicationResumes")
            .get(Number(applicationId));

        getRequest.onsuccess = function () {
            const file = getRequest.result;

            if (file instanceof Blob) {
                const url = URL.createObjectURL(file);
                window.open(url, "_blank");

                // Keep the URL available while the new tab opens.
                setTimeout(() => URL.revokeObjectURL(url), 60000);
            } else {
                alert("Resume not found for this application.");
            }

            db.close();
        };

        getRequest.onerror = function () {
            alert("Could not retrieve the resume.");
            db.close();
        };
    };

    request.onerror = function () {
        alert("Could not open resume storage.");
    };
}

