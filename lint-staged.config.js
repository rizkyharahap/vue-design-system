export default {
  "./src/**/*.{ts,vue}": (stagedFiles) => [
    `prettier --write ${stagedFiles.join(" ")}`,
    `eslint ${stagedFiles.join(" ")} --fix`,
  ],
};
