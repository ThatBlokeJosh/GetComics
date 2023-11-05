# GetComics
Simple GetComics selfhosted server downloader interface.

# To run
```
go build
docker build -t comics
docker run -d --restart=unless-stopped -p 3137:3137 -it -v <path to files>:/app/files --name comics comics
```
