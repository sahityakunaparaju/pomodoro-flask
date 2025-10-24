# Use Python 3.13 slim as base image
FROM python:3.13-slim

# Set working directory
WORKDIR /app

# Copy project files
COPY . /app

# Create virtual environment
RUN python -m venv venv

# Install dependencies
RUN ./venv/bin/pip install --upgrade pip
RUN ./venv/bin/pip install -r requirements.txt

# Expose Flask port
EXPOSE 5000

# Command to run the app
CMD ["./venv/bin/python", "app.py"]
