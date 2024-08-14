# Meeting Scheduler App

This is a simple web application for managing meetings. It allows users to input their name and meeting titles, then schedule and manage meetings with an easy-to-use interface.

## Features

- **Welcome Form:** Greets the user with their name and displays the meeting scheduling interface.
- **Meeting Scheduling:** Users can add new meetings with a title, date, and time.
- **Meeting Deletion:** Users can remove meetings from the list.

## How It Works

### Welcome Form Submission

The `greetings` function handles the submission of the welcome form:
1. **Retrieves Input Values:** Fetches the username and meetings title from the form inputs.
2. **Displays User Info:** Updates the welcome message and meetings title on the page.
3. **Shows Meeting Interface:** Hides the welcome form and shows the meetings interface.
4. **Clears Form Inputs:** Resets the input fields in the form.

### Meeting Form Submission

The `scheduleMeeting` function processes the meeting form submission:
1. **Retrieves Form Values:** Gets the meeting title, date, and time from the form inputs.
2. **Creates a Meeting Element:** Generates a new HTML element to display the meeting details.
3. **Appends Meeting:** Adds the new meeting element to the meeting list on the page.
4. **Clears Form Inputs:** Resets the meeting form fields.

### Meeting Deletion

The `deleteMeeting` function handles the removal of meetings:
1. **Identifies Meeting Element:** Finds the meeting element to be deleted.
2. **Removes Meeting:** Deletes the meeting element from the list.

