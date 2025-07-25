const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/unread-messages', async (req, res) => {
  try {
    const response = await axios.get(
      'https://cprod-sms-internal-api.azurewebsites.net/sms-internal/v1/clubs/14764/unread-message-count',
      {
        headers: {
          'Ocp-Apim-Subscription-Key': process.env.CLUBREADY_KEY
        }
      }
    );

    res.status(200).json({
      success: true,
      unreadCount: response.data
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error calling ClubReady API',
      error: error.message,
      details: error.response?.data || null
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy listening on port ${PORT}`);
});