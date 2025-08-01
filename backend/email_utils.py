import os
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from dotenv import load_dotenv

load_dotenv()

SUPPORT_EMAIL = os.environ.get("SUPPORT_EMAIL", "soporte@kumia.net")
SMTP_SERVER = os.environ.get("SMTP_SERVER", "smtp.gmail.com")
SMTP_PORT = int(os.environ.get("SMTP_PORT", 587))
SMTP_USER = os.environ.get("SMTP_USER")
SMTP_PASS = os.environ.get("SMTP_PASS")


def send_contact_email(name, email, message):
    msg = MIMEMultipart()
    msg["From"] = SMTP_USER or SUPPORT_EMAIL
    msg["To"] = SUPPORT_EMAIL
    msg["Subject"] = "Nueva solicitud de demo desde KUMIA"

    body = f"""
    Nombre: {name}
    Email: {email}
    Mensaje: {message}
    """
    msg.attach(MIMEText(body, "plain"))

    with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.sendmail(msg["From"], msg["To"], msg.as_string())
