const admin = require("firebase-admin");

module.exports = async (req, res) => {
	//Verify user provided a phone
	if (!req.body.phone) {
		return res.status(422).send({ error: "Bad Input" });
	}
	//Format the phone number to remove dashes and parens
	const phone = String(req.body.phone).replace(/[^\d]/g, "");

	//Create a new user account using that phone number
	try {
		const user = await admin.auth().createUser({ uid: phone });
		res.send(user);
	} catch (err) {
		res.status(422).send({ error: err });
	}

	//Respond to the user request, saying the account was made
};
