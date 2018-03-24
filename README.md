# TRANSPORTASYON SMS API

![MacDown logo](https://i.pinimg.com/originals/8e/81/83/8e8183f0d6bf54f52ae66431221d15d2.png)

## Before anything else

Create a directory named `lib/` thats all thanks.

## Compiling

- `npm run build`

Compile the entire `src/` directory and output it to the `lib/` directory using `babel` **(ES6)**. This doesn’t overwrite any other files or directories in `lib/`.

- `npm run flowcheck`

Compile the entire `lib/` directory for **(ES6)** checking.

- `npm run compile`

Executing both `build` and `flowcheck`. This will take some time.

## Running

- `npm start`

This command will `build` and `run` the api.

- `node lib/main.js`

This command will `run` the api.