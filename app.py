# app.py

from flask import Flask, jsonify, request, render_template
from flask_cors import CORS
from flask_mongoengine import MongoEngine
from login import authenticate
from signup import create_account
import os
import sys
import subprocess

app = Flask(__name__)
CORS(app)
app.config['MONGODB_SETTINGS'] = {
    'db': 'admin',
    'host': 'mongodb+srv://edralyyyyynperaltaa:magandaako@cluster.jarpoqa.mongodb.net/Accounts'
}

db = MongoEngine(app)

@app.route('/login', methods=['POST'])
def login():
    data = request.json
    username = data.get('username')
    password = data.get('password')

    # Call the authenticate function from login.py
    response, status_code = authenticate(username, password)
    return jsonify(response), status_code

@app.route('/signup', methods=['POST'])
def signup():
    return create_account()

@app.route('/runscript', methods=['POST'])
def run_script():
    try:
        output = subprocess.run(['python', 'pc.py'], capture_output=True, text=True)
        return jsonify({"output": output.stdout}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)