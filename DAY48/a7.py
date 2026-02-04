import numpy as np

sample = np.random.normal(0,1,10000)

count = np.sum(sample > 2)
probability_observed = count / 10000

print(f"Observed probability: {probability_observed}")