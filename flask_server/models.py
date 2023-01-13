from flask import jsonify, request, session
from pymongo import MongoClient
from dotenv import load_dotenv, find_dotenv
import uuid, os, certifi
from passlib.hash import pbkdf2_sha256

load_dotenv(find_dotenv())
password = os.environ.get("MONGODB_PWD")
connection_string = f"mongodb+srv://illumz:{password}@login-data.kxvxt5y.mongodb.net/?retryWrites=true&w=majority"
ca = certifi.where()

client = MongoClient(connection_string, tlsCAFile=ca)
db = client.user_login_system


class User:
    def create_session(self, user):
        del user["password"]  # del user password before creating session

        session.permanent = True
        session["user"] = user

        return jsonify(user), 200

    def verify_login(self):
        if session:
            return "200"
        else:
            return "400"
            
    
    def register(self):

        # Make user object
        user = {
            "_id": uuid.uuid4().hex,
            "username": request.json["username"],
            "email": request.json["email"],
            "phone" : "",
            "password": request.json["password"],
            "follwers" : 0,
        }

        # Encrypt password
        user["password"] = pbkdf2_sha256.encrypt(user["password"])

        # Check for existing email address and username
        if db.users.find_one({"email": user["email"]}):
            return jsonify({"error": "Email address already exists"}), 400

        if db.users.find_one({"username": user["username"]}):
            return jsonify({"error": "Username already exists"}), 400


        # inserts user, starts session
        if db.users.insert_one(user):
            return self.create_session(user)

    
        return jsonify({"error": "Signup failed"}), 400
        

    def logout(self):
        session.pop("user", None)
        return "200"

    def login(self):

        user = db.users.find_one({"email": request.json["email"]})
        
        if user and pbkdf2_sha256.verify(
            request.json["password"], user["password"]
        ):
            return self.create_session(user)
        else:
            return jsonify({"error": "Invalid Credentials"}), 401
    
    def get_current_user(self):

        user_id = session["user"]["_id"]

        if not user_id:
            return jsonify({"error": "Unauthorized"}), 401
        
        user = db.users.find_one({"_id": user_id})
        return jsonify({
            "username": user["username"],
            "_id": user["_id"],
            "email": user["email"]
        })