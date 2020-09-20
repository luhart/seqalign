# seq-align
deployed on (vercel)[https://seqalign.vercel.app/]


## tech stack

### backend

- django
- celery

### frontend

- react
- nextjs

### workflow

- docker
sudo docker build -t l/seq-align-frontend .
sudo docker run -d -p 3333:3000 l/seq-align-frontend:latest


The frontent utilizes docker's multi-stage build feature to keep the image size smaller. This requires Docker version 17.05 or higher for both the daemon and client.

didn't have time to setup proper eslint react+nextjs linting. 



## improvements if I had more time
- eslint
- hosting on my own vps or s3
- formik instead of react-bootstrap forms
- user registration/login + db
