import heapq

price = [120,90,300,200,400,50]
top_3 = heapq.nlargest(3,price)
print(top_3)