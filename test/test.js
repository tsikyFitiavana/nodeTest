var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var assert = require('assert');
var server = chai.request('http://localhost:8080')
// var server = require('../server.js')
 chai.should();

describe('/POST Create User', () => {
    it('Create User Testing', (done) => {
        let user = {
            'nom': 'testblar',
            'prenom':'nevi',
        }
        server
            .post('/profil')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                done()
                

                // res.body.SUCCESS.should.have.property('nom');
                // res.body.SUCCESS.should.have.property('prenom');
                
              
            }); 
    });

    it('erreur manque donner', (done) => {
        let user = {
            'nom': 'testblar'
        }
        console.log(user.nom)
        server
            .post('/profil')
            .send(user)
            .end((err, res ) => {
                
                res.should.have.status(400);
                done()
                

                // res.body.SUCCESS.should.have.property('nom');
                // res.body.SUCCESS.should.have.property('prenom');
                
              
            }); 
    });



    // it('espace donner', (done) => {
    //     let user = {
    //         'nom': '  ',
    //         'prenom': '  ',
    //     }
    //     console.log(user.nom)
    //     server
    //         .post('/profil')
    //         .send(user)
    //         .end((err, res ) => {
                
    //             res.should.have.status(400);
    //             done()
                

    //             // res.body.SUCCESS.should.have.property('nom');
    //             // res.body.SUCCESS.should.have.property('prenom');
                
              
    //         }); 
    // });
});
