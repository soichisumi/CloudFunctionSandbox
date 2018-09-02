const functions = require('firebase-functions');

exports.helloWorld = functions.region('asia-northeast1')
                                .https.onRequest((request, response) => {
    if(request.body.message === undefined){
        response.status(400)
            .json({message: "no message defined"})
            .end();
    }else{
        response.status(200)
            .json({ message: request.body.message })
            .end();
    }
});