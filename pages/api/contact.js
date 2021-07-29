export default function messageHandler(req, res) {
	if (req.method === "POST") {
		console.log(req.body);
		return res.status(200).json({
			message:
				"Your message has been sent! I'll get back to you as soon as I can.",
		});
	}
}
