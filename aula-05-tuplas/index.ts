// possui um quantidade específica de valores
let coordinates: [number, number, string, boolean]
coordinates = [2, 5, 'Work', false]

// desestruturando tupla
let  [x, y] = coordinates
let  [ local, exists ] = coordinates

console.log( `Your ${local} at localized at the coordinates X:${x}, Y:${y}. Exists: ${exists}` )