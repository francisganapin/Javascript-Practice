i = 0

while i < 11:
    if i == 3:
        i += 1
        continue
    print(i)
    i += 1



for i in range(11):
    if i ==3:
        continue
    print(i)


word = 'Python'

for letter in word:
    if letter in 'aeiou':
        continue
    print(letter)