## Start Development Server for Frontend 
```
cd client 
npm i
npm run dev
```

## Start Development Server for Backend 
- in new terminal 
```
cd server
pip install -r requirements.txt
python manage.py runserver
```

To upadate data base migration
```
python manage.py makemigrations 
python manage.py migrate
```

To create admin user
```
python manage.py createsuperuser
```




## To activate virtual environment
for mac
```
source .venv/bin/activate
```