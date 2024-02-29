import GroupLink from "./GroupLink";

function Section() {
    return (
        <>
            <div class="toggle-container">
                <div class="toggle">
                    <div class="toggle-panel toggle-right">
                        <h1>Bienvenido de nuevo!</h1>
                        <p>Ingrese sus datos personales para utilizar todas las funciones del sitio</p>
                        <GroupLink to={"/"} msn={"Inicio de sesion"} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Section;

// const