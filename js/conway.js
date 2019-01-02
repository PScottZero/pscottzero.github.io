// class that represents conway's game of life
class Conway {

    // class constructor
    constructor() {
        this.c = 80; // column count
        this.r = this.c / 4; // row count
        this.size = Math.ceil(screen.width / this.c); // cell size

        // initializes canvas with random cells
        this.cells = Array(this.r * this.c);
        for (let i = 0; i < this.cells.length; i++) {
            let rand = Math.floor(Math.random() * 10);
            if (rand < 2) this.cells[i] = 1;
            else this.cells[i] = 0;
        }

        // temporary array used for calculating next generation
        this.nextCells = Array(this.r * this.c).fill(0);
    }

    // progress to next cell generation
    step() {
        for (let a = 0; a < this.cells.length; a++) {
            let r = Math.floor(a / this.c);
            let c = a % this.c;
            let count = 0;

            // get count of live cells surrounding cell
            for (let i = r - 1; i < r + 2; i++) {
                for (let j = c - 1; j < c + 2; j++) {
                    if (!(i === r && j === c)
                        && i >= 0 && i < this.r
                        && j >= 0 && j < this.c) {
                        if (this.cells[this.c * i + j] === 1) count++;
                    }
                }
            }

            // conway rules
            if (count > 3 || count < 2) this.nextCells[a] = 0; // cell dies if surrounded by more than 3 or less than 2
            else if (count === 3 && this.cells[a] === 0) this.nextCells[a] = 1; // cell is born if surrounded by 3
            else this.nextCells[a] = this.cells[a]; // cell lives on to the next generation
        }
        this.copy();
        this.draw();
    }

    // draw cell canvas
    draw() {
        let canvas = document.getElementById("conway");
        let ctx = canvas.getContext("2d");

        // cell color
        let cellGrad = ctx.createLinearGradient(0, 0, screen.width / 2, 0);
        cellGrad.addColorStop(0, "#3d7dff");
        cellGrad.addColorStop(1, "#6de8ff");

        // background color
        let backGrad = ctx.createLinearGradient(0, 0, screen.width / 2, 0);
        backGrad.addColorStop(0, "#216aff");
        backGrad.addColorStop(1, "#2dc7ff");

        ctx.beginPath();
        for (let i = 0; i < this.cells.length; i++) {
            if (this.cells[i] === 1) ctx.fillStyle = cellGrad; // dead cells color
            else ctx.fillStyle = backGrad; // living cells color
            ctx.fillRect((i % this.c) * this.size, Math.floor(i / this.c) * this.size, this.size, this.size);
        }
    }

    // copy temporary cell array into current array
    copy() {
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i] = this.nextCells[i];
        }
    }
}