module.exports = ({ env }) => {
  return {
    "rest-cache": {
      config: {
        provider: {
          name: "memory",
          options: {
            max: 32767,
            maxAge: 3600,
          },
        },
        strategy: {
          contentTypes: [
            // list of Content-Types UID to cache
            "api::developer.developer",
            "api::feature.feature",
          ],
        },
      },
    },
    upload: {
      config: {
        provider: "cloudinary",
        providerOptions: {
          cloud_name: env("CLOUDINARY_NAME"),
          api_key: env("CLOUDINARY_KEY"),
          api_secret: env("CLOUDINARY_SECRET"),
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    email: {
      config: {
        provider: "nodemailer",
        providerOptions: {
          host: env("SMTP_HOST"),
          port: env("SMTP_PORT"),
          secure: true,
          auth: {
            user: env("SMTP_USER"),
            pass: env("SMTP_PASSWORD"),
          },
          priority: "normal",
          tls: {
            rejectUnauthorized: false,
          },
        },
        settings: {
          defaultFrom: "dreamtechteam2022@gmail.com",
          defaultReplyTo: "dreamtechteam2022@gmail.com",
        },
      },
    },
    transformer: {
      enabled: true,
      config: {
        prefix: "/api/",
        responseTransforms: {
          removeAttributesKey: true,
          removeDataKey: true,
        },
      },
    },
    seo: {
      enabled: true,
    },
    slugify: {
      enabled: true,
      config: {
        contentTypes: {
          article: {
            field: "slug",
            references: "title",
          },
        },
      },
    },
    "import-export-entries": {
      enabled: true,
    },
  };
};
