from simpletransformers.classification import (
    ClassificationModel, ClassificationArgs
)
import pandas as pd


model = ClassificationModel('roberta', './models')

predictions, raw_outputs = model.predict(
    [
        [
            "[NUM] rescued from rip currents in North Cornwall this week . [AT] & [AT] teach kids about dangers [URL] [HASHTAG]",
            "VIDEO : Watch BBC report about [AT] & [AT] new Swim safe scheme at Bude ( starts at [NUM] into interview ): [URL]",
        ]
    ]
)

print(predictions)
print(raw_outputs)
