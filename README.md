# messenger-starter

1. Clone this project to computer.
2. npm init
3. Create a .env file for the settings of the Messenger Bot.
4. Set the subdomain for the localtunnel in scripts/tunnel.sh
5. Start server with command: "nf start -j Procfiledev"
6. Add these to .gitignore:
```
# Procfiles used in local develeopment env
Procfiledev

# Localtunnel Bash script
scripts/tunnel.sh
```