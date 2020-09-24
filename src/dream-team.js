module.exports = createDreamTeam = (members) =>
  !(members instanceof Array)
    ? false
    : members
        .filter((item) => typeof item == "string")
        .map((item) => item.trim()[0].toUpperCase())
        .sort()
        .join("");
