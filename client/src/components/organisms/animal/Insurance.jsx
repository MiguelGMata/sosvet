import React, { useState, useEffect } from 'react'; 
import { FaAmbulance, FaRegFrownOpen, FaTrashAlt } from 'react-icons/fa';
import { addInsurance, getInsurance, deleteInsurance } from '../../services/animalServices'; 
import Title from '../../atoms/title/Title';
import Span from '../../atoms/span/Span';
import ButtonIcon from '../../atoms/button/IconButton';
import FormInsurance from '../../molecules/form/FormInsurance';
import Modal from '../../atoms/modal/Modal';
import Card from '../../atoms/card/Card';

const Insurance = ( { animalId }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [insurance, setInsurance] = useState([]);
    const [insuranceData, setInsuranceData] = useState({
        animalId: animalId,
        nomContrat: '',
        nomAssureur: '',
        emailAssureur: '',
        numeroContrat: '', 
        telephone: '',
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false); // Estado de carga

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false); 
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setInsuranceData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setError(null); // Limpia el error al cambiar el formulario
    };

    const handleInsuranceAdd = async (newInsuranceData) => {
        setLoading(true); // Activa el estado de carga
        try {
            const newInsurance = await addInsurance(newInsuranceData);
            setInsurance([...insurance, newInsurance]);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Desactiva el estado de carga
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!insuranceData.nomContrat || !insuranceData.nomContrat) {
            setError("Veuillez remplir tous les champs obligatoires.");
            return;
        }

    handleInsuranceAdd(insuranceData)
        setInsuranceData({
            nomContrat: '',
            nomAssureur: '',
            emailAssureur: '',
            numeroContrat: '', 
            telephone: '',
        });
        handleCloseModal();
    };


    const handleInsuranceDelete = async (id) => {
        try {
            await deleteInsurance(id);
            setInsurance(insurance.filter((insu) => insu.id !== id));
            setError(null); // Limpia cualquier error
        } catch (error) {
            setError(error.message);     
        }
    };
    

    useEffect(() => {
        const fetchInsurance = async () => {
            try {
                const data = await getInsurance();
                const dataFilter = data.filter((insu) => insu.animalId === animalId)
                setInsurance(dataFilter)
            } catch (error) {
                setError(error.message);
            }
        };
            fetchInsurance();
      
    }, []);   

    return (
        <Card>
            <Title className="title-secondary">Assureur</Title>
            
            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <FormInsurance 
                    insuranceData={insuranceData} 
                    handleChange={handleFormChange} 
                    handleSubmit={handleFormSubmit}
                />
            </Modal>

            {error && <Span className="error">{error}</Span>}

            {insurance.length > 0 ? (
                insurance.map((insu, index) => (
                    <ul key={insu.id} className="animal-ul">
                        <li>Contrat : {insu.nomContrat}</li>
                        <li>Assureur : {insu.nomAssureur}</li>
                        <li>Email : {insu.emailAssureur}</li>
                        <li>Numero : {insu.numeroContrat}</li>
                        <li>Téléphone : {insu.telephone}</li>
                        <div className="btn-animal-crud">
                            <ButtonIcon onClick={() => handleInsuranceDelete(insu.id)}><FaTrashAlt /></ButtonIcon>
                        </div>
                    </ul>
                ))
            ) : (
                <Span>Aucun assureur <FaRegFrownOpen /></Span>
            )}
   
            <ButtonIcon onClick={handleOpenModal} disabled={loading}>
                {loading ? 'Cargando...' : <FaAmbulance />} {insurance.length}
            </ButtonIcon>
        </Card>
    );
};

export default Insurance;