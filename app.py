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

@app.route('/pc_output', methods=['GET'])
def pc_output():
    try:
        # Execute pc.py and capture its output
        output = subprocess.check_output(['python', 'pc.py']).decode('utf-8')
        # Split the output into lines
        output_lines = output.split('\n')
        # Remove empty lines
        output_lines = [line.strip() for line in output_lines if line.strip()]
        return jsonify({'output': output_lines})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)