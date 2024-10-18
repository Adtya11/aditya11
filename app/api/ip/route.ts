import { NextResponse } from 'next/server';

export async function GET(request: any) {
  const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || request.connection?.remoteAddress;
  return NextResponse.json({ ip: ip ? ip.split(',')[0] : 'IP not available' });
}