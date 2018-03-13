from flask import Flask, Response
import random, json

app = Flask(__name__)

#Decorator: decorating function with app.route; takes other funcs as param
#and wraps it up (will call getnum if the url matches /getnum
@app.route('/getnum')
def getnum(): #this function can be anyname; does not have to match URL
	#json.dumps is the python equivalent to stringify
	res = Response(json.dumps({'number':random.randrange(100)}))
	res.headers['Access-Control-Allow-Origin'] = '*'
	res.headers['Content-type'] = 'application/json'
	return res

@app.route('/hello')
def hello():
	return "<h1>Hello World</h1>"

app.run(debug=True, port=8000) #original port: 5001
