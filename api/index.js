const express = require("express");
var ua = require("universal-analytics");

const app = express();

app.use(express.json());

app.post("/api/feedback", (req, res) => {
  // Using the analytics ID directly and with a static UUID
  const visitor = ua("UA-215309627-3", "953b401e-d2db-4661-967f-f1e0b8ce84cb");

  const body = req.body;

  res.setHeader("Content-Type", "text/html");
  res.setHeader("Cache-Control", "s-max-age=1, stale-while-revalidate");

  if (body === undefined) {
    res.status(400).json({ message: `Invalid Request ${req.body}` });
  } else {
    if (body.category === undefined) {
      res.status(400).json({ message: `Category Missing ${body}` });
    } else if (body.action === undefined) {
      res.status(400).json({ message: `Action Missing ${body}` });
    } else {
      const category = body.category;
      const action = body.action;

      console.log(
        `Feedback submitted for Category '${category}' with Action '${action}'`
      );

      try {
        visitor.screenview({
          screenName: 'FakeScreen',
          applicationName: 'FAIRshare Docs',
        });
        
        visitor.event(category, action).send();
        res.json({ success: true, message: `Feedback Sent` });
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: `Something went wrong ${error}` });
      }
    }
  }
});

module.exports = app;

// const port = process.env.PORT || 5000;

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`);
// });
