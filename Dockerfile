# Используем официальный образ Node.js в качестве базового
FROM node:22-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и pnpm-lock.yaml в рабочую директорию
COPY package.json pnpm-lock.yaml ./

# Устанавливаем pnpm и зависимости
RUN npm install -g pnpm && pnpm install --frozen-lockfile

# Копируем остальные файлы приложения в рабочую директорию
COPY . .

# Устанавливаем переменную окружения NODE_ENV в production
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Строим приложение
RUN pnpm build

# Открываем порт, на котором будет работать приложение
EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Команда для запуска приложения
CMD ["pnpm", "start"]
