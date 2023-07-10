import { useState } from 'react'
import './App.scss'
import logo from './assets/react.svg'

function App() {
  const [cliente, setCliente] = useState({
    nome: "",
    email: "",
    telefone: "",
    cpf: ""
  })

  function formatarTelefone(event: any) {
    let telefoneLength = event.target.value.length;
    switch (telefoneLength) {
      case 0:
        event.target.value += "("
        break;
      case 3:
        event.target.value += ")"
        break;
      case 8:
        event.target.value += "-"
        break;

    }

  }

  function formatarCpf(event: any) {
    let cpfLength = event.target.value.length;
    if (cpfLength === 3 || cpfLength === 7) {
      event.target.value += "."
    }
    if (cpfLength === 11) {
      event.target.value += "-"
    }
  }

  function salvarCliente() {
    let telefoneRejeitado=[
      "(00)0000-0000",
      "(11)1111-1111",
      "(22)2222-2222",
      "(33)3333-3333",
      "(44)4444-4444",
      "(55)5555-5555",
      "(66)6666-6666",
      "(77)7777-7777",
      "(88)8888-8888",
      "(99)9999-9999"
    ].forEach(telefone=>{
      cliente.telefone == telefone ? alert("telefone inválido"):true
    })

    let cpfRejeitado = [
      "000.000.000-00",
      "111.111.111-11",
      "222.222.222-22",
      "333.333.333-33",
      "444.444.444-44",
      "555.555.555-55",
      "666.666.666-66",
      "777.777.777-77",
      "888.888.888-88",
      "999.999.999-99"
    ].forEach(cpf=>{
      cliente.cpf == cpf ? alert("cpf inválido"):true
    })
    alert(JSON.stringify(cliente, null, 2))    
  }


  return (
    <div className="col-12 d-flex flex-column justify-content-center align-items-center vh-100 bg-dark">
      <img src={logo} id="logo" className='mb-5' />
      <form>
        <div className="mb-3">
          <label htmlFor="nome" className="form-label text-white">NOME</label>
          <input
            type="nome"
            className="form-control"
            id="nome"
            autoComplete="off"
            name="nome"
            onChange={(event: any) => setCliente({ ...cliente, nome: event.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-white">EMAIL</label>
          <input
            type="email"
            className="form-control"
            id="email"
            autoComplete="off"
            name="email"
            onChange={(event: any) => setCliente({ ...cliente, email: event.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefone" className="form-label text-white">TELEFONE</label>
          <input
            type="tel"
            className="form-control"
            id="telefone"
            autoComplete="off"
            maxLength={13}
            name="telefone"
            onInput={(event: any) => event.target.value = event.target.value.replace(/[^0-9-/(/)]/g, "")}
            onKeyPress={(event: any) => formatarTelefone(event)}
            onChange={(event: any) => setCliente({ ...cliente, telefone: event.target.value })}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cep" className="form-label text-white">CPF</label>
          <input
            type="text"
            className="form-control"
            id="cpf"
            autoComplete="off"
            maxLength={14}
            name="cpf"
            onInput={(event: any) => event.target.value = event.target.value.replace(/[^0-9.-]/g, "")}
            onKeyPress={(event: any) => formatarCpf(event)}
            onChange={(event: any) => setCliente({ ...cliente, cpf: event.target.value })}
          />
        </div>
        <div className="mb-3 d-flex justify-content-end">
          <button type="button" className="btn btn-primary w-100" onClick={()=> salvarCliente()}>salvar</button>
        </div>
      </form>    
    </div>
  )
}

export default App
