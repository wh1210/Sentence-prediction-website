from flask import Flask, request
from flask_restful import Resource, Api

from prediction_service_model import predict


app = Flask(__name__)
api = Api(app)


@app.route('/')
def get():
    return {
        "Test": "Test value"
    }

@app.route('/predict')
def predict_sentence():
    sentence1 = request.args.get('sentence1')
    sentence2 = request.args.get('sentence2')

    prediction, result = predict(sentence1, sentence2)

    return {
        "sentence1": sentence1,
        "sentence2": sentence2,
        "prediction": prediction,
        "result": result,
    }


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080, debug=True)
