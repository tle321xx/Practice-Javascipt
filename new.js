// const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class game {
  constructor(mymap) {
    this.mymap = mymap
  }
  printMap() {
    // console.log(this.mymap.join('\n'))
      const newmap = this.mymap.map((row) =>{
        return row.join('')
      })
    console.log(newmap.join('\n'))
  }
}

function generateMap(rows, cols) {
  const map = []
  for(let i = 0; i<rows; i++) {
    const row = [];
    for(let j = 0; j<cols; j++) {
      map.push('*')
    }
    map.push(row);
  }
  return map
}



const mymap = [['*', 'o', 'o'], ['░', '░', '^'], ['░', 'o', '░'], ['░', 'o', '░'], ['░', 'o', '░'], ['░', 'o', '░']]
const newgame = new game(mymap)
newgame.printMap()
const map =  generateMap(5,4)