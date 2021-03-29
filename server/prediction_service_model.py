# This file is used to load model, and doing predictions.
from simpletransformers.classification import (
    ClassificationModel, ClassificationArgs
)
import pandas as pd

def predict(sentence1, sentence2):
    model = ClassificationModel('roberta', './models', use_cuda=False)

    prediction, raw_output = model.predict(
        [
            [
                sentence1,
                sentence2,
            ]
        ]
    )

    prediction = float(prediction)
    result = round(prediction)

    return (prediction, result)
