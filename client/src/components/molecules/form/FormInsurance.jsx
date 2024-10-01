import React from 'react';
import Label from '../../atoms/label/Label';
import Input from '../../atoms/input/Input';
import Title from '../../atoms/title/Title';
import Button from '../../atoms/button/Button';
import './formAnimal.css';


const FormInsurance = ({ insuranceData, handleChange, handleSubmit}) =>{
    console.log(insuranceData,'<--form')
    return(
        <form className="form-animal" onSubmit={handleSubmit}>
            <Title className="title-form">Assureur de votre Animal</Title> 
            <div className="form">
                <div className="form-group-inline">
                    <div className="form-field">
                        <Label htmlFor="nomContrat" text="Contrat" />
                        <Input
                            type="text"
                            name="nomContrat"
                            placeholder="Nom de contrat"
                            value={insuranceData.nomContrat}
                            onChange={handleChange}          
                        />
                    </div>
                    
                    <div className="form-field">
                        <Label htmlFor="nomAssureur" text="Assureur" />
                        <Input
                            type="text"
                            name="nomAssureur"
                            placeholder="Nom de l'Assureur"
                            value={insuranceData.nomAssureur}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group-inline">
                    <div className="form-field">
                        <Label htmlFor="emailAssureur" text="Email" />
                        <Input
                            type="text"
                            name="emailAssureur"
                            placeholder="Email de l'Assureur"
                            value={insuranceData.emailAssureur}
                            onChange={handleChange}
                        />
                    </div> 
                </div>
                <div className="form-group-inline">
                    <div className="form-field">
                        <Label htmlFor="numeroContrat" text="Numero" />
                        <Input
                            type="text"
                            name="numeroContrat"
                            placeholder="Numero de contrat"
                            value={insuranceData.numeroContrat}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <Label htmlFor="telephone" text="Telephone" />
                        <Input
                            type="text"
                            name="telephone"
                            placeholder="Telephone de l'assureur"
                            value={insuranceData.telephone}
                            onChange={handleChange}
                        />
                    </div>
                    
                </div> 
                <div className="btn-sumit">
                    <Button text="Ajouter" type="submit" />
                </div>
            </div>
        </form>
    );
};
export default FormInsurance;
