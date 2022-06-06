def translate(word_or_phrase):
  vowels = ['a', 'e', 'i', 'o', 'u']
  pig_latin = []

  split_words = word_or_phrase.split(' ')
  count = 0
  for i in range(0, len(split_words)):
    for j in range(0, len(split_words[i])):
      if split_words[i][j] not in vowels:
        if split_words[i][j] == 'q' and split_words[i][j+1] == 'u':
          split_words[i] += (split_words[i][j] + split_words[i][j+1])
          count+=2
        else:
          split_words[i] += split_words[i][j]
          count+=1
      else:
        break
    
    temp = split_words[i][count:] + 'ay'
    pig_latin.append(temp)
    count = 0

  return " ".join(pig_latin)