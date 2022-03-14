import React, { useContext } from 'react'
import MyContext from '../context/MyContext';
import { SelectFiler } from '../styles'

function Filter() {
    const { language, setType, setFramework, setInstitution } = useContext(MyContext);

    const option = (v, eng, port) => <option value={ v }>{ language ? eng : port }</option>;

    return (
    <SelectFiler>
      <div>
        <div>
          <h4>{ language ? "Project Type:" : "Tipo de Projeto:" }</h4>
          <div className="select">
            <select onChange={ ({ target: { value } }) => setType(value) }>
              { option("", "All", "Todos") }
              { option("Front-end", "Front-end", "Front-end") }
              { option("Back-end", "Back-end", "Back-end") }
              { option("Test", "Test", "Teste") }
            </select>
          </div>
        </div>

        <div>
          <h4>Framework:</h4>
          <div className="select">
            <select onChange={ ({ target: { value } }) => setFramework(value) }>
              { option("", "All", "Todos") }
              { option("None", "None", "Nenhum") }
              { option("React", "React", "React") }
              { option("Docker", "Docker", "Docker") }
              { option("MySQL", "MySQL", "MySQL") }
            </select>
          </div>
        </div>
      </div>
    </SelectFiler>
    )
}

export default Filter;
