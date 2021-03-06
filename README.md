# MetricStream FileUpload

## Project setup

1. Clone the repo
```
git clone https://github.com/jayvenk/FileUpload.git
```

2. cd into the project folder
```
cd FileUpload
```

3. Install the dependencies
```
npm install
```

4. Start the http-server
```
npm start
```

Go to your browser and paste http://127.0.0.1:8081/ to view the project.

## Debug

If you get `Permission denied` error when you run `npm start`
1. Delete the node_modules
```
rm -rf node_modules
```
2. Delete the package.json lock file
```
rm package-lock.json
```
3. Clear npm cache
```
npm cache clean --force
```
4. Install the dependencies
```
npm install
```
5. Now start the server
```
npm start
```

## Pull the changes from main before making any changes
1. `git pull`

## Commit changes to git
1. Check the files modified -  `git status`
2. Stage all the changes - `git add .`
3. Commit the changes with a commit message - `git commit -m "commit-msg" `
4. Push the changes - `git push`
