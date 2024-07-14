# Используем официальный образ Node.js в качестве базового
FROM node:22-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и package-lock.json в рабочую директорию
COPY package.json package-lock.json ./

# Устанавливаем зависимости
RUN npm install

# Копируем остальные файлы приложения в рабочую директорию
COPY . .

# Строим приложение
RUN npm run build

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Команда для запуска приложения
CMD ["npm", "run", "preview"]
