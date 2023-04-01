/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      reactStrictMode: true,
      env: {
        mongodb_username: "Danny",
        mongodb_password: "Audaga05",
        mongodb_clustername: "cluster0",
        mongodb_database: "blog-dev",
      },
    };
  }
  return {
    reactStrictMode: true,
    env: {
      mongodb_username: "Danny",
      mongodb_password: "Audaga05",
      mongodb_clustername: "cluster0",
      mongodb_database: "blog",
    },
  };
};

module.exports = nextConfig;
