function TecnologiesList({tecnologies}){
    return(
        <div>
            <h2>Tecnologies</h2>
            {
                tecnologies.map((item, index) => (
                    <p key={index}>{index} - {item}</p>
                ))
            }
        </div>
    )
}

export default TecnologiesList