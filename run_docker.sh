#!/bin/sh

DOCKER_IMAGE="thread-web:local"

# Function to build the Docker image
build() {
    echo "Building Docker image..."
    docker build -t "$DOCKER_IMAGE" .
}

# Function to stop and remove the Docker container
remove() {
    echo "Stopping and removing Docker container..."
    docker stop thread-web || true
    docker rm thread-web || true
}

# Function to update the Docker image and restart the container
update() {
    echo "Building new Docker image..."
    build
    remove
    run
}

# Function to run the Docker container
run() {
    echo "Running Docker container..."
    docker run -d --name thread-web -p 3000:3000 "$DOCKER_IMAGE"
}

# Check arguments
case "$1" in
    build)
        build
        ;;
    remove)
        remove
        ;;
    update)
        update
        ;;
    run)
        run
        ;;
    *)
        echo "Usage: $0 {build|remove|update|run}"
        exit 1
        ;;
esac
