# Week 1 — App Containerization

FROM python:3.10-slim-buster

WORKDIR /backend-flask

COPY requirements.txt requirements.txt

RUN pip3 install -r requirements.txt

COPY . .

ENV FLASK_ENV=development

EXPOSE ${PORT}

CMD [ "python3","-m","flask","run","--host=0.0.0.0","--port=4567" ]


### Run this locally

cd backend-flask
export FRONTEND_URL="*"
export BACKEND_URL="*"
python3 -m flask run --host=0.0.0.0 --port=4567
cd ..

### Build dockerfile
docker built -t backend-flask ./backend

### Run Docker image

docker run --rm -p 4567:4567 -it backend-flask

To set some env variables within the container terminal do this :

docker run --rm -p 4567:4567 -it -e FRONTEND_URL='*' -e BACKEND_URL='*' backend-flask




