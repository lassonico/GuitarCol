import styiles from '../styles/curso.module.css'

export default function Curso({curso}) {
    const { contenido, imagen, titulo } = curso.attributes
  return (
    <section className={`${styiles.curso} curso`}>
        <style jsx>{`
            .curso {
                background-image: linear-gradient( to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
            }
        `}</style>
        <div className={`contenedor ${styiles.grid}`}>
            <div className={styiles.contenido}>
                <h2 className='heading'>{titulo}</h2>
                <p>{contenido}</p>
            </div>
        </div>
    </section>
  )
}
