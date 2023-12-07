const { register } = require("../controller/userController");
const { validateAdd } = require("../validators/userValidator");
const { Router} = require('express')
const { checkError}  = require('../middleware/checkError')

class RootRouter {

    router = Router();

    constructor(){
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    // sign up
    // login
    // (creates jwt token while on login success)

    getRoutes(){
        this.router.get('/', (req, res, next) => {
            res.send('Success')
        })
    }

    postRoutes(){
        
    }

    patchRoutes(){}

    deleteRoutes(){}

}

exports = {
    RootRouter: new RootRouter().router
}