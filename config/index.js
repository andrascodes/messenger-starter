'use strict'

const config = {}

config.messengerApp = {
  fbPageId: (process.env.FB_PAGE_ID && Number(process.env.FB_PAGE_ID)),
  fbPageToken: process.env.FB_PAGE_TOKEN,
  verifyToken: process.env.FB_VERIFY_TOKEN,
  appSecret: process.env.FB_APP_SECRET,
  dashbotKey: process.env.DASHBOT_API_KEY
}

// Exit if either of the config values are missing.
if (!(config.messengerApp.fbPageId &&
        config.messengerApp.fbPageToken &&
        config.messengerApp.verifyToken &&
        config.messengerApp.appSecret &&
        config.messengerApp.dashbotKey)) {
  console.error('Missing config values')
  process.exit(1)
}

module.exports = config
