# Oh boi - Frontend

The frontend side of a Jamstack sample project built on Express, Nuxt and Docker. Frontend and [backend][1] are powered by Firebase Hosting, Google Cloud Build and Cloud Run.

As a user you can:

- Sign up.
- Authenticate with email and password.
- Authenticate with your Google account.
- CRUD story entries.


## Setting Up

Once you have the backend running:

```bash
# 1. Download this repo.
git clone https://github.com/luvejo/ohboi-frontend

# 2. Install it.
cd ohboi-frontend && npm install
```

Rename `.env.example` as `.env` and customize it. Then just:

```bash
npm run dev
```

Happy hacking!

## Demo

At ohboi.luvejo.me.

## License

This project is licensed under the MIT License. See the LICENSE file for details.


[1]: https://github.com/luvejo/ohboi-backend
