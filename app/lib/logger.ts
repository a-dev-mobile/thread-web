// app/lib/logger.ts
import winston from 'winston';

const isProduction = process.env.NODE_ENV === 'production';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level}]: ${message}`)
    ),
    transports: isProduction
        ? [new winston.transports.File({ filename: 'combined.log' })]
        : [new winston.transports.Console()],
});

export default logger;
