from flask import Flask, Response
import random, json

app = Flask(__name__)

@app.route('/getnum')
def anyname():
    res = Response(json.dumps({'number':random.randrange(100)}))
    res.headers['Access-Control-Allow-Origin'] = '*'
    res.headers['Content-type'] = 'application/json'
    return res

app.run(debug=True, port=5001)
