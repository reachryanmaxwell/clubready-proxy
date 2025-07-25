# ClubReady Proxy

This is a lightweight proxy server to allow external tools like Go High Level (GHL) to call internal ClubReady API endpoints.

## How to Use

1. Deploy this on Vercel, Render, or Railway
2. Set the environment variable:
   - `CLUBREADY_KEY` = your ClubReady API key
3. Call the endpoint: `/unread-messages`