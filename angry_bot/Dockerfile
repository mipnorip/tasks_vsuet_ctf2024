FROM python:3.11.8-bookworm

# Modifate linux
RUN apt update -y && apt upgrade -y && apt-get install -y iputils-ping

# Install bot
WORKDIR /app
COPY ./requirements.txt .
RUN pip install -r ./requirements.txt --no-cache-dir
COPY flag.txt .
COPY main.py .
RUN chmod +x ./main.py
RUN ping -c 4 ya.ru

CMD ["./main.py"]