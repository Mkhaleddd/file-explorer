
# File Explorer

A simple file explorer application built using React. This application allows users to navigate through folders, add files or folders, edit them, and delete them.

## Features

- **Create Folders and Files**: Users can add folders and files to the current directory.
- **Expand/Collapse Folders**: Users can expand and collapse folders to view their contents.
- **Edit Files and Folders**: Users can edit the names of files and folders.
- **Delete Files and Folders**: Users can delete files and folders.

## Installation

To run this project locally, follow these steps:

### 1. Clone the Repository

Clone the repository to your local machine:

```bash
git clone https://github.com/Mkhaleddd/file-explorer.git
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies:

```bash
cd file-explorer
npm install
```

### 3. Start the Development Server

Once the dependencies are installed, you can start the development server:

```bash
npm start
```

The application should now be accessible at [http://localhost:3000](http://localhost:3000).

## Usage

- **Add Folder/File**: Click the respective buttons to add a folder or a file.
- **Edit Folder/File**: Click the pencil icon next to a file or folder to edit its name.
- **Delete Folder/File**: Click the trash icon next to a file or folder to delete it.
- **Expand/Collapse Folders**: Click on a folder to expand or collapse its contents.

## Folder Structure

```
src/
  components/
    Folder.js         # The component that handles folder display and actions
    File.js           # The component that handles file display and actions
  data/
    data.js           # The initial folder structure data
  App.js              # The root component that renders the folder structure
  index.js            # The entry point of the application
  styles.css          # Styles for the app
```

