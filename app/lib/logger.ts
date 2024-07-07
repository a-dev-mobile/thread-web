const isProduction = process.env.NODE_ENV === 'production';

const log = (level: string, message: string) => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp} [${level}]: ${message}`);
};

const logger = {
    info: (message: string) => log('info', message),
    error: (message: string) => log('error', message),
    warn: (message: string) => log('warn', message),
    debug: (message: string) => log('debug', message),
};

export default logger;
