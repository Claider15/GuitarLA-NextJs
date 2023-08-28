import Image from "next/image"
import Layout from "../components/layout"
import styles from '../styles/nosotros.module.css'

export default function Nosotros() {
  return (
    <>
      <Layout
        title={'Nosotros'}
        description="Sobre nosotros, guitarLA, tienda de música"
        >
          <main className="contenedor">
            <h1 className="heading">Nosotros</h1>

          <div className={styles.contenido}>
            <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros"/>

            <div>
              <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas nulla nulla, consequat in arcu sed, ultricies convallis neque. Nulla elementum mollis ornare. Praesent fermentum ipsum vel neque consequat, non aliquam lectus cursus. Aliquam facilisis, elit vel pharetra ullamcorper, leo quam blandit mauris, quis mattis orci est ut odio. Integer tortor mauris, consectetur sit amet massa mollis, porta lacinia ligula.</p>
              <p>Pellentesque laoreet interdum justo, et sagittis nulla fringilla eu. Donec ut sem quis augue dictum tempus sed at nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. In mattis mollis augue vitae fringilla. Suspendisse scelerisque faucibus mauris. Vestibulum viverra nulla enim, vitae rutrum lectus aliquam at. Donec venenatis neque magna, et euismod ligula porta sed. Vivamus dictum erat ut cursus sollicitudin. Vivamus eget lacus eu.</p>
            </div>
          </div>
          </main>


      </Layout>
    </>
  )
}
