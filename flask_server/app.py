from flask import Flask
from flask_cors import CORS


from config import ApplicationConfig
from models import User

app = Flask(__name__)
app.config.from_object(ApplicationConfig)

CORS(app, supports_credentials=True)


@app.route("/@me")
def get_user():

    user = User() 
    return user.get_current_user()

@app.route("/register", methods=["POST"])
def register_user():
    user = User()
    return user.register()

@app.route("/login", methods=["POST"])
def login_user():
    user = User()
    return user.login()

@app.route("/logout", methods=["POST"])
def logout_user():
    user = User()
    return user.logout()

@app.route("/verify-login", methods=["POST"])
def verify_login():
    user = User()
    return user.verify_login()


if __name__ == "__main__":
    app.run(debug=True)