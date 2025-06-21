
# 🧠 IT System Model Editor

## 📘 Overview

**IT System Model Editor** is a web application that allows users to securely upload, view, and edit IT infrastructure models represented as JSON files. Through an interactive graphical editor, users can visualize IT systems as networks of nodes and make changes directly in the browser.

The application consists of:
- 🔐 Authentication (Login, Registration, Forgot Password)
- 📁 Dashboard (File upload and management)
- 🕸️ Graphical Model Editor (Network visualization and editing)

---

## ✨ Features

- **User Authentication**  
  Login, registration, and password reset with secure credential management (JWT-based).
  
- **JSON File Management**  
  Upload one or more JSON files representing IT systems. Files are displayed in a sortable, filterable table.

- **Graphical Editor**  
  Visualize JSON models as a network graph. Click on a node (e.g. a computer) to:
  - Edit computer name
  - View/edit installed software
  - View/edit data related to the computer (as tables)
  - Modify network connections

- **Real-Time Editing**  
  All changes are automatically refreshed and can be saved to the server.

- **Download Options**  
  Choose to download either the original or modified version of each model file.

- **User Feedback**  
  Alerts are shown for successful saves, errors, warnings, and confirmations.

---

## 👣 User Flows

1. **Login or Register**
   - Use email and password to log in.
   - Register a new account if needed.
   - Reset password via email if forgotten.

2. **Manage JSON Files**
   - Upload files using a dedicated button.
   - View all uploaded files in a dynamic table.
   - Sort, filter, delete, and download files.

3. **Visual Edit Mode**
   - Click on a file to open the visual editor.
   - Interact with the graph to select nodes.
   - Use the toolbox to update node attributes.

---

## 🧩 UI Components

### Authentication
- **Login**: Email, password, forgot password link, login button  
- **Register**: Name, email, password, confirm password, register button  
- **Reset Password**: Email input, send reset link button  

### Dashboard
- JSON file upload button  
- File list with sorting/filtering  
- Delete button  
- Download dropdown (original/modified version)

### Graphical Editor
- Network visualization (nodes and links)  
- Side panel for editing selected node:
  - Hostname
  - Installed software
  - Attached data (as tables)
  - Network connections

### Alerts & Notifications
- Save confirmation  
- Error messages  
- Delete confirmation  
- File upload/download status

---

## 🛠️ Technical Stack

### Frontend
- **React** + **TypeScript**
- **Reagraph** (graph visualization)
- **SASS** for styling

### Backend
- **Flask** + **Flask-Smorest** (RESTful API framework)
- **PostgreSQL** for database
- **JWT** for user authentication
- **Swagger UI** for API documentation

### File Format
- **JSON** files validated against **JSON Schema**

### Testing
- **Pytest** (backend)
- **Jest** (frontend)

### Deployment
- Hosted on **GitHub**
- Supports **Chrome**, **Firefox**, and **Edge**

### UI Design
- **Responsive** (optimized for large screens)
- **Accessible** with contrast-aware design and readable fonts

---

## ⚙️ Non-Functional Requirements

- Support up to **20 models** and **200 nodes** simultaneously without noticeable slowdowns
- Restrict access to JSON files to **authorized users only**
- **Clear and readable UI** with accessible color schemes and typography
- Designed for **scalability** across multiple users and servers

---

## 🧾 ER Diagram

> _To be added: Insert your ER diagram image or link here._

The Entity-Relationship (ER) diagram defines relationships between:
- Users
- JSON Files
- System Nodes (e.g., Computers, Software, Networks)

---

## 📄 License

This project is under active development. Licensing and contribution guidelines will be defined in upcoming releases.

---

## 🚀 Future Plans

- Multi-user collaboration on the same model  
- Export visual graphs as images or PDFs  
- Versioning system for model files  
- Integration with external inventory APIs  

---

> For issues or suggestions, please [open an issue](https://github.com/your-repo/issues) or contact the development team.

