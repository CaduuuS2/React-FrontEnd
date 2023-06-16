import { useState, useEffect } from "react";
import './catalogo.css'

export default function Catalogo() {
  const [flores, setFlores] = useState([
    {
      id: 1,
      nome: "Rosa",
      url: "https://img.elo7.com.br/product/zoom/1984181/rosa-vermelha-de-veludo-casa.jpg",
      cor: "Vermelha",
      favorita: false,
      pesquisa: true
    },
    {
      id: 2,
      nome: "Tulipa",
      url: "https://img.freepik.com/fotos-gratis/vista-de-cima-da-superficie-amarela-com-tulipas_23-2147609631.jpg?w=740&t=st=1686922803~exp=1686923403~hmac=0e4495867b80146b73d93d3753646250c9707ad1b67bddaa65af54b7262060b1",
      cor: "Amarela",
      favorita: false,
      pesquisa: true
    },
    {
      id: 3,
      nome: "Orquídea",
      url: "https://img.freepik.com/fotos-gratis/flores-da-orquidea-em-um-fundo-de-espaco-de-copia-rosa_23-2148268302.jpg?w=740&t=st=1686922943~exp=1686923543~hmac=9e8e555c59bc209369374274dfb8fdb02ec23ac6b708365570db238f6ec65d9e",
      cor: "Roxa",
      favorita: false,
      pesquisa: true
    },
    {
      id: 4,
      nome: "Girassol",
      url: "https://img.freepik.com/fotos-gratis/fundo-natural-de-girassol-girassol-floresce-na-primavera_335224-964.jpg?w=360&t=st=1686923078~exp=1686923678~hmac=efcf4797e3d4e7bcc198d8933b8e92f65934cec59776a8bbb168cd012db031de",
      cor: "Amarelo",
      favorita: false,
      pesquisa: true
    },
    {
      id: 5,
      nome: "Lírio",
      url: "https://img.freepik.com/fotos-gratis/a-planta-do-lirio-de-calla-floresce-em-um-fundo-branco-da-tela_127675-2435.jpg?w=360&t=st=1686923165~exp=1686923765~hmac=7ecfaf087bee3a7d662bda445c9dfacf95c4f2fd847febdb028401e4e1f03d07",
      cor: "Branco",
      favorita: false,
      pesquisa: true
    },
    {
      id: 6,
      nome: "Margarida",
      url: "https://img.freepik.com/fotos-gratis/margarida-adoravel-com-um-coracao-brilhante-na-primavera_268835-717.jpg?w=740&t=st=1686923225~exp=1686923825~hmac=328e3e5a48d0ebf57a330734f4f9fa2cde362728d98a886bae01ab960e84eb0c",
      cor: "Branca",
      favorita: false,
      pesquisa: true
    },
    {
      id: 7,
      nome: "Violeta",
      url: "https://casa.abril.com.br/wp-content/uploads/2022/06/violeta-africana-flor-gardeners-world.jpg?quality=95&strip=info&w=960",
      cor: "Azul",
      favorita: false,
      pesquisa: true
    },
    {
      id: 8,
      nome: "Hortênsia",
      url: "https://img.freepik.com/fotos-premium/fundo-de-hortensia-florescendo-roxo-fora-de-foco-fundo-desfocado_896686-855.jpg?w=740",
      cor: "Azul",
      favorita: false,
      pesquisa: true
    },
    {
      id: 9,
      nome: "Gérbera",
      url: "https://img.freepik.com/fotos-gratis/vista-superior-de-um-flor-vermelha_23-2148179336.jpg?w=740&t=st=1686923500~exp=1686924100~hmac=63c65f86fa98973579a784aa03981d43955c04b50cfe7bc6c0e4ddf786f1950e",
      cor: "Vermelha",
      favorita: false,
      pesquisa: true
    },
    {
      id: 10,
      nome: "Cravo",
      url: "https://img.freepik.com/fotos-gratis/close-de-uma-linda-flor-rosa-com-fundo-branco_181624-20488.jpg?w=740&t=st=1686923579~exp=1686924179~hmac=e9967f8b083812f7e5792bed300597ad6f8296990295eecca56847f972dca15d",
      cor: "Vermelho",
      favorita: false,
      pesquisa: true
    }
  ])
  const [floresComponente, setFloresComponente] = useState([])
  const [pesquisarInput, setPesquisarInput] = useState("");
  let contadorVisor

  const varrerFloresPorId = (id) => {
    const florEncontrada = flores.find((flor) => flor.id === id);
    return florEncontrada;
  }

  const pesquisarFlores = () => {
    const floresParam = flores.map((flor) => {
      if (flor.nome !== pesquisarInput) {
        return { ...flor, pesquisa: false }
      }
      return { ...flor, pesquisa: true }
    })
    setFlores([...floresParam])
  }

  const limparPesquisa = () => {
    const floresParam = flores.map((flor) => {
      return { ...flor, pesquisa: true }
    })
    setFlores([...floresParam])
    setPesquisarInput("")
  }

  const excluirFlor = (id) => {
    setFlores(flores.filter(flor => flor.id !== id))
  }

  const favoritarFlor = (flor) => {
    flor.favorita = !flor.favorita
    const floresAtualizado = [...flores.filter(item => item.id !== flor.id), flor]
    setFlores([...floresAtualizado.filter(item => item.favorita !== false), ...floresAtualizado.filter(item => item.favorita !== true)])
  }

  const contadorVisorFunction = () => {
    contadorVisor = 0
    flores.forEach((item) => {
      if(item.pesquisa === false) {
        contadorVisor += 1
      }
    })
    if(contadorVisor === flores.length) {
      return (
       <><hr style={{ margin: 20 }} />
       <h1>Nenhum item encontrado!</h1></>)
    }
  }

  const atualizarFloresComponente = () => {
    let floresComponenteParam = []
    flores.forEach((flor) => {
      if (flor.pesquisa === true) {
        floresComponenteParam.push(
          <div style={{ marginTop: 50 }} key={flor.id}>
            <hr style={{ margin: 20 }} />
            <div><img src={flor.url} style={{ height: 500, width: 600, marginTop: 20 }} /></div>
            <h1>{flor.nome}</h1>
            <h2>{flor.cor}</h2>
            <button style={{ margin: 15 }} onClick={() => { excluirFlor(flor.id) }}>
              Excluir Flor
            </button>
            <button style={{ margin: 15 }} onClick={() => { favoritarFlor(flor) }}>
              Favoritar Flor
            </button>
            <h3>Favorita? {flor.favorita === true ? "Yesss!" : "No..."}</h3>
          </div>
        )
      }
    })
    setFloresComponente([...floresComponenteParam])
  }

  useEffect(() => {
    atualizarFloresComponente()
    contadorVisorFunction()
  }, [flores])

  // useEffect(() => {
  //   pesquisarFlores()
  // }, [pesquisarInput])

  return (
    <div style={{ width: "100vw", textAlign: "center", marginBottom: 60 }}>
      <h1 style={{ margin: 15 }}>CATÁLOGO DE FLORES</h1>
      <h3 style={{ marginBottom: 10 }}>Pesquise por algo: </h3>
      <div>
        <label>
          <input
            type="text"
            value={pesquisarInput}
            onChange={(e) => setPesquisarInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                setPesquisarInput(e.target.value);
                pesquisarFlores()
              }
            }}
          />
        </label>
        <button style={{ margin: 15 }} onClick={() => { limparPesquisa() }}>
          Limpar Pesquisa
        </button>
      </div>
      {floresComponente}
      {contadorVisorFunction()}
      <hr style={{ margin: 20 }} />
    </div>
  );
}
