
const tiles = [];

const grid = [];

const DIM = 2;

function preload() {
    tiles[0] = loadImage('tiles/demo/blank.png');
    tiles[1] = loadImage('tiles/demo/up.png');
    tiles[2] = loadImage('tiles/demo/right.png');
    tiles[3] = loadImage('tiles/demo/down.png');
    tiles[4] = loadImage('tiles/demo/left.png');
}

function setup() {
    createCanvas(400, 400);

    for (let i = 0; i < DIM; i++) {
        grid[i] = [];
        for (let j = 0; j < DIM; j++) {
            grid[i][j] = 0;
        }
    }
}

function draw() {
    background(0);

    for (let i = 0; i < tiles.length; i++) {
        image(tiles[i], i * 100, 0);
    }
}