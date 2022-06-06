exports.translate = function(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u']
    pigLatin = []

    splitWords = word.split(' ');
    count = 0
    for(i=0; i<splitWords.length; i++) {
        for(j=0; j<splitWords[i].length; j++) {
            if(vowels.includes(splitWords[i][j]) == false) {
                if(splitWords[i][j] == 'q' && splitWords[i][j+1] == 'u') {
                    splitWords[i] += (splitWords[i][j] + splitWords[i][j+1])
                    count+=2
                } else {
                    splitWords[i] += splitWords[i][j];
                    count++
                }
            } else {
                break;
            }
        }
        
        temp = splitWords[i].substring(count) + 'ay'
        pigLatin.push(temp)
        count = 0
    }
    return pigLatin.join(' ')
};

// console.log(exports.translate('quiet'))