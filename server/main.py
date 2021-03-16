from flask import Flask
from flask_restful import Resource, Api

app = Flask(__name__)
api = Api(app)

class Quotes(Resource):
    def get(self):
        return {
            "Test": "Test value"
        }

api.add_resource(Quotes, '/')

if __name__ == '__main__':
    app.run(debug=True)