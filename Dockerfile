# Etapa 1: Construção do aplicativo
FROM node:20-alpine AS BUILDER

# Define o diretório de trabalho
WORKDIR /app

# Copia o package.json e o package-lock.json para o contêiner
COPY package*.json ./

# Instala todas as dependências (produção e desenvolvimento)
RUN npm install

# Copia o restante dos arquivos do aplicativo
COPY . .

# Cria a build do aplicativo
RUN npm run build

# Etapa 2: Servir o aplicativo com Nginx
FROM nginx:alpine AS PRODUCTION

# Copia os arquivos de build para o diretório do Nginx
COPY --from=BUILDER /app/dist /usr/share/nginx/html

# Expõe a porta que o Nginx vai rodar
EXPOSE 80

# Comando para iniciar o Nginx
CMD ["nginx", "-g", "daemon off;"]
