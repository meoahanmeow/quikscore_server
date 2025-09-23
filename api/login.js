// api/login.js
export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method Not Allowed" });
  }

  const { username, password } = req.body;

  if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({ success: true, message: "SUCCESS!" });
  }

  return res.status(401).json({ success: false, message: "Invalid credentials" });
}
