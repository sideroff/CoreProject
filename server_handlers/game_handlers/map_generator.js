module.exports = (io) => {
  io.map = []
  for (let row = 100; row < 600; row += 100) {
    for (let col = 100; col < 1200; col += 100) {
      let chance = Math.floor(Math.random() * 6) + 1
      if (chance === 1) {
        // Vertical down
        let line = {x1: col, y1: row, x2: col, y2: row + 105, vertical: true}
        io.map.push(line)
      } else if (chance === 2) {
        // Vertical up
        let line = {x1: col, y1: row, x2: col, y2: row - 100, vertical: true}
        io.map.push(line)
      } else if (chance === 3) {
        // Horizontal right
        let line = {x1: col, y1: row, x2: col + 105, y2: row, vertical: false}
        io.map.push(line)
      } else if (chance === 4) {
        // Horizontal left
        let line = { x1: col, y1: row, x2: col - 100, y2: row, vertical: false}
        io.map.push(line)
      }
    }
  }
}
