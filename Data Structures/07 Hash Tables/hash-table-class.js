class HashTable {
    constructor(size = 53) {
        this.keyMap = new Array(size);
    }

    _hash(key) {
        let total = 0;
        let WEIRD_PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            let char = key[i];
            let value = char.charCodeAt(0) - 96
            total = (total * WEIRD_PRIME + value) % this.keyMap.length;
        }
        return total;
    }

    set(key, value) {
        const hashed = this._hash(key)
        if (!this.keyMap[hashed]) {
            this.keyMap[hashed] = []
        }
        this.keyMap[hashed].push([key, value])
    }

    get(key) {
        const hashed = this._hash(key)
        if (this.keyMap[hashed]) {
            for (let i = 0; i < this.keyMap[hashed].length; i++) {
                if (this.keyMap[hashed][i][0] === key) {
                    return this.keyMap[hashed][i][1]
                }
            }
        }

        return undefined
    }

    values() {
        let valuesArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!valuesArr.includes(this.keyMap[i][j][1])) {
                        valuesArr.push(this.keyMap[i][j][1])
                    }
                }
            }
        }
        return valuesArr
    }

    keyes() {
        let keysArr = []
        for (let i = 0; i < this.keyMap.length; i++) {
            if (this.keyMap[i]) {
                for (let j = 0; j < this.keyMap[i].length; j++) {
                    if (!keysArr.includes(this.keyMap[i][j][0])) {
                        keysArr.push(this.keyMap[i][j][0])
                    }
                }
            }
        }
        return keysArr
    }
}

const table = new HashTable()
table.set("maroon", "#800000")
table.set("yellow", "#FFFF00")
table.set("olive", "#808000")
table.set("salmon", "#FA8072")
table.set("lightcoral", "#F08080")
table.set("mediumvioletred", "#C71585")
table.set("plum", "#DDA0DD")
table.set("purple", "#DDA0DD")
table.set("violet", "#DDA0DD")
console.log(table.get('yellow'))
console.log(table)
console.log(table.values())
console.log(table.keyes())