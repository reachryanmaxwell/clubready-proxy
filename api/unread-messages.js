// api/unread-messages.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await axios.get(
      "https://cprod-sms-internal-api.azurewebsites.net/sms-internal/v1/clubs/14764/unread-message-count",
      {
        headers: {
          "Ocp-Apim-Subscription-Key": process.env.CLUBREADY_KEY,
        },
      }
    );

    res.status(200).json({
      success: true,
      unreadCount: response.data,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error calling ClubReady API",
      error: error.message,
      details: error.response?.data || null,
    });
  }
}
