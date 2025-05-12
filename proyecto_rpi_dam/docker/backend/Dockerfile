FROM python:3.11-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

#Instalar dependencias
RUN apt-get update && apt-get install -y \
	gcc \
	libmariadb-dev \
	pkg-config \
	&& rm -rf /var/lib/apt/lists/*
	
WORKDIR /app

COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY backend/ .

CMD ["gunicorn", "proyecto.wsgi:application", "--bind", "0.0.0.0:8000"]
