# Usa una imagen base de Node.js
FROM node:21

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia los archivos package*.json al directorio de trabajo
COPY package*.json ./

# Instala las dependencias del proyecto
RUN npm install

# Copia todos los archivos del proyecto al directorio de trabajo
COPY . .

# Expone el puerto en el que la aplicación se ejecutará
EXPOSE 4000

# Comando para iniciar la aplicación
CMD ["npm", "start"]
