import React, { useState, useEffect } from "react"
import Producto from "../Components/Producto"
import firebase from "../Config/firebase"
import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"


function DetallePage(props) {
    const id = props.match.params.id
    // eslint-disable-next-line no-unused-vars
    const [loading, setLoading] = useState(true);

    const [producto, setProducto] = useState({})
    const history = useHistory();
    const comprar = () => {
        alert("Gracias por su compra")
        history.push("/inicio")
    }
    //console.log(props.match.params.categoria)
    //componentDidMount
    useEffect(
        () => {
            async function request() {
                try {
                    const document = await firebase.db.doc("productos/" + id)
                        .get()
                    setLoading(false);
                    setProducto(document.data());
                } catch (e) {

                }

            }
            request();
            /*getById(id)
            .then(response=>{
                console.log("data",response)
                setLoading(false);
                setProducto(response.data[0]);
                
            })*/
        },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []
    )
    if (!producto) {
        return (
            <div>
                Loading...
            </div>
        )
    } else {
        return (
            <div id="productoDetalle_id">
                <Producto datos={producto} verDetalle={false} />
                <Button id="botonCompra_id"
                    type="submit"
                    variant="contained"
                    color="secondary"
                    size="large"
                    onClick={comprar}>
                    Comprar
                </Button>
               </div>
        )
      
     
    }


}


export default DetallePage;