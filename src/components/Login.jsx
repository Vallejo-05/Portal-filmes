export default function Login({isLogged, handleLogin}){

    return(
        <>
        <div className="flex gap-4 item-center">
        {isLogged && <p>Olá, usuário</p>}
        <button  onClick={handleLogin} className="bg-white text-purple-800 px-4 py-y rounded">{isLogged ? "Logout" : "Login"}</button>
        </div>
        </>
    )
}