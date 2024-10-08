import React, { useState, useEffect } from 'react';
import { FaHeartbeat, FaRegFrownOpen, FaTrashAlt, FaFolderOpen } from 'react-icons/fa';
import { addSoin, getSoin, deleteSoin } from '../../services/animalServices';
import Title from '../../atoms/title/Title';
import Span from '../../atoms/span/Span';
import ButtonIcon from '../../atoms/button/IconButton';
import FormCare from '../../molecules/form/FormCare';
import Modal from '../../atoms/modal/Modal';
import Card from '../../atoms/card/Card';
import moment from 'moment';
import MessageModal from '../../atoms/modal/MessageModal';
import 'moment/locale/fr';

const Care = ({ animalId }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [careSoin, setCareSoin] = useState([]);
    const [careData, setCareData] = useState({
        animalId: animalId,
        categorie: '',
        libelle: '',
        information: '',
        date: '',
        document: '',
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
        setCareData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        setError(null); // Limpia el error al cambiar el formulario
    };

    const handleCareAdd = async (newSoinData) => {
        setLoading(true); // Activa el estado de carga
        try {
            const newCare = await addSoin(newSoinData);
            setCareSoin([...careSoin, newCare]);
            setError(null);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false); // Desactiva el estado de carga
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (!careData.categorie || !careData.libelle) {
            setError("Veuillez remplir tous les champs obligatoires.");
            return;
        }

        handleCareAdd(careData);
        setCareData({
            categorie: '',
            libelle: '',
            information: '',
            date: '',
            document: '',
        });
        handleCloseModal();
    };


    const handleCareDelete = async (id) => {
        try {
            await deleteSoin(id);
            setCareSoin(careSoin.filter((soin) => soin.id !== id));
            setError(null); // Limpia cualquier error
        } catch (error) {
            setError(error.message);
        }
    };

    const formatDate = (isoString) => {
        return moment(isoString).locale('fr').format('DD/MM/YYYY');
    };

    const closeModal = () => {
        setError(null);
    };

    useEffect(() => {
        const fetchSoin = async () => {
            try {
                const data = await getSoin();
                const dataFilter = data.filter((soin) => soin.animalId === animalId)
                setCareSoin(dataFilter)
            } catch (error) {
                setError(error.message);
            }
        };
        fetchSoin();

    }, []);


    return (
        <Card>
            <Title className="title-secondary">Soin</Title>

            <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
                <FormCare
                    careData={careData}
                    handleChange={handleFormChange}
                    handleSubmit={handleFormSubmit}
                />
            </Modal>
            {error && <MessageModal message={error} onClose={closeModal} className="error" />}
            {careSoin.length > 0 ? (
                careSoin.map((soin, index) => (
                    <ul key={soin.id} className="animal-ul">
                        <li>Catégorie : {soin.categorie}</li>
                        <li>Libellé : {soin.libelle}</li>
                        <li>Information : {soin.information}</li>
                        <li>Date : {formatDate(soin.date)}</li>
                        <li>Dossier : 000{soin.id}</li>
                        <div className="btn-animal-crud">
                            <ButtonIcon onClick={() => handleCareDelete(soin.id)}><FaTrashAlt /></ButtonIcon>
                        </div>
                    </ul>

                ))
            ) : (
                <Span>Aucun soin <FaRegFrownOpen /> {careSoin.length}</Span>
            )}

            <ButtonIcon onClick={handleOpenModal} disabled={loading}>
                {loading ? 'Cargando...' : <FaHeartbeat />} {careSoin.length}
            </ButtonIcon>
        </Card>
    );
};

export default Care;
