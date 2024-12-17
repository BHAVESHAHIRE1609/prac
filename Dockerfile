from 172.18.5.63:5000/node
workdir /src
copy . .
run npm install
expose 4000
cmd npm start