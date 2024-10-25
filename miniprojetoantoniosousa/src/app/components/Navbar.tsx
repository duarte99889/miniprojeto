import Link from "next/link";

export default function Navbar() {
  return (
    <nav style={styles.nav}>
      <ul style={styles.ul}>
        <li style={styles.listItem}>
          <Link href="/" style={styles.link}>Inicio</Link>
        </li>
        <li style={styles.listItem}>
          <Link href="/">Posts</Link>
        </li>
      </ul>
      <div style={styles.logo}>Blog dos Carros</div>
    </nav>
  );
}

const styles = {
  nav: {
    backgroundColor: 'black',
    padding: '10px 20px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: '24px', // Aumenta o tamanho da fonte
    flexGrow: 1,
    alignItems: 'center',
    
  },
  ul: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  listItem: {
    marginLeft: '20px',
  },
  link: {
    color: 'white',
    fontWeight: 'bold',
    textDecoration: 'none',
  },
};
