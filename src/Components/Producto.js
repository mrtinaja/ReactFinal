import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card'
import EcommerceContext from "../Context/EcommerceContext"
import { Button } from "@material-ui/core"


function Producto(props) {
    const { datos } = props
    console.log(datos)
    const { name, price, description, image, id, sku } = datos
    const verDetalle = (props.verDetalle !== false ? true : false)
    const modificar = (props.modificar === true ? true : false)
    const eliminar = (props.eliminar === true ? true : false)


    useEffect(
        () => {
            console.log("producto", props)
        },

    )

    return (

        <EcommerceContext.Consumer>
            {

                context =>
                    <Card id="card_id" style={{ width: '20rem' }}>
                        <Card.Body>
                            <Card.Title id="name_id">{name}</Card.Title>
                            <Card.Text>
                                {description}
                            </Card.Text>
                            <Card.Text >
                                {sku}
                            </Card.Text>
                            <Card.Text id="precio_id">
                                ${price}
                            </Card.Text>
                            <Card.Text id="photo_url_id">
                                <img src={image} alt="cur" class="image" width={100} id="photoUrl_id" />
                            </Card.Text >



 {
                                verDetalle && context.userLogin &&
                                <Button variant="contained" color="primary" className="link" size="large">
                                    <Link style={{
                                        color: '#FFF',
                                        outline: 'none',
                                        textDecoration: 'none'
                                    }}
                                        text-color="primary"
                                        to={"/producto/" + id}>Ver Detalle</Link>
                                </Button>
                            }
                            {
                                modificar &&
                                <Button variant="contained" color="primary" size="large" onClick={(e) => props.clickModificar(datos)}>Modificar</Button>
                            }
                            {
                                eliminar &&
                                <Button variant="contained" color="secondary" size="large" onClick={(e) => props.clickEliminar(datos)}>Eliminar</Button>
                            }
                        </Card.Body>
                    </Card>
            }

        </EcommerceContext.Consumer>
    )
}
export default Producto