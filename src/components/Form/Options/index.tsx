const Options = ({array,onChange,inputRef}) => {

    return(
    <>
    <label> Escolha uma modalidade: </label> 
    <input 
    list="matricula"
    name="matricula"
    onChange={onChange}
    
    style={{padding:"5px"}} 
    />
    <datalist id="matricula" >
    {array.map((item, key) =>
        <option key={key} value={item.nome} />
    )}
    </datalist>
 
    </>
    )
}

export default Options