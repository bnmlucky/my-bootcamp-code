# Install Mongo

## Install with Homebrew

### [Homebrew: The missing package manager for macOS](https://brew.sh/)

- Check if homebrew is installed: `brew`

  - If not, install [Homebrew](https://brew.sh/) by following the instructions on the web page
  - If brew is already installed `brew upgrade`.

- **Install Mongodb on Mac OS X:** `brew install mongodb`

## Set data location

In terminal, create data directories (at the root level)

- `sudo mkdir /data`
- `sudo mkdir /data/db`

- Next, set root permissions

  - `sudo chmod -R 777 /data`

- Run `mongodb` in the background

  - `brew services start mongodb`

## Open and close mongo

- Type `mongo`
  - You should see some text that says something like: `MongoDB shell version v4.0.3 connecting to: mongodb://127.0.0.1:27017`
- To quit `mongo`, hit `control+c`

Finished!

## Errors

If at some point you get an error with `mongod`:

1. `ps -A | grep mongod`
1. find the line that just mentions `mongod`, but not `grep`
1. take note of the number on the left
1. type `kill 1774` or whatever that number is. Try `mongod` again.
1. If that doesn't work, go to `/data/db` and `rm mongod.lock`. Try `mongod` again.

## Down the Rabbit Hole: Hungry for More

[Understanding Permissions](https://www.elated.com/articles/understanding-permissions/)
