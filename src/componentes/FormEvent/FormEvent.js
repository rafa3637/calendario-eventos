import React, { useState } from 'react';
import "./FormEvent.css";
import AddEventForm from '../AddEventForm/AddEventForm';
import SearchEventForm from '../SearchEventForm/SearchEventForm';
import ListEventsForm from '../ListEventsForm/ListEventsForm';
 

const FormEvent = ({ selectedDate }) => {
    const [addEventVisible, setAddEventVisible] = useState(false);
    const [searchEventVisible, setSearchEventVisible] = useState(false);
    const [listEventsVisible, setListEventsVisible] = useState(false);
    const [formVisible, setFormVisible] = useState(true); 
    
    const handleAddEventClick = () => {
        setAddEventVisible(true);
        setSearchEventVisible(false);
        setListEventsVisible(false);
    };

    const handleSearchEventClick = () => {
        setAddEventVisible(false);
        setSearchEventVisible(true);
        setListEventsVisible(false);
    };

    const handleListEventsClick = () => {
        setAddEventVisible(false);
        setSearchEventVisible(false);
        setListEventsVisible(true);
    };

    const handleHideForms = () => {
        setAddEventVisible(false);
        setSearchEventVisible(false);
        setListEventsVisible(false);
    };

    const handleHideForm = () => {
        setFormVisible(!formVisible); 
    };

    const setFormInteraction = (interaction) => {
         setAddEventVisible(interaction);
    };

    
    return (
        <div className="form-container" onMouseLeave={handleHideForms}>
            {selectedDate && (
                <>
                    <h2>Eventos do Dia {selectedDate}</h2>
                    <div className="form-buttons">
                        <button className="form-button" onClick={handleAddEventClick}>Adicionar Evento</button>
                        <button className="form-button" onClick={handleSearchEventClick}>Buscar Evento</button>
                        <button className="form-button" onClick={handleListEventsClick}>Lista de Eventos do Dia</button>
                        <button className="form-button" onClick={handleHideForm}>Ocultar</button>
                    </div>
                    {addEventVisible && <AddEventForm setFormInteraction={setFormInteraction} />}
                    {searchEventVisible && <SearchEventForm setFormInteraction={setFormInteraction} />}
                    {listEventsVisible && <ListEventsForm  setFormInteraction={setFormInteraction}/>}
                </>
            )}
        </div>
    );
};

export default FormEvent;
