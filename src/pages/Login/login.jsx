import React from "react";
import imageBack from './../../assets/logo/mainLogo.png';

function Login() {
    return (
        <>
            <div className="h-[100vh] w-[100vw] back-black absolute pb-10 flex justify-center items-center overflow-hidden">
                <div className="h-[100vh] blur-sm">
                    <img src={imageBack} alt="Logo" />
                </div>
            </div>
            <div className="h-[100vh] w-[100vw] z-[50] absolute flex justify-center items-center">
                <div className="w-[35vw] h-fit back-white shadow-[0_0_10px_rgba(0,0,0,0.7)] border border-gray-500 rounded-lg">
                    <h1 className="color-black font-bold text-2xl text-center mt-6">Cadastro</h1>
                    <form className="flex flex-col gap-4 mt-6 px-6 pb-4">
                        <input type="email" placeholder="Email" className="back-white border border-gray-500 color-black placeholder:text-black h-[6vh] rounded-md px-3 py-2 w-full" />
                        <input type="password" placeholder="Senha" className="back-white border border-gray-500 color-black placeholder:text-black h-[6vh] rounded-md px-3 py-2 w-full" />
                        <button className="back-black text-white h-[6vh] px-4 py-2 rounded-md hover:bg-gray-800 transition-colors font-bold">
                            Entrar
                        </button>
                    </form>
                    <div className="h-[7vh] w-full flex-col flex items-center justify-center gap-2">
                        <a href="/cadastro" className="color-black">
                            Não tem uma conta? Cadastre-se
                        </a>
                        <a href="">
                            Esqueci minha senha
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;