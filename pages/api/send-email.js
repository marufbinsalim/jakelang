import { MailerSend, EmailParams, Sender, Recipient } from "mailersend";

const mailersend = new MailerSend({
  apiKey:
    "mlsn.3e7701505d3552d07a6e05011f45d56e9ec0783a6a00db58a8c4cf0868047c25",
});

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { message, html, subject } = req.body;

    if (!message || !html || !subject) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const emailParams = new EmailParams()
      .setFrom(
        new Sender(
          "MS_o4kr8r@trial-ynrw7gyox2ol2k8e.mlsender.net",
          "jakelangforsenate",
        ),
      )
      .setTo([new Recipient("libertycentriccontact@gmail.com")])
      .setSubject(subject)
      .setHtml(html)
      .setText(message);

    const mailData = await mailersend.email.send(emailParams);

    res.status(200).json({ message: "Email sent successfully" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
