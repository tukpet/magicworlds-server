#  Magic World game's server

## Installation
 
1. Install [node](https://nodejs.org):
 
    ```bash
    brew install node
    ```
 
2. Install dependencies:
 
    ```bash
    npm install
    ```
 
3. Add magicworlds.org entry to `/etc/hosts`:
 
    ```bash
    sudo sh -c "echo '127.0.0.1 local.magicworlds.org' >> /etc/hosts"
    ```

 ## Running

 1. Start watching the source code changes:

    ```bash
    npm run server
    ```

2. Project should now be running at [http://local.magicworlds.org:60606](http://local.magicworlds.org:60606)

    E.g. `/ping` responds from http://local.magicworlds.org:60606/ping](http://local.magicworlds.org:60606/ping)
 