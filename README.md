# DexterBot
A fun live slack bot with many features, it's a very multifunctional bot with interactive commands for fun, try it out to dive deeper in a pool of blood.

[Try talking to Dexter.](https://slack.com/oauth/v2/authorize?client_id=2210535565.12222891519894&scope=chat:write.public,app_mentions:read,assistant:write,channels:history,chat:write,commands,groups:history,im:history,im:read,im:write,reactions:read,reactions:write,users:read&user_scope=search:read,channels:history,channels:read,groups:history,groups:read,im:history,mpim:history,users:read,search:read.public,search:read.private,search:read.mpim,search:read.im,search:read.files,search:read.users,chat:write,canvases:read,canvases:write,users:read.email)

<img width="384" height="82" alt="image" src="https://github.com/user-attachments/assets/9447a1e1-6208-4fbe-87fd-48137cd58dcc" />


## What is this about?

This is a slack bot built for the hack club slack workspace that let's you run lots of fun tools, api utilities, and simple automation commands directly inside slack. It started as a small experiment for stardance but grew into a larger system for exploring backend development, apis, and basic fundementalities.

## How does it work?

the bot is already installed in the hack club slack workspace.
to use it:
go to slack and run commands starting with /
it is recommended to message the bot directly.
example usage:
- /dexter-help
- /dexter-ping
- /dexter-ai how was your day?

Note: almost all commands require an input after the command, separated by a space.
setup (optional):

if you want to run your own version:


clone the repository:

git clone https://github.com/amateurtechguy/DexterBot/

cd https://github.com/amateurtechguy/DexterBot/

npm install

set environment variables (create a .env file):

OPENAI_TOKEN_KEY=your_token

SLACK_BOT_TOKEN=your_token

SLACK_APP_TOKEN=your_token

run the bot:

node index.js

## What I learned from this project: 

I learned a lot about what API's are and how they work, and most importantly I am starting to gain knowledge in python which I have been procrastinating for AGESSSS, and my second proudest part is the AI thing, it genuinely was so hard I have no experience with AIs but I feel very very impressed by my work because the hard work finally paid off!

## API and external tools:

-  /dexter-ping - Check bot latency
-  /dexter-catfact - Get a cat fact
-  /dexter-joke - Get a joke from dexter
-  /dexter-fact - Get a useless fact
-  /dexter-ai - Talk to the dexter AI (make sure to add your prompt after the command)
-  /dexter-hello - Say Hi to dexter

  ---
  ## Creator:
   made by: the amateur tech guy!!
  
