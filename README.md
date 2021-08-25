# My Personal Website

This is my personal website which showcases my work, blog posts, and contact information. I designed this in [Figma](https://figma.com/) and built it with [Next.js](https://nextjs.org/). You can view it live [here](https://melvincayas.com)! Feel free to fork this and use it as as template for your own website.

## Built With

- [React](https://reactjs.org/)
- [Next.js](https://nextjs.org/)
- [Bulma](https://bulma.io/)

## Installation

1. Clone this repo

```
git clone https://github.com/melvincayas/personal-website.git
```

2. Install NPM packages

```
npm install
```

## Using the Contact Form

To use the contact form, you must set up your e-mail information and the Google reCAPTCHA:

1. Sign up for your Google reCAPTCHA API key pair [here](https://developers.google.com/recaptcha/intro).

2. Create a dummy e-mail account solely for sending e-mails to your personal account. Nodemailer will use this to send an e-mail of the filled-out contact form to your personal e-mail. This repo is currently setup for [Google e-mails](https://accounts.google.com/signup/v2/webcreateaccount?flowName=GlifWebSignIn&flowEntry=SignUp). If you create an e-mail outside of Google, you'll have to modify the code below in `sendMail.js`:

```javascript
const transporter = nodemailer.createTransport({
	port: 465,
	host: "smtp.gmail.com",
	auth: {
		user: EMAIL,
		pass: PASSWORD,
	},
	secure: true,
});
```

3. Include this in your `.env` file:

```
DUMMY_EMAIL=YOUR_DUMMY_EMAIL
DUMMY_PASSWORD=YOUR_DUMMY_EMAIL_PASSWORD
PERSONAL_EMAIL=YOUR_PERSONAL_EMAIL
SECRET_KEY=YOUR_GOOGLE_RECAPTCHA_SECRET_KEY
```

4. Include this in your `.env.local` file:

```
NEXT_PUBLIC_SITE_KEY=YOUR_GOOGLE_RECAPTCHA_SITE_KEY
```

## Contributing

I'm always open to improving my code and the best way to do that is by having others critique it. If you see any bugs or opportunities to refactor, please let me know. It would be **highly appreciated**!

1. Fork this repo

2. Create your branch for improvement

```
git checkout -b your-improvement
```

3. Commit your changes

```
git commit -m "Refactored the code"
```

4. Push to your branch

```
git push origin your-improvement
```

5. Open a Pull Request

## Acknowledgements

- [Google reCAPTCHA](https://www.google.com/recaptcha/about/)
- [Hashnode API](https://api.hashnode.com/)
- [FontAwesome](https://fontawesome.com/)
- [Simple Icons](https://simpleicons.org/)
- [Moment.js](https://momentjs.com/)
- [Nodemailer](https://nodemailer.com/about/)
- [Figma](https://figma.com/)

## Contact

Melvin Cayas  
[cayasmj@gmail.com](mailto:cayasmj@gmail.com?subject=[GitHub])  
[melvincayas.com](https://melvincayas.com/)

Links  
[Live Version](https://melvincayas.com/)  
[GitHub](https://github.com/melvincayas/personal-website)
