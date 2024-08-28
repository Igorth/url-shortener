# URL Shortener with FastAPI

![Python Version](https://img.shields.io/badge/python-3.9+-blue)
![FastAPI](https://img.shields.io/badge/FastAPI-0.70.0-green)
![Build](https://img.shields.io/github/actions/workflow/status/Igorth/url-shortener/build.yml)
![Last Commit](https://img.shields.io/github/last-commit/Igorth/url-shortener)

## Introduction

This project is a URL shortener application built using FastAPI. It allows users to shorten long URLs, track clicks, and manage the shortened URLs via an admin interface.

## Installation

1. **Clone the repository:**

```bash
git clone https://github.com/Igorth/url-shortener
cd url-shortener
```

2. **Create a virtual environment and activate it:**
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

**3. Install the required dependencies:**
```bash
pip install -r requirements.txt
```

## Environment Variables
Create a `.env` file in the root directory of your project and add the following:

- **ENV_NAME:** Name of the environment (e.g., `Local`, `Development`).
- **BASE_URL:** Base URL of the application.
- **DB_URL:** Database URL for the SQLite database.

## Database
The application uses SQLite for simplicity. The database is stored in a file named 
`shortener.db` in the project root. The database schema includes a table named `urls `to store the shortened URLs, 
their corresponding keys, secret keys, target URLs, and click counts.

### Database Schema
- **id:** Integer (Primary Key)
- **key:** String (Unique, Index)
- **secret_key:** String (Unique, Index)
- **target_url:** String (Index)
- **is_active:** Boolean (Default: True)
- **clicks:** Integer (Default: 0)

## API Endpoints

### Root Endpoint
- GET /
  - Description: Returns a welcome message.
  - Response: `Index.html`

### URL Shortening
- POST /url
  - Description: Create a shortened URL.
  - Body: JSON containing `target_url`.
  - Response: JSON with the shortened URL and admin URL.

### URL Redirection
- GET /{url_key}
  - Description: Redirects to the target URL.
  - Response: Redirects to the original long URL.

### Admin URL Info
- GET /admin/{secret_key}
  - Description: Get information about the shortened URL.
  - Response: JSON with URL info, admin URL, and click count.

### Delete Shortened URL
- DELETE /admin/{secret_key}
  - Description: Deactivate the shortened URL.
  - Response: Confirmation message.

## Running the Project
Run the FastAPI application:
```bash
uvicorn app.main:app --reload
```
The application will be available at `http://localhost:8000`.

## Access the API documentation

Visit `http://localhost:8000/docs` for Swagger UI or `http://localhost:8000/redoc` for ReDoc.

## Planning
This project was planned to provide a straightforward and efficient way to shorten URLs, 
with an easy-to-use interface and basic administration features. It leverages FastAPI for 
quick development and SQLite for lightweight data storage, making it ideal for small 
to medium-sized applications.

The code is modular, making it easy to extend or modify features like URL key generation, 
database management, and API endpoint handling.

## Resources
[Real Python](https://realpython.com)