import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
import { SelectFiler } from '../styles'

function Filter() {
    const { language, setType, setFramework, setInstitution } = useContext(MyContext);

    const option = (v, eng, port) => <option value={ v }>{ language ? eng : port }</option>;

    return (
    <SelectFiler>
        <label htmlFor="field">
        { language ? "Project Type:" : "Tipo de Projeto:" }
        <select id="field" onChange={ ({ target: { value } }) => setType(value) }>
            { option("", "All", "Todos") }
            { option("Front-end", "Front-end", "Front-end") }
            { option("Back-end", "Back-end", "Back-end") }
        </select>
        </label>
        <label htmlFor="framework">
        Framework:
        <select id="framework" onChange={ ({ target: { value } }) => setFramework(value) }>
            { option("", "All", "Todos") }
            { option("None", "None", "Nenhum") }
            { option("React", "React", "React") }
        </select>
        </label>
        <label htmlFor="origin">
        { language ? "Institution:" : "Instituição:" }
        <select id="field" onChange={ ({ target: { value } }) => setInstitution(value) }>
            { option("", "All", "Todos") }
            { option("Me", "Own Projects", "Projetos Próprios") }
            { option("Trybe", "Trybe", "Trybe") }
        </select>
        </label>
    </SelectFiler>
    )
}

export default Filter;
