// Function to handle welcome form submission
function greetings(e) {
  e.preventDefault();

  // Get welcome form values
  let displayUserName = document.getElementById("welcome-title").value;
  let displayUserMeetingsTitle = document.getElementById(
    "welcome-meetings-title"
  ).value;

  // Get elements
  let userName = document.getElementById("username");
  let userMeetingsTitle = document.getElementById("meeting-list-title");

  const welcomeContainer = document.getElementById("welcome-container");

  const meetingsContainer = document.getElementById("meetings-container");

  // append text nodes to elements
  userName.textContent = `Welcome, ${displayUserName}!`;

  userMeetingsTitle.textContent = `${displayUserMeetingsTitle} Appointments`;

  // add class to elements
  welcomeContainer.classList.add("hidden");
  meetingsContainer.classList.remove("hidden");

  // Clear form inputs
  userName = "";
  userMeetingsTitle = "";
  document.getElementById("meeting-time").value = "";
}

// Function to handle meeting form submission
function scheduleMeeting(e) {
  e.preventDefault();

  // Get form values
  const title = document.getElementById("meeting-title").value;
  const date = document.getElementById("meeting-date").value;
  const time = document.getElementById("meeting-time").value;

  // Create a new meeting element
  const meeting = document.createElement("div");
  meeting.classList.add("meeting");
  meeting.innerHTML = `
        <p>${title}</p>
        <p>${date}</p>
        <p>${time}</p>
        <button onclick="deleteMeeting(event)">Delete</button>
      `;

  // Append the new meeting element to the list
  const meetingList = document.getElementById("meeting-list");
  meetingList.appendChild(meeting);

  // Clear form inputs
  document.getElementById("meeting-title").value = "";
  document.getElementById("meeting-date").value = "";
  document.getElementById("meeting-time").value = "";
}

// Function to handle meeting deletion
function deleteMeeting(e) {
  e.preventDefault();
  const meeting = e.target.parentElement;
  const meetingList = document.getElementById("meeting-list");
  meetingList.removeChild(meeting);
}

// Attach form submission event listener
const meetingForm = document.getElementById("meeting-form");
meetingForm.addEventListener("submit", scheduleMeeting);

// Attach welcome form submission event listener
const greetingForm = document.getElementById("welcome-form");
greetingForm.addEventListener("submit", greetings);
