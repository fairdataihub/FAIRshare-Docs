const express = require('express');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');

const app = express();

app.use(express.json());

app.post('/api/feedback', async (req, res) => {
  const { body } = req;

  // eslint-disable-next-line no-console
  console.log(`Feedback received: ${JSON.stringify(body)}`);

  const clientID = uuidv4();

  res.setHeader('Content-Type', 'text/html');
  res.setHeader('Cache-Control', 's-max-age=1, stale-while-revalidate');

  if (body === undefined) {
    res.status(400).json({ message: `Invalid Request ${req.body}` });
  } else if (body.category === undefined) {
    res.status(400).json({ message: `Category Missing ${body}` });
  } else if (body.action === undefined) {
    res.status(400).json({ message: `Action Missing ${body}` });
  } else {
    const { category, action } = body;

    // eslint-disable-next-line no-console
    console.log(`Feedback submitted for Category '${category}' with Action '${action}' `);

    const config = {
      method: 'post',
      // eslint-disable-next-line max-len
      url: `https://www.google-analytics.com/collect?v=1&t=event&tid=${process.env.UNIVERSAL_ANALYTICS_ID}&cid=${clientID}&ec=${category}&ea=${action}`,
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    };

    try {
      await axios(config);
    } catch (error) {
      res.status(500).json({ message: `Something went wrong: ${error}` });
      throw new Error('Unable to get a token.');
    }

    res.json({ success: true, message: `Feedback Sent` });
  }
});

module.exports = app;

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
