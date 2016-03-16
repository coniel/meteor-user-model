Package.describe({
    name: "coniel:user-model",
    summary: "A social user package",
    version: "0.0.1",
    git: "https://github.com/coniel/meteor-user-model.git"
});

Package.onUse(function(api) {
    api.versionsFrom("1.0.2.1");

    api.use([
        "coniel:base-model@0.3.0",
        "accounts-base"
    ]);

    api.imply(["coniel:base-model", "accounts-base"]);

    //Add the user-model files
    api.addFiles("user-model.js");

    api.export("User");
});
