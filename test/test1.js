const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../server');
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('=== Test1==', () => {

    // Test POST Client
    describe('HTTP POST /client', () => {
        it('create client should return the result of data', (done) => {

            user = {
                'nom': 'bruno',
                'prenom': 'marcelino'
            }
            chai.request(app)
                .post('/profil')
                // changer les données entrants à chaque test pour eviter les doublants
                .send(user)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
        });
    })





    describe('HTTP GET /client', () => {
        it('get client should return the result of data', (done) => {


            chai.request(app)
                .get('/profil')
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });

        it('getOne client should return the result of data', (done) => {

            const a = {
                id: 10
            }
            chai.request(app)
                .get('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
        });

        it('getOne id=vide', (done) => {

            const a = {
                id: ""
            }
            chai.request(app)
                .get('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });
        it('getOne id=text', (done) => {

            const a = {
                id: "fg"
            }
            chai.request(app)
                .get('/profil/' )
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(500);
                    done();
                });
        });
        it('getOne id=int not exist', (done) => {

            const a = {
                id: 100
            }
            chai.request(app)
                .get('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });
    })

    describe('HTTP DELETE /client', () => {
        it('deleteOne id=int not exist', (done) => {

            const a = {
                id: 17
            }
            chai.request(app)
                .delete('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });
        it('deleteOne id=string not exist', (done) => {

            const a = {
                id: "bb"
            }
            chai.request(app)
                .delete('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(500);
                    done();
                });
        });

    })
    describe('HTTP UPDATE /client', () => {
        it('update donner manquant exist', (done) => {

            const a = {
                id: 4,
                nom: 'bruno',
                prenom: 'simplon'

            }
            chai.request(app)
                .put('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
        });
        it('update donner compler et id exist', (done) => {

            const a = {
                id: 3,
                nom: 'coach',
                prenom: 'simplon'

            }
            chai.request(app)
                .put('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
        });
        it('update id=string not exist', (done) => {

            const a = {
                id: 1000,
                nom: 'bbbbbb',
                prenom: 'ccccccc'

            }
            chai.request(app)
                .put('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });
        it('update id not exist', (done) => {

            const a = {
                id: 1000,
                nom: 'bbbbbb',
                prenom: 'ccccccc'

            }
            chai.request(app)
                .put('/profil/')
                .send(a)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });

    })
})
