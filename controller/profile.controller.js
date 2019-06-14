
const Profile = require('../models/profile.model');

//Create new profil
exports.create = (req, res) => {
    console.log("requete utilisateur", req.body)
    if(!req.body.nom || !req.body.prenom ||(req.body.nom==" "&&req.body.prenom==" ")) {
        console.log('console.log 1 '+req.body.nom);
        console.log('console.log 2 '+req.body.prenom);
        return res.status(400).send({
            message: "profil content can not be empty"   
        });
    }
    
    Profile.find()
    .then(user => {
        //autoincrement
        let idautom;
        if(user.length == 0){
            idautom = 0
        }else {
            idautom = parseInt(user[user.length - 1]._id) + 1
        }
    const profil = new Profile({   
             
        _id: idautom,
        nom: req.body.nom , 
        prenom: req.body.prenom
    });
    // Save p in the database
    profil.save()
    .then((data) => {
      
            res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while creating the profil."
            
        });
    });
})
};

exports.findAll = (req, res) => {   
    Profile.find()
    .then(users => {    
        res.send(users);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving profils."
        });
    });
};
// Find a single profil with a id
exports.findOne = (req, res) => {
    Profile.findById(req.body.id)
    .then(profilchoix => {
        //console.log(unprofil) 
        if(!profilchoix) {
            return res.status(404).send({
                message: "profil not found with id" + req.body.id
            });            
        }
        else{  
            res.send(profilchoix);             
        }
        
        
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "profil not found with id " + req.body.id
            });                
        }
        return res.status(500).send({
            message: "Something wrong retrieving profil with id " + req.body.id
        });
    });
};

exports.delete = (req, res) => {
    Profile.findByIdAndRemove(req.body.id)
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "eleve not found with id " + req.body.id
                });
            }
            res.send({message: "eleve deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.nom === 'NotFound') {
                return res.status(404).send({
                    message: "eleve not found with id " + req.body.id
                });                
            }
            return res.status(500).send({
                message: "Could not delete eleve with id " + req.body.id
            });
        });
    };

exports.update = (req, res) => {
    // Validate Request
    if(!req.body.nom || !req.body.prenom) {
        return res.status(400).send({
            message: "eleve content can not be empty"
        });
    }

    // Find and update eleve with the request body
    Profile.findByIdAndUpdate(req.body.id, {
        
        nom: req.body.nom || "No eleve title", 
        prenom: req.body.prenom,
        
    }, {new: true})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "eleve not found with id " + req.body.id
            });
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "eleve not found with id " + req.body.id
            });                
        }
        return res.status(500).send({
            message: "Something wrong updating note with id " + req.body.id
        });
    });
};