import { useHistory } from "react-router-dom";

const history = useHistory
const Compra = ({comprado}) => (
    <div className='modal'>
    {
      comprado ?
    history.push("/"):
   null
    }
    </div>
)

export default Compra;