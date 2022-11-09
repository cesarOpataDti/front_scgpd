import styles from './Cliente.module.css'
import Input from '../../Forms/Input'
import Select from '../../Forms/Select'
import SubmitButton from '../../Forms/SubmitButton'
import {FaRegSave, FaRegTimesCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'
import {useState} from 'react'


function ClientesCadastro(){
    const [formData, setFormData] = useState();
    return(
        <form className={styles.form}>
            <h1 className={styles.h1}> Cadastro de Clientes</h1>
            <div className={styles.par}>
                
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Nome" name="name" placeholder="Insira o nome do cliente" maxlength="100"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="integer" text="*CPF" name="cpf" mask="999.999.999-99" placeholder="Insira o CPF" />
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="integer" text="*RG" name="rg" mask="99.999.999-9" placeholder="Insira o RG"/>
                <Select name="category_id" text="*Gênero"/>
            </div>
            <div className={styles.par}>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="integer" text="*CEP" name="cep" mask="99999-999" placeholder="Insira o CEP"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Logradouro" name="logradouro" placeholder="Insira o logradouro" maxlength="100"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Bairro" name="bairro" placeholder="Insira o bairro" maxlength="100"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="text" text="*Numero" name="numero" placeholder="Insira o numero" maxlength="5"/>
            </div>
            <div className={styles.par}>
                <Select name="category_id" text="*UF"/>
                <Select name="category_id" text="*Cidade"/>
                <Select name="category_id" text="*Tipo de Telefone"/>
                <Input handleOnChange={(event) =>setFormData((e) => ({ ...e, rg: event.target.value}))}
                    type="string" text="*N° Telefone Celular" name="telefone" placeholder="Insira o numero"/>
            </div>
            <div className={styles.par}>
                <Link to ='/clientes'><SubmitButton icon={<FaRegSave/>} text="Salvar"/></Link>
                <Link to ='/clientes'><SubmitButton icon={<FaRegTimesCircle/>} text="Cancelar"/></Link>
            </div>
        </form>
    )
}

export default ClientesCadastro