import { NextResponse } from 'next/server';
import auth0 from '@auth0/nextjs-auth0';

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  try {
    const user = await auth0.users.get({ id: userId });
    return NextResponse.json(user.app_metadata || {});
  } catch (error) {
    console.error("Error fetching user metadata:", error);
    return NextResponse.json({ message: "Error fetching user metadata" }, { status: 500 });
  }
}
