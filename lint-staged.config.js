export default {
  "**/*.{js,ts,jsx,tsx,json,md,css}": "prettier --write",
  "**/*.{js,ts,jsx,tsx}": (filenames) => {
    const uniquePackages = new Set(
      filenames.map((file) => file.split("/").slice(0, 2).join("/"))
    );

    const commands = [];

    for (const pkg of uniquePackages) {
      const filesInPkg = filenames.filter((file) => file.startsWith(pkg));
      commands.push(
        `pnpm --filter ${pkg} exec eslint --fix ${filesInPkg.join(" ")}`
      );
    }

    return commands;
  },
};
