# FastAPI CRUD Application

This is a basic CRUD (Create, Read, Update, Delete) application built with FastAPI.

## Setup

1. Install uv (if not already installed):
```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

2. Create a virtual environment and install dependencies:
```bash
uv venv
uv pip install -r requirements.txt
```

3. Activate the virtual environment:
- On Windows:
```bash
.venv/Scripts/activate
```
- On macOS/Linux:
```bash
source .venv/bin/activate
```

4. Run the application:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

## API Documentation

Once the application is running, you can access:
- Swagger UI documentation: `http://localhost:8000/docs`
- ReDoc documentation: `http://localhost:8000/redoc` 