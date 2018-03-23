from flask import Flask, request, jsonify
import random, json

app = Flask(__name__)

@app.route('/shoppingList', methods=['GET'])
def getListFromDB():
    #return result from file
    newFile = open('savedList.txt', 'r')
    # results = newFile.read(request.data())
    # return jsonify(results)
    if newFile.is_file():
        print("File is file")
        with open("savedList.txt", 'r') as file:
            lst = file.read()
        file.close()
        return jsonify(lst)
    console.log("File is not file")
    return "[]"

@app.route('/saveList', methods=['POST'])
def saveToDB(): #savedList
    print("In post method")
    jsondata = str(request.get_json())

    newFile = open('savedList.txt', 'w')
    newFile.write(jsondata)



    # with open("jsonStore.txt", 'w') as file:
    #     file.write(json.dumps(lst))
    return "" #jsonify(True)

if __name__ == "__main__":
    app.run(debug=True, port=5001)
