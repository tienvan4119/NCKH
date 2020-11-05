//SWAGGER
import swaggerJsdoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Log E-Commerce app Express API with Swagger",
            version: "0.1.0",
            description: "This is a simple CRUD API application made with Express and documented with Swagger",
        },
        // servers: [
        //     {
        //         url: "https://dacnpm-test.herokuapp.com/",
        //     },
        //     {
        //         url: "http://dacnpm-test.herokuapp.com/",
        //     },
        //     {  
        //         url: "http://localhost:5000/"
        //     },
        // ],
    },
    // apis: [
    //     './src/api/modules/brands/routes.js',
    //     './src/api/modules/products/routes.js',
    //     './src/api/modules/categories/routes.js',
    // ],
};

export default (app) => {
    const specs = swaggerJsdoc(options);
    app.use(
        "/api-docs",
        swaggerUi.serve,
        swaggerUi.setup(specs)
    );
}