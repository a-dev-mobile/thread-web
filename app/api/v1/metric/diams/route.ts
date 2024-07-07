import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

export async function GET(req: NextRequest) {
    try {
        const res = await query('SELECT * FROM metric.diameters ORDER BY id ASC');
        const diameters = res.rows;

        return NextResponse.json({
            success: true,
            data: diameters,
        });
    } catch (err) {
        console.error('Error fetching diameters:', err);
        return NextResponse.json({
            success: false,
            error: 'Failed to fetch diameters',
        }, {
            status: 500
        });
    }
}
