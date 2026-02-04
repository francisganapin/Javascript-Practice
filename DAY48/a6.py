import random


def simulate_event(probability):
    return random.random() < probability


if simulate_event(0.7):
    print("It rains.")
else:
    print("It does not rain.")


options = ['Red','Green','Blue']
weight = [10,10,80]


for i in range(1,10):
    chose = random.choices(options,weights=weight, k=1)[0]
    print(f"Chose color:{chose}")