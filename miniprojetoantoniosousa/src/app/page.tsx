import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <div > HEY </div>
        <section>
          <div>
            <h1>Novidade</h1>
          </div>
        </section>
      
    
      </main>
      <footer className={styles.footer}>
        <div>
            <h1>É o footer</h1>
        </div>
      </footer>
    </div>
  );
}
