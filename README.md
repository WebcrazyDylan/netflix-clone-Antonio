# Full-Stack Netflix Clone with React, NextJS, TypeScript, TailwindCSS & Prisma

This is a repository for a FullStack Netflix Clone tutorial using React, NextJS, TailwindCSS & Prisma.

Features:

- Environment, Typescript, NextJS Setup
- MongoDB & Prisma connect, Database creation
- Authentication with NextAuth, Google & Github Login
- Full responsiveness on all pages
- Cookie based authentication
- API and Controllers creation
- Detail-oriented effects and animations using TailwindCSS
- React SWR data fetching
- Zustand state management

### Prerequisites

**Node version 14.x**

### Clone this repository

```shell
git clone https://github.com/nayak-nirmalya/netflix-clone
```

### Install packages

```shell
npm i
```

### Setup .env file as shown in /.env.example

```js
DATABASE_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
GITHUB_ID=
GITHUB_SECRET=
NEXTAUTH_JWT_SECRET=
NEXTAUTH_SECRET=
```

### Start the app

```shell
npm run dev
```

## Available commands

Run Prisma Studio

```shell
npx prisma studio
```

Running commands with npm `npm run [command]`

| command | description                              |
| :------ | :--------------------------------------- |
| `dev`   | Starts a development instance of the app |
| `build` | Build instance of the app                |
| `start` | Run Build instance of the app            |
