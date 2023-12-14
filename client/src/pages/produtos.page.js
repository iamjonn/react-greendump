import React, { useState, useEffect } from 'react'
import { createClient } from '@supabase/supabase-js'
import styles from './Produtos.module.css'


const supabaseUrl = 'https://ivaedbdscbtmcnibbgis.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml2YWVkYmRzY2J0bWNuaWJiZ2lzIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMjQ0MzcwOSwiZXhwIjoyMDE4MDE5NzA5fQ.0a1sjZXfCZDaZbntD05c_Jo175caVGcfGuIixU2-LKE'
const supabase = createClient(supabaseUrl, supabaseAnonKey)

function Produtos() {
  const [produtos, setProdutos] = useState([])
  const [produto, setProduto] = useState('')
  const [produtoFiltrado, setProdutoFiltrado] = useState([]) // novo estado para o produto filtrado

  useEffect(() => {
    fetchProdutos()
  }, [])

  async function fetchProdutos() {
    const { data, error } = await supabase.from('descartes').select('*')
    if (error) console.error('Erro ao buscar produtos', error)
    else 
    console.log(data) // adiciona esta linha
    setProdutos(data)
  }

  function handleSearch() {
    const produtoFiltrado = produtos.filter(
      (p) => p.produto.toLowerCase() === produto.toLowerCase()
    )
    if (produtoFiltrado.length === 0) {
      alert('Nenhum produto encontrado')
    } else {
      setProdutoFiltrado(produtoFiltrado) // atualiza o produto filtrado
    }
  }
 
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <span className={styles.green}>GREEN</span>
        <span className={styles.dump}>DUMP</span>
      </div>
    <div className={styles.container}>
      <div className={styles.caixa}>
      <h1 className={styles.titulo}>PESQUISE SEU PRODUTO</h1>
      <input
        id="produto"
        type="text"
        placeholder="Pesquise o produto desejado"
        value={produto}
        onChange={(e) => setProduto(e.target.value)}
        className={styles.input}
      />
      <button id="lupa" onClick={handleSearch} className={styles.button}>
        Buscar
      </button></div>
      <div className={styles.cardsContainer}>
        {produtoFiltrado.length > 0 ? (
          produtoFiltrado.map((produto) => (
            <div className={styles.card} key={produto.id}>
              <div className={styles.cardContainer}>
                <img src={produto.foto} alt="imagem do produto" className={styles.image} />
                <div className={styles.info}>
                  <h4>
                    <b> {produto.produto}</b>
                  </h4>
                  <p>Cliente: {produto.cliente}</p>
                  <p>Contato: {produto.contato}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p></p>
        )}
      </div>
    </div>
    </div>
  )
  
  
  
}

export default Produtos
