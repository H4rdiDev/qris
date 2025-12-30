export default function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>qris</title>
      </head>
      <body style="margin:0;display:flex;justify-content:center;align-items:center;height:100vh;">
        <img src="/qris.png" alt="qris" />
      </body>
    </html>
  `);
}
