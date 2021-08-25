
// function that generates the node element of the drawing board
function generate (columnLength, rowLength, color) {
    const toReturn = [];

    for(let i = 0; i < columnLength; i++) {
        const row = [];

        // generate each row of the nodes
        for (let j = 0; j < rowLength; j++) {
            // turn the [i, j] value to string
            let hi = "" + i;
            let jay = "" + j;

            // padstart each i items to have a length of 2 by force
            if (hi.length < 2) {
                hi = "0" + i
            }

            // padstart each j items to have a length of 2 by force
            if (jay.length < 2) {
                jay = "0" + j;
            }

            // creation of each node
            const element = { name: `${ hi }|${ jay }`, color: color }
            row.push(element);
        }

        toReturn.push(row);
    }

    return toReturn;
}

export default generate;