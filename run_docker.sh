#!/bin/sh

# Функция для чтения переменных из настроек VSCode
get_vscode_setting() {
    setting_name=$1
    jq -r ".\"$setting_name\"" <"$VSCODE_SETTINGS"
}

# Проверка наличия jq
if ! command -v jq >/dev/null; then
    echo "Error: jq is not installed."
    exit 1
fi

# Определение пути к файлу настроек VSCode
VSCODE_SETTINGS="./.vscode/settings.json"

# Проверка наличия файла настроек
if [ ! -f "$VSCODE_SETTINGS" ]; then
    echo "Error: VSCode settings file not found."
    exit 1
fi

# Получение значений из настроек VSCode
DOCKER_HUB_USERNAME=$(get_vscode_setting "dockerHub.username")
DOCKER_HUB_ACCESS_TOKEN=$(get_vscode_setting "dockerHub.accessToken")
DOCKER_IMAGE="$(get_vscode_setting "docker.imageName")"

if [ -z "$DOCKER_HUB_USERNAME" ] || [ -z "$DOCKER_HUB_ACCESS_TOKEN" ] || [ -z "$DOCKER_IMAGE" ]; then
    echo "Error: Please ensure all Docker settings are set in VSCode."
    exit 1
fi

# Функция для сборки Docker-образа
build() {
    echo "Building Docker image..."
    docker build -t "$DOCKER_IMAGE" .
}

# Функция для удаления Docker-контейнера и образа
remove() {
    echo "Stopping and removing Docker container..."
    docker stop thread-web || true
    docker rm thread-web || true
}

# Функция для обновления Docker-образа и перезапуска контейнера
update() {
    echo "Building new Docker image..."
    build
    remove
    run
}

# Функция для запуска Docker-контейнера
run() {
    echo "Running Docker container..."
    docker run -d --name thread-web -p 3000:3000 "$DOCKER_IMAGE"
}

# Проверка аргументов
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

exit 0
