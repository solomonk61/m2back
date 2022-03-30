module.exports = ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 1337),
  url: env("URL", "http://admin.example.com"),
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET", "0c09976d921ddf145d030691e510b77d"),
    },
  },
});
