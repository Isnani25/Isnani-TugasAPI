const newman = require("newman")

newman.run({
    collection: "json-collection/isnani2-API Project.postman_collection.json",
    environment: "json-env/Isnani2_Token.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})