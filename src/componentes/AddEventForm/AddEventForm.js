import React, { useState } from 'react';
import supabase from '../../services/supabase';
import './AddEventForm.css'; 

const AddEventForm = ({ setFormInteraction }) => {
    // Estados para os campos do formulário
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');
    const [date, setDate] = useState('');
    const [description, setDescription] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Enviar os dados para o banco de dados Supabase
        const { data, error } = await supabase.from('events').insert([{ title, time, date, description }]);
        
        if (error) {
            console.error('Erro ao adicionar evento:', error.message);
        } else {
            console.log('Evento adicionado com sucesso:', data);
            // Limpar os campos do formulário após a inserção bem-sucedida
            setTitle('');
            setTime('');
            setDate('');
            setDescription('');
        }
    };

    return (
        <div className="add-event-form" onMouseEnter={() => setFormInteraction(true)} onMouseLeave={() => setFormInteraction(false)}>
            <h2>Adicionar Evento</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form-group">
                        <label>Título:</label>
                        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder='Titulo do evento.' required />
                    </div>
                    <div className="form-group">
                        <label>Horário:</label>
                        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Data:</label>
                        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Descrição:</label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder='Descrição do evento.' required />
                    </div>
                    <button type="submit">Adicionar Evento</button>
                </fieldset>
            </form>
        </div>
    );
};

export default AddEventForm;
