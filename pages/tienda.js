import Layout from '../components/layout'
import Guitarra from '../components/guitarra'
import styles from '../styles/grid.module.css'

export default function Tienda({guitarras}) {

  return (
    <>
      <Layout
        title={'Tienda'}
        description={'Tienda en linea de guitarras numero uno de Colombia'}
      >
        <h1 className='heading'>Nuestra última colección</h1>
        <div className={styles.grid}>
          {guitarras?.map( guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </Layout>
    </>
  )
}

// export async function getServerSideProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`);
//   const { data: guitarras } = await respuesta.json()

//   return{
//     props: {
//       guitarras
//     }
//   }
// }

export async function getStaticProps(){

  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`

  const [ resGuitarras ] = await Promise.all([
    fetch(urlGuitarras),
  ])

  const [ {data: guitarras }] = await Promise.all([
    resGuitarras.json(),
  ])
  return {
    props: {
      guitarras
    }
  }
}