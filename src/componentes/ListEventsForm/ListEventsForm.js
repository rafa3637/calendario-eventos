import React, { useState, useEffect } from "react";
import "./ListEventsForm.css";
import supabase from '../../services/supabase';


const ListEventsForm = ({ setFormInteraction }) => {
    const [events, setEvents] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                // Consulta os eventos do dia atual no banco de dados
                const { data, error } = await supabase
                    .from('events')
                    .select('title, id')
                    .eq('date', new Date().toISOString().slice(0, 10)); // Filtra pelo dia atual

                if (error) {
                    throw error;
                }

                setEvents(data || []);
            } catch (error) {
                console.error('Erro ao buscar eventos:', error.message);
                setErrorMessage('Ocorreu um erro ao buscar os eventos.');
            }
        };

        fetchEvents();
    }, []);

    const handleDeleteEvent = async (eventId) => {
        try {
            // Exclui o evento com o ID fornecido do banco de dados
            await supabase
                .from('events')
                .delete()
                .eq('id', eventId);

            // Atualiza a lista de eventos após a exclusão
            const updatedEvents = events.filter(event => event.id !== eventId);
            setEvents(updatedEvents);
        } catch (error) {
            console.error('Erro ao excluir evento:', error.message);
        }
    };

    return (
        <div className="list">
            {errorMessage ? (
                <p>{errorMessage}</p>
            ) : (
                <>
                    {events.length === 0 ? (
                        <p>Não existem eventos criados para este dia.</p>
                    ) : (
                        <ul>
                            {events.map(event => (
                                <li key={event.id}>
                                    <span>{event.title}</span>
                                    <button onClick={() => handleDeleteEvent(event.id)}>Excluir</button>
                                </li>
                            ))}
                        </ul>
                    )}
                </>
            )}
        </div>
    );
};

export default ListEventsForm;
