from simpletransformers.classification import (
    ClassificationModel, ClassificationArgs
)
import pandas as pd
from scipy.stats import pearsonr, spearmanr

train_df = pd.read_csv('data/train_final.tsv', sep='\t', error_bad_lines=False)
eval_df = pd.read_csv('data/dev_final.tsv', sep='\t', error_bad_lines=False)

train_df = train_df.rename(columns={'sentence1': 'text_a', 'sentence2': 'text_b', 'score': 'labels'}).dropna()
eval_df = eval_df.rename(columns={'sentence1': 'text_a', 'sentence2': 'text_b', 'score': 'labels'}).dropna()


train_args = {
    'reprocess_input_data': True,
    'overwrite_output_dir': True,
    'evaluate_during_training': True,
    'max_seq_length': 512,
    'num_train_epochs': 15,
    'evaluate_during_training_steps': 50,
    'wandb_project': 'sts-b-medium',
    'train_batch_size': 32,

    'regression': True,
}

model = ClassificationModel('roberta', 'roberta-base', num_labels=1, args=train_args)
def pearson_corr(preds, labels):
    return pearsonr(preds, labels)[0]


def spearman_corr(preds, labels):
    return spearmanr(preds, labels)[0]

model.train_model(train_df, eval_df=eval_df, pearson_corr=pearson_corr, spearman_corr=spearman_corr)
result, model_outputs, wrong_predictions = model.eval_model(
    eval_df
)
