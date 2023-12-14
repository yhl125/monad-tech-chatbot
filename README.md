To run the example locally you need to:

1. Sign up at [OpenAI's Developer Platform](https://platform.openai.com/signup)
2. Go to [OpenAI's dashboard](https://platform.openai.com/account/api-keys) and create an API KEY
3. Set the required OpenAI environment variable as the token value as shown [the example env file](./.env.local.example) but in a new file called `.env.local`
4. Run Chroma with Docker on your computer

```
git clone https://github.com/chroma-core/chroma.git
cd chroma
docker-compose up -d --build
```

5. `yarn` to install the required dependencies
6. `yarn dev` to launch the development server
7. POST http://localhost:3000/api/store-data to store the data in the local Chroma
8. start chatting with the bot at http://localhost:3000/
