# ChatApp

## Overview

ChatApp is a web-based application designed to facilitate real-time messaging between users. The project leverages Angular for the front-end and Supabase for the back-end, providing a seamless and efficient chat experience. 

## Features

- **Real-time Messaging**: Send and receive messages instantly.
- **User Authentication**: Secure sign-up and login using Supabase's Google authentication.
- **Message Persistence**: Store chat history in Supabase database.
- **Responsive Design**: Accessible on various devices.

## Tech Stack

### Front-End

- [Angular](https://angular.io/)
  - Angular CLI

### Back-End

- [Supabase](https://supabase.io/)
  - Supabase Auth for user authentication
  - Supabase Database for storing chat messages
  - Supabase Realtime for real-time message updates

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)
- [Supabase Account](https://supabase.io/)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/your-username/chatapp.git
    cd chatapp
    ```

2. **Install dependencies:**

    ```sh
    npm install
    ```

3. **Set up Supabase:**

   - Create a new project in Supabase.
   - Obtain the API URL and API Key from the Supabase dashboard.
   - Create a table for storing chat messages with the necessary fields (e.g., `id`, `user_id`, `message`, `timestamp`).

4. **Configure environment variables:**

    Create a file named `src/environments/environment.ts` and add your Supabase configuration:

    ```typescript
    export const environment = {
      production: false,
      supabaseUrl: 'https://your-supabase-url.supabase.co',
      supabaseKey: 'your-supabase-key'
    };
    ```

5. **Run the application:**

    ```sh
    ng serve
    ```

    Open your browser and navigate to `http://localhost:4200`.

## Usage

1. **Sign Up / Log In:**
   - Create a new account or log in using existing credentials.

2. **Start Chatting:**
   - Enter a message in the input field and press "Send" to send a message.
   - Messages will appear in the chat window in real-time.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/your-feature`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Angular](https://angular.io/)
- [Supabase](https://supabase.io/)

## Contact

For any inquiries, please contact [wkswaileh@example.com](mailto:wkswaileh@example.com).
