import { Link } from "react-router-dom"

export default function Header() {
    return (
    <>
        <header className="Header">
            <div className="logo">Router Study</div>
            <nav>
                <div>
                    {/* a태그는 페이지를 새로고침 하면서, 페이지를 이동시킴 */}
                    {/* Link 컴포넌트는 페이지를 새로고침 시키지 않고, 컴포넌트만 변경함 */}
                    <Link to="/">Home</Link>
                </div>
                <div>
                    <Link to="/Products">Product</Link>
                </div>
                <div>
                    <Link to="/Photos">Photos</Link>
                </div>
            </nav>
        </header>
    </>
    )
}