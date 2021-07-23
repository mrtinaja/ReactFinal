import React, { useContext, useState } from "react"
import firebase from "../Config/firebase"
import FormGroup from "../Components/Forms/FormGroup"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import EcommerceContext from "../Context/EcommerceContext"
import { useHistory } from "react-router-dom"

function LoginPage() {
    const context = useContext(EcommerceContext)
    const [form, setForm] = useState({ email: '', password: '' })
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const handleSubmit = async (event) => {
        console.log("handleSubmit", form)
        setLoading(true)
        event.preventDefault()
        try {
            const responseUser = await firebase.autenticacion.signInWithEmailAndPassword(form.email, form.password)
            console.log(responseUser)
            setLoading(false)
            console.log("uid", responseUser.user.uid)
            const userInfo = await firebase.db.collection("usuarios")
                .where("userId", "==", responseUser.user.uid)
                .get()
            /*.then(data=>{
                console.log("usuario",data)
            })*/
            console.log("usuario", userInfo.docs[0]?.data())
            context.loginUser(userInfo.docs[0]?.data())
            alert("Bienvenido/a")
            history.push("/inicio")
        } catch (e) {
            console.log("Error", e)
            setLoading(false)
            alert(e.message)

            if (e.code === "auth/weak-password") {
                alert("El password debe tener al menos 6 caracteres")
            }
        }



    }
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        console.log("handleChange", name, value)
        setForm({ ...form, [name]: value })

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>


                <FormGroup label="Correo Electronico" name="email" type="email" placeholder="Ingrese su correo electronico" value={form.email} change={handleChange} />
                <FormGroup label="Contraseña" name="password" type="password" placeholder="Ingrese su contraseña" value={form.password} change={handleChange} />
                <ButtonWithLoading  loading={loading}  type="submit">Ingresar</ButtonWithLoading>

            </form>

        </div>
        
    )
}

export default LoginPage;
