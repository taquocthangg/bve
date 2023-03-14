import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header>
      <div className="containers">
      <div className="menubar">
        <div className="menuLogo">
          <Link to='/'> 
          <img src="https://benhviene.com/images/logoVienE101.png" alt="" />
          </Link>
        </div>
        <div className="menuFixTop">
          <div className="menuLogin">
            <Link to="login" className="">Đăng Nhập</Link>
          </div>
        </div>
        <div className="menuFixBot">
            <ul>
              <li>
                <Link>
                Trang chủ
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>
                Giới thiệu
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>
                Quy trình
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link>
                Hướng dẫn
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="">
                Tin tức
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="">
                Thắc Mắc
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="">
                Liên Hệ
                </Link>
              </li>
            </ul>
            <ul>
              <li>
                <Link to="phongkham">
                Phòng khám/Phòng mạch
                </Link>
              </li>
            </ul>
          </div>
      </div>
    </div>
    </header>
  )
}

export default Header