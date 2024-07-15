from flask import Flask, redirect, url_for,request
from flask_cors import CORS
import sys



app = Flask(__name__)
CORS(app,  resources={"/*": {"origins": "*"}})


@app.route("/")
def status():
    return "<p>Ok!</p>"

@app.route("/search" , methods=["POST" ])
def search():
    prompt=request.get_json()
    print(prompt['Search'])

    return "Search Results for "+ prompt['Search']

if __name__=="__main__":
    app.run(debug=True,port=5000)