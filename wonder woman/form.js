document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("#form");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        if (form.checkValidity()) {
            const name = document.getElementById("name").value;

            const fanSection = document.createElement("section");
            fanSection.innerHTML = `<h2>Thank you ${name} for your message!</h2>`;

            const sectionContent = document.getElementById("fan");
            sectionContent.appendChild(fanSection);

            form.reset();
        } else {
            console.error("Form is not valid");
        }
    });
});
