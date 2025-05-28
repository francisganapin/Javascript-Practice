import heapq

task = []
heapq.heappush(task,(2,'Send email'))
heapq.heappush(task,(1,'Urgent bug fix'))
heapq.heappush(task,(3,'Generate report'))

print(heapq.heappop(task))