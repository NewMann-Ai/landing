# EmailJS Setup Guide

This guide will help you configure EmailJS to send emails from the newsletter form to info@newmann.ai.

## Steps to Set Up EmailJS:

### 1. Create an EmailJS Account

-   Go to [https://www.emailjs.com/](https://www.emailjs.com/)
-   Sign up for a free account (allows 200 emails/month)

### 2. Add an Email Service

-   In your EmailJS dashboard, go to "Email Services"
-   Click "Add New Service"
-   Choose your email provider (Gmail recommended)
-   Follow the instructions to connect your email account
-   **Important:** Use an email account that can send to info@newmann.ai

### 3. Create an Email Template

-   Go to "Email Templates" in your dashboard
-   Click "Create New Template"
-   Configure your template with:
    -   **To Email:** `{{to_email}}`
    -   **Subject:** "Nuovo iscritto - Newmann"
    -   **Content:** `{{message}}`

Example template structure:

```
To: {{to_email}}
From: your-configured-service
Subject: Nuovo iscritto - Newmann

{{message}}

---
Email dell'utente: {{user_email}}
```

### 4. Get Your Credentials

After creating your service and template, you'll need:

-   **Service ID:** Found in your Email Services page
-   **Template ID:** Found in your Email Templates page
-   **Public Key:** Found in Account > API Keys

### 5. Configure Your Environment Variables

Open the `.env` file in the project root and replace the placeholder values:

```env
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

### 6. Restart Your Development Server

After updating the `.env` file, restart your dev server:

```bash
pnpm run dev
```

## Testing

1. Navigate to the newsletter page
2. Enter an email address
3. Click "Unisciti"
4. You should receive an email at info@newmann.ai with the message: "Utente {email} si è unito a Newmann"

## Troubleshooting

-   **"Errore nell'invio"**: Check your EmailJS credentials in `.env`
-   **Email not received**: Check your EmailJS dashboard for delivery status
-   **Rate limit exceeded**: Free plan allows 200 emails/month

## Alternative: Backend Solution

For production use, consider implementing a backend API endpoint to handle email sending more securely using services like SendGrid, AWS SES, or Nodemailer.
