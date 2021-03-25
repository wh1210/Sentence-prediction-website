from simpletransformers.classification import (
    ClassificationModel, ClassificationArgs
)
import pandas as pd


eval_df = pd.read_csv('twitter_data/dev_final.tsv', sep='\t', error_bad_lines=False)
eval_df = eval_df.rename(columns={'sentence1': 'text_a', 'sentence2': 'text_b', 'score': 'labels'}).dropna()

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