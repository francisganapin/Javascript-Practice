def count_words():
    input_str = "dog cat dog bird cat dog"
    words = input_str.split(" ")
    
    word_counts = {}

    for word in words:
        if word in word_counts:
            word_counts[word] += 1
        else:
            word_counts[word] = 1

    print(word_counts)

if __name__ == "__main__":
    count_words()