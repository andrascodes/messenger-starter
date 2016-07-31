# messenger-starter

1. Create own repository for project.
2. Clone that repo to your computer.
3. Download this repo in ZIP.
4. Copy the contents to your own project repo. Except for: .gitignore, LICENSE, README.md
5. npm init
6. Create a .env file for the settings of the Messenger Bot.
7. Set the subdomain for the localtunnel in scripts/tunnel.sh
8. Start server with command: "nf start -j Procfiledev"
9. Add these to .gitignore:
```
# Environment variables
.env

# Mac file
.DS_Store

# Procfiles used in local develeopment env
Procfiledev

# Localtunnel Bash script
scripts/tunnel.sh
```