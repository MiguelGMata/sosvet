import React from 'react';
import Label from '../../atoms/label/Label';
import Input from '../../atoms/input/Input';
import Title from '../../atoms/title/Title';
import TextArea from '../../atoms/textarea/TextArea';
import Button from '../../atoms/button/Button';
import './formAnimal.css';


const FormCare = ({ careData, handleChange, handleSubmit }) => {

    return (
        <form className="form-animal" onSubmit={handleSubmit}>
            <Title className="title-form">Soin de votre Animal</Title>
            <div className="form">
                <div className="form-group-inline">
                    <div className="form-field">
                        <Label htmlFor="categorie" text="Catégorie" />
                        <Input
                            type="text"
                            name="categorie"
                            placeholder="Catégorie de soin"
                            value={careData.categorie}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-group-inline">
                    <div className="form-field">
                        <Label htmlFor="libelle" text="Libellé" />
                        <Input
                            type="text"
                            name="libelle"
                            placeholder="Libellé de soin"
                            value={careData.libelle}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-field">
                        <Label htmlFor="date" text="Date" />
                        <Input
                            type="date"
                            name="date"
                            placeholder="Date de soin"
                            value={careData.date}
                            onChange={handleChange}
                        />
                    </div>
                </div>
                <div className="form-group-inline">
                    <div className="form-field">
                        <Label htmlFor="information" text="Information" />
                        <Input
                            type="text"
                            name="information"
                            placeholder="Information sur les soin"
                            value={careData.information}
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
export default FormCare;


