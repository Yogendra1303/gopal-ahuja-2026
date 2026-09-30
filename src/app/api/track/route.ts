import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // In the future, this data will be saved to a database (e.g., Supabase, PostgreSQL)
    // For now, we are just logging it as requested by the user ("avoid database for now")
    console.log('[CUSTOM ANALYTICS EVENT]', {
      timestamp: new Date().toISOString(),
      ...data
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('[CUSTOM ANALYTICS ERROR]', error);
    return NextResponse.json({ success: false, error: 'Failed to track event' }, { status: 500 });
  }
}
