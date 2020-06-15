# How to run
1.- build image
```
docker build -t demo01:v1.0.0 .
```
2.- run image
```
docker run --rm --name demo01 -e PORT=4040 -p 4040:4040  demo01:v1.0.0
```
