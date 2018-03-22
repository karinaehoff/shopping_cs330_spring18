from flask import Flask, request, jsonify
import random, json

app = Flask(__name__)

@app.route('/shoppingList', methods=['GET'])
def getListFromDB():
    #return result from file
    newFile = open('savedList.txt', 'r')
    results = newFile.read(request.data())
    return jsonify(results)

@app.route('/saveList', methods=['POST'])
def saveToDB(savedList):
    newFile = open('savedList.txt', 'w')
    newFile.write(savedList)
    return jsonify(true)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
