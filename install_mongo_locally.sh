
#this installs and runs mongodb locally for ubuntu 20.04
wget https://www.mongodb.org/static/pgp/server-4.4.asc -O- | sudo apt-key add -

echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/4.4 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.4.list

sudo apt update -y
sudo apt install mongodb-org-server -y

sudo systemctl start mongod
systemctl status mongod

#run before npm start
#sudo service mongod start

#run when you close open-backend
#sudo service mongod stop
