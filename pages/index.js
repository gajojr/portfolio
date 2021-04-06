import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Andrija Gajic portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to my portfolio
        </h1>
        <p className={styles.description}>
          I am 17 year old web developer. Mostly working with mern stack, but also love to work with python and selenium automation. I also have interest in machine learning and blockchain, but don't have experience in those technologies. I am from Cacak, Serbia and currently I am 3. year in technical high school, IT major. My plans for the future are to go to Computer Science college and learn as much as possible while in school and college. I've learnt most of the stuff online via courses, tutorials, books and for everything that I learn I try to build some project or at least simulate use case of the technology that I've learnt.
        </p>
        <section className={styles.project}>
          <a href="https://gajo-chat-app.herokuapp.com/"><h1 className={styles.naslov}>Chat app</h1></a>
          <a href="https://gajo-chat-app.herokuapp.com/">
            <img className={styles.slika} src="/chat-app-img.PNG" alt="project picture" />
          </a>
          <p>This is chat app made with vanila js on front end, using pure css without any frameworks, preproccesors... On backend I've used nodejs(epxress.js) with socket.io. This app allows user to create room, join active rooms which are displayed on app homepage, and are updated in real time if new room is created. In chat we can see if new user joined and when user leaves. If user tries to use username which already exists in given room he won't be able to join and will be informed. In chat user can send text messsages and location via send location button. This web app is responsive, allows no profane words and it's hosted to heroku.</p>
        </section>
        <p className={styles.description}>
          * Offcourse this is not only app I've built, but it's the only one I deployed to web, on my github account you can see all the projects I've built(gadgets store, shoe store, animations playground, couple of web scrappers/automators...).
        </p>
      </main>

      <footer className={styles.footer}>
        <span style={{ fontSize: 20, marginRight: 5 }}>Let's connect:</span>
        <div className={styles.socialMedia}>
          <a className={styles.connection} href="https://www.linkedin.com/in/andrija-gajic-8b01051b7/">
            <FaLinkedin size={30} />
          </a>
          <a className={styles.connection} href="https://github.com/gajojr">
            <FaGithub size={30} />
          </a>
          <a className={styles.connection} href="mailto:andrijagajicbusiness@gmail.com">
            <HiOutlineMail size={30} />
          </a>
        </div>
      </footer>
    </div>
  )
}
