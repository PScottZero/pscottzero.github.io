class Conway {

    constructor() {
        this.c = 120;
        this.r = this.c / 6;
        this.size = 16;

        this.cells = Array(this.r * this.c);
        for (let i = 0; i < this.cells.length; i++) {
            let rand = Math.floor(Math.random() * 10);
            if (rand < 2) this.cells[i] = 1;
            else this.cells[i] = 0;
        }
        this.nextCells = Array(this.r * this.c).fill(0);
    }

    step() {
        for (let a = 0; a < this.cells.length; a++) {
            let r = Math.floor(a / this.c);
            let c = a % this.c;
            let count = 0;

            for (let i = r - 1; i < r + 2; i++) {
                for (let j = c - 1; j < c + 2; j++) {
                    if (!(i === r && j === c)
                        && i >= 0 && i < this.r
                        && j >= 0 && j < this.c) {
                        if (this.cells[this.c * i + j] === 1) count++;
                    }
                }
            }

            if (count > 3 || count < 2) this.nextCells[a] = 0;
            else if (count === 3 && this.cells[a] === 0) this.nextCells[a] = 1;
            else this.nextCells[a] = this.cells[a];
        }
        this.copy();
        this.draw();
    }

    draw() {
        let canvas = document.getElementById("conway");
        let ctx = canvas.getContext("2d");
        ctx.beginPath();
        for (let i = 0; i < this.cells.length; i++) {
            if (this.cells[i] === 1) ctx.fillStyle = "#267ca0";
            else ctx.fillStyle = "#25a7ce";
            ctx.fillRect((i % this.c) * this.size, Math.floor(i / this.c) * this.size, this.size, this.size);
        }
    }

    copy() {
        for (let i = 0; i < this.cells.length; i++) {
            this.cells[i] = this.nextCells[i];
        }
    }
}