SETTING UP MONGODB:

$ brew install mongodb

if mongodb is installed use:

$ brew update mongodb

CONNECTING YOUR LOCAL DIRECTLY TO THE DB:
$ cd ~
$ mkdir -p /data/db
$ sudo chown -R `id -un` /data/db

$ mongo 

Yay! You're up and running, now to connect to our Ofo db...

$ quit()
^^ will quit your unauthorized connection
$ mongo ds143191.mlab.com:43191/ofo -u catchdev -p CaughtM3
^^ will log you in to our db

