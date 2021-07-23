import React, { useState, useEffect } from "react"
import firebase from "../Config/firebase"
import Producto from "../Components/Producto"
import { Form } from "react-bootstrap"
import { Button } from "@material-ui/core"
//Definicion de clase
function ABMPage() {
    const [loading, setLoading] = useState(true)
    const [productoForm, setProductoForm] = useState({ id: null, name: "", price: "", description: "", image: "", sku:"" })
    const [productos, setProductos] = useState([])
    const [reload, setReload] = useState(false);
    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            let document = null
            if (productoForm.id === null) {
                document = await firebase.db.collection("productos")
                    .add(productoForm)
            } else {
                document = await firebase.db.doc("productos/" + productoForm.id)
                    .set(productoForm)
            }

            console.log("Document", document)
            setReload(true)
        } catch (e) {
            console.log("error", e)
        }

    }
    const getProductos = async () => {
        try {
            setLoading(true)
            const querySnapshot = await firebase.db.collection("productos")
                .get()
            setProductos(querySnapshot.docs)

            setLoading(false);
            setReload(false)
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
    useEffect(
        () => {

            if (reload)
                getProductos()


        },
        [reload]
    )
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange", name, value)
        setProductoForm({ ...productoForm, [name]: value })
    }
    const handleClickModificar = (producto) => {
        console.log(producto)
        setProductoForm(producto)
    }
    const handleClickEliminar = async (producto) => {
        try {
            const document = await firebase.db.doc("productos/" + producto.id)
                .delete()
            setReload(true)
            console.log(document)
        } catch (e) {
            console.log("error", e)
        }
    }

    if (loading) {
        return (
            <div>
                loading...
            </div>

        )
    } else {
        return (
            <div>
       
                <div style={{ display: "flex" }}>{productos.map(producto => <Producto datos={{ ...producto.data(), id: producto.id }}
                    verDetalle={false}
                    modificar={true}
                    clickModificar={handleClickModificar}
                    eliminar={true}
                    clickEliminar={handleClickEliminar} />)}</div>

            
                <Form onSubmit={handleSubmit} >
                    <br />
                    <Form.Control type="text" placeholder="Nombre" name="name" value={productoForm.name} onChange={handleChange} />
                    <br />
                    <Form.Control type="number" placeholder="Precio" name="price" value={productoForm.price} onChange={handleChange} />
                    <br />
                    <Form.Control type="text" placeholder="Descripcion" name="description" value={productoForm.description} onChange={handleChange} />
                    <br />
                    <Form.Control type="text" placeholder="Imagen" name="image" value={productoForm.image} onChange={handleChange} />
                    <br />
                    <Form.Control type="text" placeholder="SKU" name="sku" value={productoForm.sku} onChange={handleChange} />
                  

                    <Button type="submit" variant="contained" color="secondary" size="large">Guardar</Button>


                </Form>
            </div>

        )
    }
}
export default ABMPage;