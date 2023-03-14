import { Link } from "react-router-dom"
import {AiOutlineArrowLeft} from 'react-icons/ai'

const login = () => {
    return (
        <div className="container">
            <h1>
              <Link to="/"><AiOutlineArrowLeft /></Link>  Đây là trang đăng nhập
            </h1>
        </div>

    )
}
export default login