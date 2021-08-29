import _ from 'lodash';

export function saveExtractionHelper (data) {
    const flattened = _.flatten(data);
    // console.log(flattened);

    const toReturn = [];

    flattened.forEach((node) => {
        toReturn.push(node.color);
    });

    return toReturn;
}


// function that generates the node element of the drawing board
export function transformServerData (columnLength, rowLength, data) {
    const toReturn = [];
    let index = 0;

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
            const toPush = {
                color: data[index],
                name: `${ hi }|${ jay }`
            };

            index++
            row.push(toPush);
        }

        toReturn.push(row);
    }

    return toReturn;
}

