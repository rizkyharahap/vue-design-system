export default {
  "./src/**/*.{ts,vue}": (stagedFiles) => [
    `prettier --write ${stagedFiles.join(" ")}`,
    `eslint --fix`,
  ],
};
