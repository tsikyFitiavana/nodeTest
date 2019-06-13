const chai = require('chai');
const chaiHttp = require('chai-http');
 const app =require('../server') ;
const should = chai.should();
const expect = chai.expect;
chai.use(chaiHttp);

describe('=== Test1==', () => {

    // Test POST Client
    describe('HTTP POST /client', () => {
        it('create client should return the result of data', (done) => {

            user={
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
                    res.status.should.eql(200);
                    done();
                });
        });

        it('getOne client should return the result of data', (done) => {

            const a=3
            chai.request(app)
                .get(`/profil/${a}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
        });
        
        it('getOne id=vide', (done) => {

            const a=""
            chai.request(app)
                .get(`/profil/${a}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
        });
        it('getOne id=text', (done) => {

            const a="gf"
            chai.request(app)
                .get(`/profil/${a}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(500);
                    done();
                });
        });
        it('getOne id=int not exist', (done) => {

            const a=1000
            chai.request(app)
                .get(`/profil/${a}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });
    })

    describe('HTTP DELETE /client', () => {
        it('deleteOne id=int not exist', (done) => {

            const a=1
            chai.request(app)
                .delete(`/profil/${a}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });
        it('deleteOne id=string not exist', (done) => {

            const a="ddd"
            chai.request(app)
                .delete(`/profil/${a}`)
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(500);
                    done();
                });
        });

    })
    describe('HTTP UPDATE /client', () => {
        it('update donner manquant exist', (done) => {

            const a=2
            chai.request(app)
                .put(`/profil/${a}`)
                .send({
                   "nom" :'bbbbbb',
                    "prnom":'ccccccc'
                })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(400);
                    done();
                });
        });
        it('update donner compler et id exist', (done) => {

            const a=2
            chai.request(app)
                .put(`/profil/${a}`)
                .send({
                   "nom" :'bbbbbb',
                    "prenom":'ccccccc'
                })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(200);
                    done();
                });
        });
        it('update id=string not exist', (done) => {

            const a="ddd"
            chai.request(app)
                .put(`/profil/${a}`)
                .send({
                    "nom" :'bbbbbb',
                    "prenom":'ccccccc'
                })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(500);
                    done();
                });
        });
        it('update id not exist', (done) => {

            const a=1000
            chai.request(app)
                .put(`/profil/${a}`)
                .send({
                    "nom" :'bbbbbb',
                    "prenom":'ccccccc'
                })
                .end((err, res) => {
                    should.not.exist(err);
                    res.status.should.eql(404);
                    done();
                });
        });

    })
})
