export const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Project Progression Artemis",
            version: "0.1.0",
            description: "This is a simple CRUD API application.",
            license: {
                name: "MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
            contact: {
                name: "Ian Natividad",
                email: "ian@symph.co",
            },
        },
        servers: [
            {
                url: "http://localhost:3000/hunter",
            },
        ],
    },
    apis: ["./routes/index.ts"],
};
