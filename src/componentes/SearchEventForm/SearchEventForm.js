import React, { useState } from 'react';
import supabase from '../../services/supabase';
import './SearchEventForm.css';

const SearchEventForm = ({ setFormInteraction }) => {
    // Estados para os campos do formulário
    const [title, setTitle] = useState('');
    const [time, setTime] = useState('');

    // Função para lidar com o envio do formulário
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const {data, error} = await supabase

        // Lógica para buscar o evento com o título e hora especificados
        // Exemplo: Aqui você pode adicionar a lógica para buscar o evento no banco de dados
            .from('eventos')
            .select('titulo, hora')
            .eq('titulo', title)
            .eq('hora', time)

        if (error) {
            console.error('Erro ao buscar o evento: Título ou hora inválidos', error.messagem )
            return;
        }

        if (data && data.length > 0) {
            console.log('Evento encontrado:', data);
        } else {
            console.log('Erro ao buscar o evento: Evento não encontrado.');

        // Resetar os campos do formulário após a busca
            setTitle('');
            setTime('');
        }
        

        
    };

    return (
        <div className="search-event">
            <h2>Buscar Evento</h2>
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form-group">
                        <label>
                            Título do Evento:
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                        </label>
                    </div>
                    <div className="form-group">
                        <label>
                            Hora do Evento:
                            <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
                        </label>
                    </div>
                    <button type="submit">Buscar</button>
                </fieldset>
            </form>
        </div>
    );
};

export default SearchEventForm;
