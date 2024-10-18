from flask import Flask, jsonify

app = Flask(__name__)

# Diccionario simulando la base de datos
people_db = [
    {"name": "John", "surname": "Doe"},
    {"name": "Jane", "surname": "Smith"},
    {"name": "Alice", "surname": "Johnson"}
]

@app.route('/people', methods=['GET'])
def get_people():
    return jsonify(people_db)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
