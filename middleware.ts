// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
    const { method, url } = req;
    const start = Date.now();

    // Логируем начало запроса
    console.log(`${new Date().toISOString()} [info]: ${method} ${url} started`);

    // Создаем response и замеряем время выполнения
    const res = NextResponse.next();

    // Клонируем response для обработки после отправки
    const responseClone = res.clone();

    responseClone.headers.set('X-Response-Time', `${Date.now() - start}ms`);

    responseClone.headers.set('X-Log-Info', `${method} ${url} ${res.status} in ${Date.now() - start}ms`);

    // Логируем ответ
    responseClone.headers.append('X-Log-Info', `${new Date().toISOString()} [info]: ${method} ${url} - ${res.status} in ${Date.now() - start}ms`);

    console.log(`${new Date().toISOString()} [info]: ${method} ${url} - ${res.status} in ${Date.now() - start}ms`);

    return res;
}

// Настраиваем middleware для всех маршрутов
export const config = {
    matcher: '/:path*',
};
