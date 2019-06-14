
import React, { Component } from 'react';
import axios from 'axios';


export default class ListTous extends Component {

    constructor(props) {
        super(props);
        this.state = { profil: [] };

    }
    componentDidMount() {
        axios.get('http://localhost:8080/profil')
            .then(response => {
                console.log('i am a response', response)
                this.setState({ profil: response.data });
            })
            .catch(function (error) {
                console.log(error);
            })

        

    }

    liste() {
        return <div>
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOM</th>
                            <th>EMAIL</th>
                            <th>PASSWORD</th>
                            <th>PHOTO</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            (this.state.profil.length > 0) ? (this.state.profil.map((obj) => {
                                return <tr key={obj._id}>
                                    <td>{obj._id}</td>
                                    <td>{obj.nom}</td>
                                    <td>{obj.email}</td>
                                    <td>{obj.password}</td>
                                    <td><img width="150px" height="50px" src={'http://localhost:8080/user/'+obj.photo_profil} alt="pdp" />
                                    </td>
                                    {console.log(obj)}
                                </tr>

                            })) : ('')
                        }
                    </tbody>
                </table>
            </div>
        </div>
    }
    render() {
        return (
            <div>
                {this.liste()}
            </div>
        );
    }
}