import React, { useState, useEffect } from "react"
import Producto from "../Components/Producto"
import firebase from "../Config/firebase"
// eslint-disable-next-line no-unused-vars
import { getProductos } from '../Services/ItemsServices'
import Spinner from 'react-bootstrap/Spinner'


function InicioPage() {

    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const getProductos = async () => {
        try {
            setLoading(true)
            const querySnapshot = await firebase.db.collection("productos")
                .get()
            console.log(querySnapshot.docs)
            setProductos(querySnapshot.docs)

            setLoading(false);

        } catch (e) {
            console.log("error", e)
        }
    }
    useEffect(
        () => {
            getProductos()

        },

        []

    )


    if (loading) {

        return (

            <Spinner animation="border" role="status">
                <span className="sr-only"></span>
            </Spinner>
)
    } else {
        return (
            <>

                <div style={{ display: "flex" }}>
                    {productos.map(producto =>
                     <Producto
                 datos={{ ...producto.data(), 
                 id: producto.id }} 
                 destacados={true} />)}.</div>

            </>

        )
    }
}
export default InicioPage;