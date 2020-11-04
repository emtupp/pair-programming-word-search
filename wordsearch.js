const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    // const diagonalJoin = y // whatever matrix function returns, but joined

    for (l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    let newArr = [];
    for (let k = 0; k < letters[0].length; k++) {
      newArr.push([]);
    }
    for(let i = 0; i < letters.length; i++) { 
      for(let j = 0; j < letters[i].length; j++) {
        newArr[j].push(letters[i][j]);
      }
    }
    const verticalJoin = newArr.map(ls => ls.join(''));
    for (l of verticalJoin) {
        if (l.includes(word)) return true;
    }

// DiagonalArr [] ==> *letters.length* + letters[0].length

    let diagonalArr = [];

    for (let i = 0; i < letters.length; i++) {
        diagonalArr.push([]);
    }

    for (let k = 0; k < letters[0].length; k++) {
        diagonalArr.push([]);
      }

    console.log(diagonalArr);
    console.log(diagonalArr.length);

    for(let i = 0; i < letters.length; i++) { 
        for(let j = 0; j < letters[i].length; j++) {
          diagonalArr[i].push(letters[j][j]);
          // j++;
          // diagonalArr[i].push(letters[i + 1][i + 1]);
          j++;
        }
        
      }
      console.log(diagonalArr);

    return false;
}

module.exports = wordSearch;

// 0[0,0; 0,1; 0,2; 0,3]
// 1[1,0; 1,1; 1,2; 1,3]
// 2[2,0; 2,1; 2,2; 2,3]
// 3[3,0; 3,1; 3,2; 3,3]

// 0[0,0; 1,1; 2,2; 3,3] i++ j++
// 1[0,1; 1,2; 2,3]      i++ (j+1)++
// 2[0,2; 1,3]           i++ (j+2)++
// 3[0,3]                i++ (j+3)++
// 4[3,0]                j++ (i+1)++ 
// 5[2,0; 3,1]           j++ (i+2)++ 
// 6[1,0; 2,1; 3,2]      j++ (i+3)++ 