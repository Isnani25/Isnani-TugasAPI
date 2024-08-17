const newman = require("newman")

newman.run({
    collection: "json-collection/isnani-API Project.postman_collection.json",
    environment: "json-env/Isnani-regress.postman_environment.json",
    reporters: ["cli", "htmlextra"]
})