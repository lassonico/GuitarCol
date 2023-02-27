import Layout from "../components/layout"
import Link from "next/link"

export default function Paguna404() {
  return (
    <Layout
        title="Pagina No encontrada"
    >
        <div className="cont-error">
            <p className="error">Página no encontrada</p>
            <Link href="/" className="error-enlace">Ir al inicio</Link>
        </div>
    </Layout>
  )
}
