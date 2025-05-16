arr = [1,2,3,4]
even = list(filter(lambda x: x % 2 == 0,arr))
even = [x for x in arr if x % 2 == 0 ]

print(even)