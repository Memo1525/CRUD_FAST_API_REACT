import requests

# API endpoint
url = "http://localhost:8000/items/"

# List of items to add
items = [
    {
        "title": "Laptop",
        "description": "High-performance laptop for development",
        "is_active": True
    },
    {
        "title": "Smartphone",
        "description": "Latest model with great features",
        "is_active": True
    },
    {
        "title": "Headphones",
        "description": "Noise-cancelling wireless headphones",
        "is_active": True
    },
    {
        "title": "Monitor",
        "description": "27-inch 4K display",
        "is_active": True
    },
    {
        "title": "Keyboard",
        "description": "Mechanical RGB keyboard",
        "is_active": True
    }
]

# Add each item
for item in items:
    response = requests.post(url, json=item)
    if response.status_code == 200:
        print(f"Added item: {item['title']}")
    else:
        print(f"Failed to add item: {item['title']}")
        print(f"Error: {response.text}") 