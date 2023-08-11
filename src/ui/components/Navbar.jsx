import { Link, NavLink, useNavigate } from 'react-router-dom';


export const Navbar = () => {

    const navigate = useNavigate();

    const onLogout = () => {
        navigate('login', {
            replace: true,
        })
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">

            <Link className="navbar-brand shadow" to="/">
                <img src="src/assets/marvel-dc.png" alt="Marvel-DC" height={60} />
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
                        to="/marvel"
                    >
                        Marvel
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>
                    <NavLink
                        className={({ isActive }) => `nav-item nav-link ${(isActive) ? 'active' : ''}`}
                        to="/search"
                    >
                        Buscar
                    </NavLink>
                </div>
            </div>

            <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarSupportedContent">
                <div className="d-none d-lg-block">
                    <ul className="navbar-nav">
                        <li className="nav-item dropdown" >
                            <a className="nav-link pr-0" href="#" role="button" data-toggle="dropdown" aria-haspopup="true"
                                aria-expanded="false">
                                <div className="media align-items-center">
                                    <div className="media-body mr-2 d-none d-lg-block">
                                        <span className="mb-0 text-white font-weight-bold user-name">David Flores</span>
                                    </div>
                                    <span className="" >
                                        <img src="https://res.cloudinary.com/dltvxi4tm/image/upload/v1679101186/adizqopkcvodldtou7re.png" width="40" height="40" className="rounded-circle" alt="Avatar" />
                                    </span>
                                </div>
                            </a>
                            <div className="dropdown-menu dropdown-menu-arrow dropdown-menu-right" >
                                <div className=" dropdown-header">
                                    <h6 className="text-overflow m-0">¡Bienvenido!</h6>
                                </div>
                                <div className="dropdown-item disabled">
                                    <span className="">David Flores</span>
                                </div>
                                <div className="dropdown-item disabled text-dark">
                                    <span className="font-weight-bold">david.flores</span>
                                </div>
                                <div className="dropdown-item disabled">
                                    <span className="">SuperUsuario</span>
                                </div>
                                <div className="dropdown-divider"></div>
                                <Link className="dropdown-item" to="/my-profile">
                                    <span>Actualizar Datos</span>
                                </Link>
                                <div className="dropdown-divider"></div>
                                <Link onClick={onLogout} className="dropdown-item" to="/login">
                                    <span>Salir</span>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}