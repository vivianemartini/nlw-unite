# NLW Unite: pass.in frontend

Event attendee management platform.

The tool allows the organizer to register an event and open a public registration page.

# Preview

![preview.png](https://github.com/vivianemartini/nlw-unite/blob/main/src/assets/preview.png)

![passingif](https://github.com/vivianemartini/nlw-unite/assets/70038975/a149a579-8530-4caa-921c-e8ddce683b6a)


# 🛠️ Tech 

- Vite
- TypeScript
- Tailwind
- Lucide icons

# 📚 Libs 

- Tailwind-merge
- FakerJS
- DayJS

# 🚀 Features

- Integrate with API in Node.js
- Search by attendee
- Pagination
- Set URL statements with query params


# 👷 Run locally

Clone repo

```
git clone git@github.com:vivianemartini/nlw-unite.git
```
Install dependencies

```
npm i
```
Start development server

```
npm run dev
```

# Configure back-end

Backend used from [RocketNodeJs](https://github.com/rocketseat-education/nlw-unite-nodejs)


**You need to install [Node.js](https://nodejs.org/en/download/) and then, to clone the project via HTTPS, run this command:**

```
git clone https://github.com/rocketseat-education/nlw-unite-nodejs.git
```

SSH URLs provide access to a Git repository via SSH, a secure protocol. If you have a SSH key registered in your Github account, clone the project using this command:

```
git clone git@github.com:rocketseat-education/nlw-unite-nodejs.git
```


**Install dependencies**

```
npm i
```

**Create the .env file with the following content**
```env
DATABASE_URL="file:./dev.db"
```

**Populate the database with the command**
```bash
npx prisma db seed
```

**Start development server**
```bash
npm run dev
```


📕 License

Released in 2024 This project is under the MIT license.
