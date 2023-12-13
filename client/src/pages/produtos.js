import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ivaedbdscbtmcnibbgis.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2YWVkYmRzY2J0bWNuaWJiZ2lzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDI0NDM3MDksImV4cCI6MjAxODAxOTcwOX0.71SqfWTqpZYH9gSfkJfukazcEb_lrQ1IHbSEAL03oNw'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [produto, setProduto] = useState('')

  useEffect(() => {
    fetchProdutos()
  }, [])

  async function fetchProdutos() {
    const { data, error } = await supabase.from('descartes').select('*')
    if (error) console.error('Erro ao buscar produtos', error)
    else setProdutos(data)
  }

  function handleSearch() {
    const produtoFiltrado = produtos.filter(
      (p) => p.produto.toLowerCase() === produto.toLowerCase()
    )
    setProdutos(produtoFiltrado)
  }

  return (
    <div>
      <input
        id="produto"
        type="text"
        placeholder="Pesquise o produto desejado"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
      />
      <button id="lupa" onClick={handleSearch}>
        Buscar
      </button>
      {produtos.map((produto) => (
        <div className="card" key={produto.id}>
          <div className="container">
            <div className="info">
              <h4>
                <b>Produto: {produto.produto}</b>
              </h4>
              <p>Cliente: {produto.cliente}</p>
              <p>Contato: {produto.contato}</p>
            </div>
            <img src={produto.foto} alt="imagem do produto" />
          </div>
        </div>
      ))}
    </div>
  )
}

export default Produtos
