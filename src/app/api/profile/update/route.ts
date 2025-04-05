import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const { username, email, bio } = await req.json();

        // Basic validation
        if (!username || !email || !bio) {
            return NextResponse.json({ success: false, errors: 'All fields are required.' }, { status: 400 });
        }

        // Simulate saving data (you can replace this with actual database operations)
        console.log('Profile updated successfully');

        // Simulating a successful response from the server
        return NextResponse.json({ success: true, message: 'Profile updated successfully!' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ success: false, errors: 'Server error, please try again.' }, { status: 500 });
    }
}
