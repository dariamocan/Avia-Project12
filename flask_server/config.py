from dotenv import load_dotenv
import os

load_dotenv()

class ApplicationConfig:
    SECRET_KEY = os.environ["SECRET_KEY"]

    SESSION_PERMANENT = False
    SESSION_USE_SIGNER = True