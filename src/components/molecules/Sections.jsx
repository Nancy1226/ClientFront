import GroupLink from "./GroupLink";

function Sections() {
    return (
        <>
        <div className="toggle-container">
            <div className="toggle">
                <div className="toggle-panel toggle-right">
                    <h1>Holaaa!</h1>
                    <p>Registrate con sus datos personales para utilizar todas las funciones del sitio</p>
                <GroupLink to={"/register"} msn={"Registrarse"} />
                </div>
            </div>
        </div>
        </>
    );
}

export default Sections;