# Atlys_Screening

# Project Name

Welcome to the **Project Name** repository! This project is designed to manage user authentication and display posts.

## Project Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```

2. Navigate to the project directory:
    ```sh
    cd project-directory
    ```

3. Install the necessary dependencies:
    ```sh
    npm install
    ```

4. Start the development server:
    ```sh
    npm run start
    ```

This will run the project locally, and you can access it through your web browser.

## Project Overview

This project includes two primary routes:

- `/`: This is the authentication route responsible for login and signup.
- `/home`: This route displays the logged-in username and posts.

### Authentication Flow

1. **Login**: 
    - Users must log in to access the home page.
    - If the user already exists in local storage, they can log in with their credentials.
    - Navigate to the login page by visiting `/`.

2. **Signup**: 
    - If the user does not exist, they must register first.
    - After successful registration, the user can log in.
    - Navigate to the signup page by visiting `/` and selecting the register option.

3. **Home**:
    - After logging in, users are redirected to the `/home` page.
    - The `/home` page displays the logged-in username and posts.
    - If a user tries to access `/home` without being logged in, they are redirected to the login page.

### User Data Management

- User credentials are managed through local storage.
- Upon logging in or signing up, relevant user data (e.g., email, username) is stored in local storage to manage user sessions.

### Project Features

1. **Login and Signup Modals**:
    - Modals are used to handle login and signup functionalities.
    - Users can toggle visibility of passwords for better user experience.

2. **Post Creation**:
    - Users can see posts from the `/home` page.

For detailed instructions on how to navigate and use the application, please refer to the implementation specifics in the codebase. If you encounter any issues or have questions, feel free to reach out to me.
