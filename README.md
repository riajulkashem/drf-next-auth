# DRF Next Auth

## Overview
This project is an authentication example project implemented backend with Django and frontend with NextJs (ReactJs).

### Installation
To install this project, clone the repository and run the following commands:

```
git clone https://github.com/RiajulKashem/drf-next-auth.git
cd drf-next-auth
npm install
```
### Running the project
To run the project, first start the Django backend:

```
cd backend
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
python manage.py runserver
```
Then, start the Next.js frontend:
```
cd frontend
npm install
npm run dev
```
This will start the Next.js development server on port 3000. You can then open your browser and navigate to http://localhost:3000 to view the application.

Authentication
Create a new user by navigating to http://localhost:3000/register. You can then log in by navigating to http://localhost:3000/login.

### Features
The application currently supports the following features:

- [x] User Login
- [x] User Registration
- [ ] Password Reset


### Future work
The following features are planned for future work:
- [ ] Email verification
- [ ] Social login
- [ ] Two-factor authentication

### Contributing
Contributions to this project are welcome. If you have any suggestions or bug reports, please feel free to create an issue on GitHub.
