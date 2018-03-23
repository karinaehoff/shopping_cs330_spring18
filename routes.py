from flask import Flask, request, jsonify
import random, json

app = Flask(__name__)

@app.route('/shoppingList', methods=['GET'])
def getListFromDB():
    newFile = open('savedList.txt', 'r')
    savedFile = newFile.read()
    # if newFile.is_file():
    #     # lst = file.read()
    #     with open("savedList.txt", 'r') as file:
    #     #     #request.data() ?
    #         lst = file.read()
    #         file.close()
    #         return jsonify(lst)
    return jsonify(savedFile)

@app.route('/saveList', methods=['POST'])
def saveToDB(): #savedList
    jsondata = str(request.get_json())
    jsondata = jsondata.replace("'", "\"")


    newFile = open('savedList.txt', 'w')
    newFile.write(jsondata)

    return jsonify(True)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
