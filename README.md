# Sentence predicetion website
## Description:
This is a project to deploy a machine learning model on an interative website. We decide to use twitter's topic and author controlled dataset to train a language model based on Roberta as the pre-trained part. After training, we will deploy on the cloud computing platform. And then, using flask to communicate with the front-end and get user's input to compute the probabilities of distribution. Finally, fetch the result back to the front-end. 
## Training environment: 
  * Platform: matpool.com
  * GPU: RTX 3090 (24GB) 
  * Memory: 64 GB
  * SSD: 300 GB
  * Python 3.8
  * CUDA 11.0
  * cuDNN 8.0
  * Ubuntu 18.04
## Parameter and training time:
  * 'max_seq_length': 512,
  * 'num_train_epochs': 15,
  * 'evaluate_during_training_steps': 50,
  * 'wandb_project': 'sts-b-medium',
  * 'train_batch_size': 32
The training time is around 2 hours in this setting.
## Training frameworks or packages:
  * PyTorch 1.7.1
  * simpletransformers (include many other packages) 

To install the package:
  ```python
pip install (package name)
```
Here is the [link](https://drive.google.com/drive/folders/1gdVBBmWJr41aL_okI8I84gRZSzfr3e89?usp=sharing) of model we trained based on Roberta. And if you want to use your data to train, replace the data path with yours in train.py and predict.py. 
  
  
